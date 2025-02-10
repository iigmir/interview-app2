import assert from "assert";
import { CalDivideTimes } from "../src/caldiv";

describe("CutCake", () => {
    describe("return minimum cuts do for given part numbers", () => {
        it("1", () => { assert.strictEqual( CalDivideTimes(1), 0 ); });
        it("4", () => { assert.strictEqual( CalDivideTimes(4), 2 ); });
        it("3", () => { assert.strictEqual( CalDivideTimes(3), 3 ); });
    });
    describe("return -1 if it doesn't exist", () => {
        it("7", () => { assert.strictEqual( CalDivideTimes(7), -1 ); });
    });
});
