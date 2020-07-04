function largestNumber(num) {
    let numArr = [];
    for (let i = 0; i < num; i++) {
        numArr.push(9);
    }
    return parseInt(numArr.join(""),10);
}
/**
Another Solution

function largestNumber(num) {
    \return Math.pow(10, num) - 1;
}
*/


/**
* Test Suite
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;

        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(99);
    });
});
