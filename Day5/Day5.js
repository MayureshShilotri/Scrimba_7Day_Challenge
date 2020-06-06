/*
Hi fellow coder 👋

How did it go yesterday? Did you mange to solve the Sum All Primes challenge? If so, remember to share your solution in the #share-your-code channel in our community Discord!

If you didn't solve it, no worries, you shouldn't feel bad! Struggling with something just means that you're learning and pushing yourself to the limit. Here's Dylan's solution to the challenge, so be sure to check it out.

Once you're ready, click the link below in order to see the instructions for today's challenge 👇

Day 5: Even Digits Only

If you feel you're lacking the JavaScript skills needed to solve the challenge, you can check out Dylan's free Intro to JavaScript and Intro to ES6 courses first. And if those aren't enough, we also have a full-blown JavaScript bootcamp.

Best of luck 😁

PS: If you want to unroll from this 7-day JavaScript course, you can click here, and you won't receive any more JavaScript challenges. You'll still be on Scrimba's general newsletter, so if you'd like to stop receiving emails from us entirely, simply click the unsubscribe link at the bottom of this email.

Cheers
Per Harald Borgen
*/


function evenDigitsOnly(number) {
    let remainder = 0;
    let iteration = number.toString().length;
    for (let i = 0; i < iteration; i++) {
        remainder = number % 10;
        number = Math.floor(number/10);
        if (remainder % 2 != 0) {
            return false;
        }
    }
    return true;
}



/**
* Test Suite
*/
describe('evenDigitsOnly()', () => {
    it('returns true when all digits are even', () => {
        // arrange
        const nums = 248622;

        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 1 : ", result);

        // assert
        expect(result).toBe(true);
    });

    it('returns fale when any digits are odd', () => {
        // arrange
        const nums = 642386;

        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 2 : ", result);

        // assert
        expect(result).toBe(false);
    });
});
