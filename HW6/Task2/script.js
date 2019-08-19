'use strict'
const MIN = 0;
const MAX = 10;

let userNumber = chooseNumber();
let randomNumber = getRandomNumber(MIN, MAX);
let generalScore = getCompresionResult(userNumber, randomNumber);

console.log(generalScore);

function chooseNumber() {
    let checkedNumber = null;
    do {
        checkedNumber = prompt('Please write number from 0 to 10', '5');
    }
    while (
        isNaN(checkedNumber) ||
        checkedNumber == ' ' ||
        checkedNumber > 10 ||
        checkedNumber < 0
    )
    return checkedNumber;
}

function getRandomNumber(min, max){
    return Math.round(min + Math.random() * (max - min));
}

function getCompresionResult(userNumber, randomNumber){
    let result = 0;
    if(userNumber == randomNumber){
        result += 10;
    }
    return result;
}