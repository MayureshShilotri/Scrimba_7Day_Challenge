function add(...param) {
    let j = 0;
    for (let i = 0 ; i < param.length; i++) {
        j += param[i];
    }
    return j;
}

console.log(add(1,2,3,4,5));

/**
* Test Suite
*/
describe('add()', () => {
    it('adds two numbers', () => {
        // arrange
        const num1 = 1;
        const num2 = 2;

        // act
        const result = add(num1, num2);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(3);
    });

    xit('adds any ammount of numbers', () => {
        // arrange
        const num1 = 1;
        const num2 = 2;
        const num3 = 3

        // act
        const result = add(num1, num2, num3);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(6);
    });
});
