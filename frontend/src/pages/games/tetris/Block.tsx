
type BlockProp = {
    blocks: number[],
    color: string,
    size: number,
}

const Blocki: BlockProp = { size: 4, blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'cyan' };
const Blockj: BlockProp = { size: 3, blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'blue' };
const Blockl: BlockProp = { size: 3, blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'orange' };
const Blocko: BlockProp = { size: 2, blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'yellow' };
const Blocks: BlockProp = { size: 3, blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'green' };
const Blockt: BlockProp = { size: 3, blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'purple' };
const Blockz: BlockProp = { size: 3, blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'red' };

const KEY = {
    ESC: "ESC", SPACE: "Space", LEFT: "ArrowLeft",
    UP: "ArrowUp", RIGHT: "ArrowRight", DOWN: "ArrowDown"
};

const DIR = {
    UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3, MIN: 0, MAX: 3
}

const SPEED = {
    /* SECONDS UNTIL CURRENT PIECE DROPS 1 ROW */
    min: 0.1,
    start: 0.6,
    decrement: 0.005,
}

/**
 * @param: nx - Width of tetris court (in blocks)
 * @param: ny - height of tetris court (in blocks)
 * @param: nu - width/height of upcoming preview
 */

const DIAMENSION = {
    nx: 10,
    ny: 20,
    nu: 5,

}

export {
    Blocki,
    Blockj,
    Blockl,
    Blocko,
    Blocks,
    Blockt,
    Blockz,
    KEY,
    DIR,
    SPEED,
    DIAMENSION,
    type BlockProp,
};