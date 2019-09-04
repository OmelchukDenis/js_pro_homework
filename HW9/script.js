'use strict'

const itemTemplate = document.getElementById('itemTemplate').innerHTML;
const toDoList = document.getElementById('toDoList');
const taskTitle = document.getElementById('taskTitle');
const classError = 'error';

document.getElementById('submitTask').addEventListener('submit', onFormSubmit);
toDoList.addEventListener('click', onToDoListClick);

function onFormSubmit(e) {
    e.preventDefault();
    addNewTask();
}

function addNewTask() {
    if (taskTitle.value.trim() !== '') {
        deleteErrorClass(classError);
        toDoList.innerHTML += generateTask(taskTitle.value);
        taskTitle.placeholder = '';
        taskTitle.value = '';
    } else {
        taskTitle.value = '';
        taskTitle.placeholder = 'Fill the input';
        taskTitle.classList.add(classError);
    }

}

function generateTask(value) {
    return itemTemplate.replace('{{item}}', value);
}

function onToDoListClick(e) {
    if (e.target.tagName == 'B') {
        removeLi(e);
    } else if (e.target.tagName == 'LI') {
        changeLiClass(e);
    }
}

function removeLi(e) {
    e.target.parentElement.remove();
}

function changeLiClass(e) {
    e.target.classList.toggle('doneTask');
}

function deleteErrorClass(classError) {
    if (taskTitle.classList.contains(classError)) {
        taskTitle.classList.remove(classError);
    }
}