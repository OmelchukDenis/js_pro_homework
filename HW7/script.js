'use strict'

const QUESTION_FOR_NAME = 'Please, write your name.';
const USER_NAME_EXAMPLE = 'User';
const QUESTION_FOR_STR = 'Please, write string with number, like in example.';
const USER_STR_EXAMPLE = '9,1,7,5,2,0';
const ELEM_GREETING = document.getElementById('greeting');
const ELEM_MIN = document.getElementById('min');
const ELEM_MAX = document.getElementById('max');

let userName = getUserStr(QUESTION_FOR_NAME, USER_NAME_EXAMPLE)
let userNumber = getUserStr(QUESTION_FOR_STR, USER_STR_EXAMPLE);
let userNumberArray = userNumber.split(',').map(Number).sort(compareNumber);
const lastIndex = userNumberArray.length - 1;

if (isNaN(userNumberArray[lastIndex])){
    renderErrorPage()
} else {
    renderPage()
}

function getUserStr(question, example) {
    let checkedStr;
    do {
        checkedStr = prompt(question, example);
    }
    while (
        checkedStr == null ||
        checkedStr.length == 0
    )
    return checkedStr;
}

function renderPage(){
    ELEM_GREETING.innerHTML = userName;
    ELEM_MIN.innerHTML = userNumberArray[0];
    ELEM_MAX.innerHTML = userNumberArray[lastIndex];
}

function renderErrorPage(){
    ELEM_GREETING.innerHTML = userName;
    ELEM_MIN.innerHTML = 'Error';
    ELEM_MAX.innerHTML = 'Error';
    ELEM_MIN.style.backgroundColor = 'red';
    ELEM_MAX.style.backgroundColor = 'red';
}

function compareNumber(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
