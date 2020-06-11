/*
Hi fellow coder 👋

How did it go yesterday? Did you mange to solve the Add Two Digits challenge? If so, remember to share your solution in the #share-your-code channel in our community Discord!

If you didn't solve it, no worries, you shouldn't feel bad! Struggling with something just means that you're learning and pushing yourself to the limit. Here's Dylan's solution to the challenge, so be sure to check it out.

Once you're ready, click the link below in order to see the instructions for today's challenge 👇

Day 3: First Duplicate

PS: If you feel you're lacking the JavaScript skills needed to solve the challenge, you can check out Dylan's free Intro to JavaScript and Intro to ES6 courses first. And if those aren't enough, we also have a full-blown JavaScript bootcamp.

Best of luck 😁

Cheers
Per Harald Borgen
*/


function firstDuplicate(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums.slice(0,i).indexOf(nums[i]) != -1) {
            return nums[i];
        }
    }
    return -1;
}



/**
* Test Suite
*/
describe('firstDuplicate()', () => {
    it('returns first duplicated value', () => {
        // arrange
        const nums = [2, 1, 3, 5, 3, 2];

        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(3);
    });

    it('returns -1 when no duplicated values', () => {
        // arrange
        const nums = [2, 1, 3, 5, 4, 6];

        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(-1);
    });
});
