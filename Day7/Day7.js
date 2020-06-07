/*
Hi fellow coder 👋

How did it go yesterday? Did you mange to solve the Even Digits Only challenge? If so, remember to share your solution in the #share-your-code channel in our community Discord!

If you didn't solve it, no worries, you shouldn't feel bad! Struggling with something just means that you're learning and pushing yourself to the limit. Here's Dylan's solution to the challenge, so be sure to check it out.

Once you're ready, click the link below in order to see the instructions for today's challenge 👇

Day 6: Make Array Consecutive

If you feel you're lacking the JavaScript skills needed to solve the challenge, you can check out Dylan's free Intro to JavaScript and Intro to ES6 courses first. And if those aren't enough, we also have a full-blown JavaScript bootcamp.

Best of luck 😁

PS: If you want to unroll from this 7-day JavaScript course, you can click here, and you won't receive any more JavaScript challenges. You'll still be on Scrimba's general newsletter, so if you'd like to stop receiving emails from us entirely, simply click the unsubscribe link at the bottom of this email.

Cheers
Per Harald Borgen
*/


function makeArrayConsecutive(nums) {
    //  sort
    let nums1 = nums.sort();
    // Create parallel Array
    let nums2 = [];
    for (let i = nums1[0]; i <= nums1[nums1.length - 1]; i++) {
        nums2.push(i);
    }
    // Diff between the lengths
    return nums2.length - nums1.length;
}



/**
* Test Suite
*/
describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
        // arrange
        const nums = [6, 2, 3, 8];

        // act
        const result = makeArrayConsecutive(nums);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(3);
    })
});
