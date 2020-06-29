function allLongestStrings(array) {
    let longestString = 0;
    let newString = [];
    for (let i = 0;i < array.length; i++) {
        if(array[i].length > longestString) {
            longestString = array[i].length;
        }
    }
    for (let i = 0;i < array.length; i++) {
        if(array[i].length == longestString) {
            newString.push(array[i]);
        }
    }
    return newString;
}



/**
* Test Suite
*/
describe('allLongestStrings()', () => {
    it('returns all longest strings', () => {
        // arrange
        const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];

        // act
        const result = allLongestStrings(strings);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual(["aba", "vcd", "aba"]);
    });
});
