import type React from "react";
import { useEffect, useRef } from "react";

interface BoardProp {
    width: number;
    height: number;
    draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
}

const Board: React.FC<BoardProp> = ({ width, height, draw }) => {
    const boardRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const board = boardRef.current;
        if (!board) return;

        const context = board.getContext('2d');
        if (!context) return;

        let frameCount = 0;
        let animationFrameId: number;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw]);

    return <canvas ref={boardRef} width={width} height={height} />
}

export default Board;
export { type BoardProp };