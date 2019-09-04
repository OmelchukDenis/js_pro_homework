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
        toDoList.innerHTML += generateTask(taskTitle.value);
        taskTitle.placeholder = '';
        taskTitle.value = '';
        deleteClass(taskTitle, classError);
    } else {
        taskTitle.value = '';
        taskTitle.placeholder = 'Fill the input';
        addClass(taskTitle, classError);
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

function deleteClass(tagName, className) {
    if (tagName.classList.contains(className)) {
        tagName.classList.remove(className);
    }
}
function addClass(tagName, className){
    tagName.classList.add(className);
}