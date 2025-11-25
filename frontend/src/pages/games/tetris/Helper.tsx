import { Blocki, Blockj, Blockl, Blocko, Blockt, Blockz, Blocks, type BlockProp, DIAMENSION, DIR } from "./Block";

let piece: BlockProp[] = [];

type PieceProp = {
    type: BlockProp,
    dir: number,
    x: number,
    y: number,
}

type EachBlockProp = {
    blockType: BlockProp,
    x: number,
    y: number,
    dir: number,
    fn: (x: number, y: number) => void,
}

type OccupiedProp = {
    blockType: BlockProp,
    x: number,
    y: number,
    dir: number,
}

function EachBlock({ blockType, x, y, dir, fn }: EachBlockProp) {
    let bit, result, row = 0, col = 0, blocks = blockType.blocks[dir]
    for (bit = 0x8000; bit > 0; bit = bit >> 1) {
        if (blocks & bit) fn(x + col, y + row);
        if (++col === 4) {
            col = 0;
            ++row
        }
    }
}

function occupied({ blockType, x, y, dir }: OccupiedProp) {
    let result = false;

    EachBlock({
        blockType: blockType, x: x, y: y, dir: dir, fn(x: number, y: number) {
            if ((x < 0) || (x >= DIAMENSION.nx) || (y < 0) || (y >= DIAMENSION.ny) || getBlock(x, y))
                result = true;
        },
    });
    return result;
}

function unoccupied({ blockType, x, y, dir }: OccupiedProp) {
    return !occupied({ blockType, x, y, dir })
}

function getRandomBlock(): PieceProp {
    if (piece.length == 0)
        piece = [Blocki, Blockj, Blockl, Blocko, Blocks, Blockt, Blockz];
    let types = piece.splice(Math.random() % piece.length, 1)[0];
    return {
        type: types, dir: DIR.UP, x: 2, y: 0
    }
}

function getBlock(x: number, y: number) {
    // Return the block at position (x, y) on the game board
    // This is a placeholder implementation; replace it with actual game board logic
    return null; // or return the block object if occupied
}

export {
    getRandomBlock,
    unoccupied,
    occupied,
    EachBlock,
    type PieceProp,
}