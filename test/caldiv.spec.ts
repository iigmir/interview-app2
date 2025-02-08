import assert from "assert";
import { CalDivideTimes } from "../src/caldiv";

describe("CutCake", () => {
    describe("回傳最少要切幾刀", () => {
        it("1", () => { assert.strictEqual( CalDivideTimes(1), 0 ); });
        it("4", () => { assert.strictEqual( CalDivideTimes(4), 2 ); });
        it("3", () => { assert.strictEqual( CalDivideTimes(3), 3 ); });
    });
    describe("若無法均分請回傳 -1", () => {
        it("7", () => { assert.strictEqual( CalDivideTimes(7), -1 ); });
    });
});
