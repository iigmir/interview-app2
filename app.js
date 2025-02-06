const { AZ52ToDecimal, DecimalToAZ52 } = require("./dist/src/az52");

console.table({
    DecimalToAZ52: {
        "0": DecimalToAZ52(0),
        "26": DecimalToAZ52(26),
        "123": DecimalToAZ52(123),
        "231": DecimalToAZ52(231),
        "4073126405": DecimalToAZ52(4073126405)
    },
});

console.table({
    AZ52ToDecimal: {
        Ak: AZ52ToDecimal("Ak"),
        // (37*2704) + (36*52) + (36*1)
        LKK: AZ52ToDecimal("LKK"),
        kLdXLX: AZ52ToDecimal("kLdXLX"),
    }
});

// const { Split } = require("./src/split");
// console.group({
//     s2: Split({ Start: 1.7, End: 4.8 }),
//     s1: Split({ Start: 0, End: 1.5 }),
// })
