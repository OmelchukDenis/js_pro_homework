'use strict'

repeatAction();

function repeatAction() {

    let selectedNumber = chooseNumber();
    showMultiplicationTable(selectedNumber);
    let confirmRepeat = confirm('Repeat action?')

    if (confirmRepeat) {
        console.clear();
        repeatAction();
    }

    function chooseNumber() {
        let chooseUserNumber = null;
        const min = 1;
        const max = 10;

        do {
            chooseUserNumber = +prompt('Please, choose number from 1 to 10:', '1');
        } while (
            isNaN(chooseUserNumber) ||
            chooseUserNumber < min ||
            chooseUserNumber > max
        )

        return chooseUserNumber;
    }

    function showMultiplicationTable(selectedNumber) {
        let result = null;

        for (let i = 1; i <= 10; i++) {
            result = i * selectedNumber;
            console.log(selectedNumber + ' * ' + i + ' = ' + result);
        }
    }
}