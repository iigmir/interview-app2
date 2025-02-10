/**
 * @see <https://algo.monster/liteproblems/2481>
 * @param n 
 * @returns 
 */
export const CalDivideTimes = (n: number): number => {
    // If n is greater than 1 and odd,
    // return n itself
    if (n > 1 && n % 2 !== 0) {
        return n;
    }
    // If n is not greater than 1 or is even,
    // divide n by 2 using bitwise shift and return
    return n >> 1;
};
