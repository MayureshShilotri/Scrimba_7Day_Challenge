function firstDigit(str) {
    let arrStr = str.split('');
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].match(/\d/) != null) {
            return arrStr[i];
        }
    }
}



/**
* Test Suite
*/
describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "var_1__Int2";

        // act
        const result = firstDigit(str);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe('1');
    });
});
