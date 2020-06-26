function add(...param) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return param.reduce(reducer);
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
