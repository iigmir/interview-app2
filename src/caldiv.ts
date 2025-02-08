export const CalDivideTimes = (n: number): number => {
    if( n < 1 ) {
        return -1;
    }
    const circle_degree = 360;
    if( circle_degree % n === 0 ) {
        return n - 1;
    }
    return -1;
};
