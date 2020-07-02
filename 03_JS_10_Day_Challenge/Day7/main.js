function factorialNumber(num) {
    let factor = 1;
    for (let i = 1; i <= num; i++) {
        factor *= i;
    }
    return factor;
}



/**
* Test Suite
*/
describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;

        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(120);
    });
});
