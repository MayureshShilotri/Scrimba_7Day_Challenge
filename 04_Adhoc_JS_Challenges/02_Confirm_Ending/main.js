function confirmEnding(str, ending) {
    if(str.slice(str.length-ending.length,str.length) == ending) {
        return true;
    } else {
        return false;
    }
}


/**
* Test Suite
*/
describe('confirmEnding()', () => {
    it('returns true when the ending is at the end of the string', () => {
        // arrange
        const full = "Abstraction";
        const ending = "action";

        // act
        const result = confirmEnding(full, ending);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(true);
    });

    it('returns false when the ending is NOT at the end of the string', () => {
        // arrange
        const full = "Open sesame";
        const ending = "pen";

        // act
        const result = confirmEnding(full, ending);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(false);
    });
});
