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

export const LimitToThree = (input: number): number => {
    const str = String(input);

    // 256 => 256
    if (Number.isInteger(input)) {
        return Math.floor(input);
    }
    const [int, dec] = str.split(".");

    // 123.4 => 123
    if (int.length >= 3) {
        return Math.floor(input);
    }

    // "12.345" => "12.3"
    let returned_dec = dec.slice(0, 3 - int.length); // Limit to 3 total digits
    if (returned_dec === "") {
        returned_dec = "0"; // If there's no decimal part, set it to "0"
    }
    
    return parseFloat(`${int}.${returned_dec}`); 
};

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
    const result_value = LimitToThree(parse_float(num));
    return `${result_value}${fit_item.name}`;
}
