'use strict';

let operationType = chooseOperation();
let firstArgument = chooseArgument();
let secondArgument = chooseArgument();
let result = operationWithArgumets(firstArgument, secondArgument, operationType);
showResult(result);


function chooseOperation() {
    let operation = null;
    do {
        operation = prompt('Choose type of operation (add, sub, div, mult)', 'add');
    }
    while (
        operation != 'add' &&
        operation != 'sub' &&
        operation != 'div' &&
        operation != 'mult'
    )
    return operation;
}

function chooseArgument() {
    let argument = null;
    do {
        argument = +prompt('Choose argument: ', '0');
    }
    while (
        isNaN(argument)
    )
    return argument;
}

function operationWithArgumets(firstArgument, secondArgument, operationType) {
    let actionWithArguments = null;
    switch (operationType) {
        case 'add':
            actionWithArguments = firstArgument + secondArgument;
            break;
        case 'sub':
            actionWithArguments = firstArgument - secondArgument;
            break;
        case 'div':
            actionWithArguments = firstArgument / secondArgument;
            break;
        case 'mult':
            actionWithArguments = firstArgument * secondArgument;
            break;
        default:
            alert('Something went wrong. Reload page')
    }
    return actionWithArguments;
}

function showResult(result) {
    alert('Result of operation: ' + result);
}