'use strict'

const MESSAGE_FOR_USER_STR = 'Please write your str';
const EXAMPLE_FOR_USER_STR = 'Hello world'
const MESSAGE_FOR_SEARCH = 'Choose letter for search';
const EXAMPLE_LETER_FOR_SEARCH = 'l';
const MESSAGE_FOR_REPLACE = 'Choose letter for replace';
const EXAMPLE_LETER_FOR_REPLACE = 'z';

let userStr = checkUserStr();
let userLetter1 = checkUserLetter(MESSAGE_FOR_SEARCH, EXAMPLE_LETER_FOR_SEARCH);
let userLetter2 = checkUserLetter(MESSAGE_FOR_REPLACE, EXAMPLE_LETER_FOR_REPLACE);
let newStr = replaceAll(userStr, userLetter1, userLetter2);

alert('Your old str = ' + userStr + '\nYour new str = ' + newStr);
console.log('Your old str = ' + userStr + '\nYour new str = ' + newStr);

function checkUserStr() {
    let checkedStr;
    do {
        checkedStr = prompt(MESSAGE_FOR_USER_STR, EXAMPLE_FOR_USER_STR);
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
    let resultStr = userStr.replace(userLetter1, userLetter2);
    return resultStr.indexOf(userLetter1) >= 0 ? replaceAll(resultStr, userLetter1, userLetter2) : resultStr;
}
