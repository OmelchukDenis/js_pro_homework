'use strict'

const MESSAGEFORUSERSTR = 'Please write your str';
const EXAMPLEFORUSERSTR = 'Hello world'
const MESSAGEFORSEARCH = 'Choose letter for search';
const EXAMPLELETERFORSEARCH = 'l';
const MESSAGEFORREPLACE = 'Choose letter for replace';
const EXAMPLELETERFORREPLACE = 'z';

let userStr = checkUserStr();
let userLetter1 = checkUserLetter(MESSAGEFORSEARCH, EXAMPLELETERFORSEARCH);
let userLetter2 = checkUserLetter(MESSAGEFORREPLACE, EXAMPLELETERFORREPLACE);
let newStr = replaceAll(userStr, userLetter1, userLetter2);

alert('Your old str = ' + userStr + '\nYour new str = ' + newStr);
console.log('Your old str = ' + userStr + '\nYour new str = ' + newStr);

function checkUserStr() {
    let checkedStr;
    do {
        checkedStr = prompt(MESSAGEFORUSERSTR, EXAMPLEFORUSERSTR);
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