const KEY_TABLE = [
    { name: "T", value: 1000000000000 },
    { name: "B", value: 1000000000 },
    { name: "M", value: 1000000 },
    { name: "K", value: 1000 },
];

const BASIC_RANGE = 1000;

export function FindLimitIndex(num: number) {
    // Iterate through the KEY_TABLE in reverse order
    // to find the appropriate index
    for (let i = 0; i < KEY_TABLE.length; i++) {
        if (num >= KEY_TABLE[i].value) {
            // Return the index of the first unit
            // that is less than or equal to num
            return i; 
        }
    }
    // If num is less than 1K,
    // return the length of the table
    return KEY_TABLE.length; 
}

export function GetFitItem(limit_index: number) {
    return KEY_TABLE[limit_index];
}

export function Format(num: number): string {
    // Return the value as-is we don't calc
    const out_of_limit = num < 1000 || num > 1000000000000000;
    if( out_of_limit ) {
        return String(num);
    }
    // Detect which range des num belongs to
    // And if the index doesn't exist, return the value as-is
    const limit_index = FindLimitIndex(num);
    if( limit_index < 0 ) {
        return String(num);
    }
    // And now let's parse it
    const fit_item = GetFitItem(limit_index);
    const parse_float = (input: number): number => {
        const int = String(input).slice(0, -3);
        const dec = String(input).slice(-3);
        const formatted_float = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".") || "0";
        return parseFloat(`${formatted_float}.${dec}`);
    };
    return `${parse_float(num)}${fit_item.name}`;
}
