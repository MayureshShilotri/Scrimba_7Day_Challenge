function alternatingSums(array) {
    let counterOne = 0;
    let counterTwo = 0;
    for(let i = 0; i < array.length ; i++) {
        if (i % 2 == 0) {
            counterOne += array[i];
        } else {
            counterTwo += array[i];
        }
    }
    return [counterOne, counterTwo];
}



/**
* Test Suite
*/
describe('alternatingSums()', () => {
    it('returns alternating sums of even and odd', () => {
        // arrange
        const nums = [50, 60, 60, 45, 70];

        // act
        const result = alternatingSums(nums);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual([180, 105]);
    });
});
