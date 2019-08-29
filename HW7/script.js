'use strict'
const QUESTION_FOR_NAME = 'Please, write your name.';
const USER_NAME_EXAMPLE = 'User';
const QUESTION_FOR_STR = 'Please, write string with number, like in example.';
const USER_STR_EXAMPLE = '9,1,7,5,2,0';

let elemGreeting = document.getElementById('greeting');
let elemMin = document.getElementById('min');
let elemMax = document.getElementById('max');

let userName = checkUserStr(QUESTION_FOR_NAME, USER_NAME_EXAMPLE)
let userNumber = checkUserStr(QUESTION_FOR_STR, USER_STR_EXAMPLE);
let userNumberArray = userNumber.split(',').map(Number).sort(compareNumber);
let max = userNumberArray.length - 1;

isNaN(userNumberArray[max]) ? renderErrorPage() : renderPage();

function checkUserStr(question, example) {
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
    elemGreeting.innerHTML = userName;
    elemMin.innerHTML = userNumberArray[0];
    elemMax.innerHTML = userNumberArray[max];
}

function renderErrorPage(){
    elemGreeting.innerHTML = userName;
    elemMin.innerHTML = 'Error';
    elemMax.innerHTML = 'Error';
    elemMin.style.backgroundColor = 'red';
    elemMax.style.backgroundColor = 'red';
}

function compareNumber(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}