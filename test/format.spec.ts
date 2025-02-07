import assert from "assert";
import { Format } from "../src/format";

describe("Format", () => {
    describe(">= 1,000, < 1,000,000,000,000,000 的數值需要做單位換算", () => {
        it("1000", () => { assert.strictEqual( Format(1000), "1K" ); });
        it("1000000", () => { assert.strictEqual( Format(1000000), "1M" ); });
        it("1000000000", () => { assert.strictEqual( Format(1000), "1B" ); });
        it("1000000000000", () => { assert.strictEqual( Format(1000000000000), "1T" ); });
    });
    describe("經過單位換算的數值，最多顯示 3 個數字， 小數位數不補 0", () => {
        // ex. 1.12K 11.2K 111K
        it("1.23K", () => { assert.strictEqual( Format(1230), "1.23K" ); });
        it("12.3M", () => { assert.strictEqual( Format(12345000), "12.3M" ); });
        it("123T", () => { assert.strictEqual( Format(123456000000000), "123T" ); });
        it("other", () => {
            assert.strictEqual( Format(123456), "123K" );
            assert.strictEqual( Format(999000000000), "999B" );
            assert.strictEqual( Format(12345000000000), "12.3T" );
            assert.strictEqual( Format(123456000), "123M" );
            assert.strictEqual( Format(12345000000), "12.3B" );
            assert.strictEqual( Format(1230000000000), "1.23T" );
        });
    });
    describe("不做單位換算的數值，直接轉爲字串即可", () => {
        it("< 1,000", () => {
            assert.strictEqual( Format(1.23), "1.23" );
            assert.strictEqual( Format(0), "0" );
            assert.strictEqual( Format(999), "999" );
        });
        it(">= 1,000,000,000,000,000", () => {
            assert.strictEqual( Format(1234560000000000), "1234560000000000" );
        });
    });
});
