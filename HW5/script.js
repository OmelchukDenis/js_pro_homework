'use strict'

let userStr = prompt('Please write your str', 'Hello world');
userStr = userStr.toLowerCase();
const l = 'l';
const z = 'z';
let userLetter1 = isCorrect(l);
let userLetter2 = isCorrect(z);

function isCorrect(letter){
    let userLetter = null;
    do{
        userLetter = prompt('Choose letter for ', letter);
    }
    while(
        userLetter.length > 1 ||
        !isNaN(userLetter)
    )
    return userLetter;
}

let newStr = replaceAll(userStr, userLetter1, userLetter2);

function replaceAll(userStr, userLetter1, userLetter2){
    let c = null;
    c = userStr.replace(userLetter1, userLetter2);
    return c.indexOf(userLetter1) >= 0 ? replaceAll(c, userLetter1, userLetter2) : c;
}

console.log(newStr);