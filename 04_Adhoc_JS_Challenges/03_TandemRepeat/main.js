function isTandemRepeat(str) {
    if (str.length % 2 == 0) {
        if (str.slice(0,str.length/2) == str.slice(str.length/2,str.length)) {
            return true;
        }
    } else {
        return false;
    }
}


/**
* Test Suite
*/
describe('isTandemRepeat()', () => {
    it('returns true when first half matches second half', () => {
        // arrange
        const str = "tandemtandem";

        // act
        const result = isTandemRepeat(str);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(true);
    });

    it('returns false when first half does NOT matches second half', () => {
        // arrange
        const str = "qqq";

        // act
        const result = isTandemRepeat(str);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(false);
    });
});
