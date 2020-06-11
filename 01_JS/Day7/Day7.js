/*
Hi fellow coder 👋
How did it go yesterday? Did you mange to solve the Make Array Consecutive challenge? If so, remember to share your solution in the #share-your-code channel in our community Discord!

If you didn't solve it, no worries, you shouldn't feel bad! Struggling with something just means that you're learning and pushing yourself to the limit. Here's Dylan's solution to the challenge, so be sure to check it out.

Once you're ready, click the link below in order to see the instructions for today's challenge 👇

Day 7: Proper Noun Correction

If you feel you're lacking the JavaScript skills needed to solve the challenge, you can check out Dylan's free Intro to JavaScript and Intro to ES6 courses first. And if those aren't enough, we also have a full-blown JavaScript bootcamp.

Best of luck 😁

PS: If you want to unroll from this 7-day JavaScript course, you can click here, and you won't receive any more JavaScript challenges. You'll still be on Scrimba's general newsletter, so if you'd like to stop receiving emails from us entirely, simply click the unsubscribe link at the bottom of this email.
Cheers
Per Harald Borgen
*/


function properNounCorrection(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1, str.length).toLowerCase();
}



/**
* Test Suite
*/
describe('properNounCorrection()', () => {
    it('adds proper noun capitalization', () => {
        // arrange
        const str = 'pARiS';

        // act
        const result = properNounCorrection(str);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe('Paris');
    });

     it('properly cased words are still correct', () => {
        // arrange
        const str = 'John';

        // act
        const result = properNounCorrection(str);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe('John');
    });
});
