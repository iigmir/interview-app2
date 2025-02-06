// 10進制與52進制對照表
const KEYS = [
    // 0~25
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "u",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    // 26~51
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "U",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];
const BASE_RADIX = KEYS.length;

/**
 * 將 10 進制數字轉為 52 進制
 * @param dec 
 * @returns 
 */
export function DecimalToAZ52(dec: number): string {
    let result = "";
    let num = dec;
    // 0 will not render in our adjustment,
    // therefore we need to return it manually
    if( dec === 0 ) {
        return "a";
    }
    while( num > 0 ) {
        const remainder = num % BASE_RADIX;
        result = KEYS[remainder] + result;
        num = Math.floor(num / BASE_RADIX);
    }
    return result;
}

/**
 * 將 52 進制文字轉為 10 進制
 * @param dec 
 * @returns 
 */
export function AZ52ToDecimal(dec: string): number {
    let result = 0;
    const tokens = dec.split("");
    tokens.forEach( (token) => {
        const char = KEYS.indexOf(token);
        result = result * BASE_RADIX + char;
    });
    return result;
}
