
function compareIntegers(num1, num2) {
    if (parseInt(num1) > parseInt(num2)) {
        return "greater";
    } else if (parseInt(num1) < parseInt(num2)) {
        return "less";
    } else {
        return "equal";
    }
}



/**
* Test Suite
*/
describe('compareIntegers()', () => {
    it('returns "less" when first num is less than second num', () => {
        // arrange
        const num1 = "12";
        const num2 = "13";

        // act
        const result = compareIntegers(num1, num2);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe("less");
    });

    it('returns "greater" when first num greater than the second num', () => {
        // arrange
        const num1 = "875";
        const num2 = "799";

        // act
        const result = compareIntegers(num1, num2);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe("greater");
    });

    it('returns "equal" when first and second number are the same', () => {
        // arrange
        const num1 = "1000";
        const num2 = "1000";

        // act
        const result = compareIntegers(num1, num2);

        // log
        console.log("result 3: ", result);

        // assert
        expect(result).toBe("equal");
    });
});
