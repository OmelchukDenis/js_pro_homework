'use strict'

const messageLetter1 = 'Choose letter for search';
const messageLetter2 = 'Choose letter for replace';
const exampleLetter1 = 'l';
const exampleLetter2 = 'z';

let userStr = checkUserStr();
let userLetter1 = checkUserLetter(messageLetter1, exampleLetter1);
let userLetter2 = checkUserLetter(messageLetter2, exampleLetter2);
let newStr = replaceAll(userStr, userLetter1, userLetter2);

alert('Your old str = ' + userStr + '\nYour new str = ' + newStr);
console.log('Your old str = ' + userStr + '\nYour new str = ' + newStr);

function checkUserStr() {
    let checkedStr;
    do {
        checkedStr = prompt('Please write your str', 'Hello world');
    }
    while (
        checkedStr == null ||
        checkedStr.length == 0
    )
    return checkedStr;
}

function checkUserLetter(message, letter) {
    let userLetter = null;
    do {
        userLetter = prompt(message, letter);
    }
    while (
        userLetter == null ||
        userLetter.length > 1 ||
        userLetter.length == 0
    )
    return userLetter;
}

function replaceAll(userStr, userLetter1, userLetter2) {
    let resultStr = null;
    resultStr = userStr.replace(userLetter1, userLetter2);
    return resultStr.indexOf(userLetter1) >= 0 ? replaceAll(resultStr, userLetter1, userLetter2) : resultStr;
}