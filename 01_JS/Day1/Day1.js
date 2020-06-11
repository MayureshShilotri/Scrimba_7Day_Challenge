/*
Hi fellow coder 👋
Welcome to the 7-day JavaScript challenge!

Every day for the next week, you'll get a quick JavaScript challenge right here in your inbox. The challenges have been created by Dylan Israel and will be presented as Scrimba screencasts, meaning you can solve them directly in the browser. The following day, you'll get Dylan's suggested solution, along with the next challenge.

If you'd like to watch Dylan's introduction to this course, you can click here. Or, if you'd rather jump directly to the first challenge, click the link below👇

Day 1: Add Border

In this challenge, you'll create a border of asterisk (*) characters around an array. The array methods you can use to solve it are push(), unshift(), and concat().

If you feel you're lacking the JavaScript skills needed to solve these challenges, you can check out Dylan's free Intro to JavaScript and Intro to ES6 courses first. And if those aren't enough, we also have a full-blown JavaScript bootcamp.

Best of luck 😁

Cheers
Per Harald Borgen
CEO at Scrimba
*/


function addBorder(array) {
    for (let i = 0;i < array.length; i++) {
        array[i] = "*"+array[i]+"*";
    }
    let sandwichArray = "";
    for (let j =0; j <= array.length+2; j++) {
        sandwichArray += "*";
    }

    array.push(sandwichArray);
    array.unshift(sandwichArray);
    console.log(array);
    return array;
}



/**
* Test Suite
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];

        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual(
                ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});
