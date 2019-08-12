'use strict'
const MIN = 1;
const MAX = 10;

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
        let userNumber = null;

        do {
            userNumber = +prompt('Please, choose number from ' + MIN + ' to ' + MAX + ' :', '1');
        } while (
            isNaN(userNumber) ||
            userNumber < MIN ||
            userNumber > MAX
        )

        return userNumber;
    }

    function showMultiplicationTable(selectedNumber) {
        let result = null;

        for (let i = 1; i <= 10; i++) {
            result = i * selectedNumber;
            console.log(selectedNumber + ' * ' + i + ' = ' + result);
        }
    }
}