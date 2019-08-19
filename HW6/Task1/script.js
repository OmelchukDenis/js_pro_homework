'use strict'

let userNumber = chooseNumber();
let countEvenNumber = checkCountEvenNumber(userNumber);

function chooseNumber() {
    let checkedNumber = null;
    do {
        checkedNumber = prompt('Please write any number', '1234');
    }
    while (
        checkedNumber == null ||
        isNaN(checkedNumber) ||
        checkedNumber == ' '
    )
    return checkedNumber;
}

function checkCountEvenNumber(userNumber){
    let counter = 0;
    for (let i = 0; i < userNumber.length; i++){
        if( Number(userNumber[i]) % 2 == 0){
            counter++;
        }
    }
    return counter;
}

console.log('In your number: ' + userNumber + '. Counter even number: ' + countEvenNumber);

