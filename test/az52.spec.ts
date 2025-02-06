import assert from "assert";
import { DecimalToAZ52, AZ52ToDecimal } from "../src/az52";

describe("DecimalToAZ52", () => {
    it("can change from number to text: Basic 1", () => {
        assert.strictEqual( DecimalToAZ52(0), "a" );
    });
    it("can change from number to text: Basic 2", () => {
        assert.strictEqual( DecimalToAZ52(26), "A" );
    });
    it("can change from number to text: Complex", () => {
        let DecimalNumber: number = 4073126405;
        assert.strictEqual( DecimalToAZ52(DecimalNumber), "kLdXLX" );
    });
});
describe("AZ52ToDecimal", () => {
    it("can change from text to number", () => {
        let AZ52Number: string = "kLdXLX";
        assert.strictEqual( AZ52ToDecimal(AZ52Number), 4073126405 );
    });
});
