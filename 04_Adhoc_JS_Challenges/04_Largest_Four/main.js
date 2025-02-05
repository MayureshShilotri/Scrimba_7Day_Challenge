function largestOfFour(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i].sort((a,b) =>
         b-a)[0])
    }
return result
}

/**
* Test Suite
*/
describe('largestOfFour()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const nums = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

        // act
        const result = largestOfFour(nums);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual([5, 27, 39, 1001]);
    });
});
