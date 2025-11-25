import { useEffect, useState, useRef, useCallback } from "react";
import {
    Blocki,
    Blockj,
    DIAMENSION,
    DIR,
    KEY,
    SPEED,
    type BlockProp,
} from "./Block";
import {
    EachBlock,
    getRandomBlock,
    occupied,
    unoccupied,
    type PieceProp,
} from "./Helper";
import Board from "./Board";

interface InvalidState {
    court: boolean;
    next: boolean;
    score: boolean;
    rows: boolean;
}

let invalid: InvalidState = {
    court: false,
    next: false,
    score: false,
    rows: false,
};

const invalidate = () => (invalid.court = true);
const invalidateNext = () => (invalid.next = true);
const invalidateRows = () => (invalid.rows = true);
const invalidateScore = () => (invalid.score = true);

export default function Tetris() {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [playing, setPlaying] = useState(false);

    const dx = 50;
    const dy = 50;

    const blocks = useRef<Array<Array<BlockProp | null>>>([]);
    const actions = useRef<number[]>([]);
    const dt = useRef(0);
    const step = useRef(SPEED.start);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ucanvasRef = useRef<HTMLCanvasElement>(null);
    const statsRef = useRef<any>(null);

    const current = useRef<PieceProp>({ type: Blocki, dir: DIR.DOWN, x: 0, y: 0 });
    const next = useRef<PieceProp>({ type: Blockj, dir: DIR.DOWN, x: 0, y: 0 });

    // === Helper Functions ===
    const addScore = (n: number) => setScore((s) => s + n);
    const addRows = (n: number) => {
        setRows((r) => r + n);
        step.current = Math.max(SPEED.min, SPEED.start - SPEED.decrement * (rows + n));
    };

    const getBlock = (x: number, y: number): BlockProp | null => {
        return blocks.current[x]?.[y] || null;
    };

    const setBlock = (x: number, y: number, blockType: BlockProp | null) => {
        blocks.current[x] = blocks.current[x] || [];
        blocks.current[x][y] = blockType;
        invalidate();
    };

    const setCurrentPiece = (piece?: PieceProp) => {
        current.current = piece || getRandomBlock();
        invalidate();
    };

    const setNextPiece = (piece?: PieceProp) => {
        next.current = piece || getRandomBlock();
        invalidateNext();
    };

    // === Game Logic ===
    const move = (dir: number): boolean => {
        let x = current.current.x;
        let y = current.current.y;

        switch (dir) {
            case DIR.RIGHT:
                x++;
                break;
            case DIR.LEFT:
                x--;
                break;
            case DIR.DOWN:
                y++;
                break;
        }

        if (
            unoccupied({
                blockType: current.current.type,
                x,
                y,
                dir: current.current.dir,
            })
        ) {
            current.current.x = x;
            current.current.y = y;
            invalidate();
            return true;
        }

        return false;
    };

    const rotate = () => {
        const newDir =
            current.current.dir === DIR.MAX ? DIR.MIN : current.current.dir + 1;
        if (
            unoccupied({
                blockType: current.current.type,
                x: current.current.x,
                y: current.current.y,
                dir: newDir,
            })
        ) {
            current.current.dir = newDir;
            invalidate();
        }
    };

    const dropPiece = () => {
        EachBlock({
            blockType: current.current.type,
            x: current.current.x,
            y: current.current.y,
            dir: current.current.dir,
            fn: (x, y) => setBlock(x, y, current.current.type),
        });
    };

    const removeLine = (n: number) => {
        for (let y = n; y >= 0; y--) {
            for (let x = 0; x < DIAMENSION.nx; x++) {
                setBlock(x, y, y === 0 ? null : getBlock(x, y - 1));
            }
        }
    };

    const removeLines = () => {
        let n = 0;
        for (let y = DIAMENSION.ny - 1; y >= 0; y--) {
            let complete = true;
            for (let x = 0; x < DIAMENSION.nx; x++) {
                if (!getBlock(x, y)) complete = false;
            }
            if (complete) {
                removeLine(y);
                y++;
                n++;
            }
        }
        if (n > 0) {
            addRows(n);
            addScore(100 * Math.pow(2, n - 1));
        }
    };

    const drop = () => {
        if (!move(DIR.DOWN)) {
            addScore(10);
            dropPiece();
            removeLines();
            setCurrentPiece(next.current);
            setNextPiece(getRandomBlock());
            if (
                occupied({
                    blockType: current.current.type,
                    x: current.current.x,
                    y: current.current.y,
                    dir: current.current.dir,
                })
            ) {
                lose();
            }
        }
    };

    const handle = (action?: number) => {
        switch (action) {
            case DIR.LEFT:
            case DIR.RIGHT:
            case DIR.DOWN:
                move(action);
                break;
            case DIR.UP:
                rotate();
                break;
        }
    };

    const update = (idt: number) => {
        if (playing) {
            handle(actions.current.shift());
            dt.current += idt;
            if (dt.current > step.current) {
                dt.current -= step.current;
                drop();
            }
        }
    };

    const play = () => {
        setPlaying(true);
        reset();
    };

    const lose = () => {
        setPlaying(false);
    };

    const reset = () => {
        dt.current = 0;
        actions.current = [];
        blocks.current = [];
        setScore(0);
        setRows(0);
        setCurrentPiece(next.current);
        setNextPiece(getRandomBlock());
    };

    // === Input Handling ===
    const keydown = useCallback(
        (ev: KeyboardEvent) => {
            if (playing) {
                switch (ev.code) {
                    case KEY.LEFT:
                        actions.current.push(DIR.LEFT);
                        break;
                    case KEY.RIGHT:
                        actions.current.push(DIR.RIGHT);
                        break;
                    case KEY.UP:
                        actions.current.push(DIR.UP);
                        break;
                    case KEY.DOWN:
                        actions.current.push(DIR.DOWN);
                        break;
                    case KEY.ESC:
                        lose();
                        break;
                }
            } else if (ev.code === KEY.SPACE) {
                play();
            }
        },
        [playing]
    );

    useEffect(() => {
        window.addEventListener("keydown", keydown);
        return () => window.removeEventListener("keydown", keydown);
    }, [keydown]);

    // === Canvas Drawing (Example Animation) ===
    const drawMyScene = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            const size = 50;
            const x = 50 + Math.sin(frameCount * 0.05) * 40;
            const y = 50;
            ctx.fillStyle = "blue";
            ctx.fillRect(x, y, size, size);
        },
        []
    );

    function showStats() {
        if (!statsRef.current) return;
        statsRef.current.id = "stats";
        const menu = get("menu");
        if (menu) menu.appendChild(statsRef.current);
    }

    function addEvents() {
        document.addEventListener("keydown", keydown, false);
        window.addEventListener("resize", resize, false);
    }

    function resize() {
        const canvas = canvasRef.current;
        const ucanvas = ucanvasRef.current;
        if (!canvas || !ucanvas) return;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        ucanvas.width = ucanvas.clientWidth;
        ucanvas.height = ucanvas.clientHeight;

        dx = canvas.width / nx;
        dy = canvas.height / ny;
        invalidate();
        invalidateNext();
    }

    function run() {
        showStats();
        addEvents();

        let last = timestamp();
        function frame() {
            const now = timestamp();
            const delta = Math.min(1, (now - last) / 1000.0);
            update(delta);
            draw();
            if (statsRef.current?.update) statsRef.current.update();
            last = now;
            requestAnimationFrame(frame);
        }

        resize();
        reset();
        frame();
    }

    useEffect(() => {
        run();
        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("keydown", keydown);
        };
    }, []);

    return (
        <div className="my-10 text-center font-medium text-gray-700 space-y-2">
            <h2 className="text-xl font-semibold">🎮 Tetris Game</h2>
            <div className="flex justify-center gap-8 text-gray-800">
                <p>Score: {score}</p>
                <p>Rows: {rows}</p>
            </div>

            <Board width={dx} height={dy} draw={drawMyScene} />

            <button
                onClick={() => (playing ? lose() : play())}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                {playing ? "Stop Game" : "Start Game"}
            </button>
        </div>
    );
}
