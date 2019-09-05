'use strict'

const CLASS_ERROR = 'error';
const CLASS_ITEM_LI = 'itemLi';
const CLASS_ITEM_DELETE = 'itemDelete';

const itemTemplate = document.getElementById('itemTemplate').innerHTML;
const toDoList = document.getElementById('toDoList');
const taskTitle = document.getElementById('taskTitle');

document.getElementById('newTaskForm').addEventListener('submit', onFormSubmit);
toDoList.addEventListener('click', onToDoListClick);

function onFormSubmit(e) {
    e.preventDefault();
    addNewTask();
}

function addNewTask() {
    if (taskTitle.value.trim() !== '') {
        toDoList.innerHTML += generateTask(taskTitle.value);
        clearInput();
        deleteClass(taskTitle, CLASS_ERROR);
    } else {
        taskTitle.value = '';
        taskTitle.placeholder = 'Fill the input';
        addClass(taskTitle, CLASS_ERROR);
    }

}

function generateTask(value) {
    return itemTemplate.replace('{{item}}', value);
}

function onToDoListClick(e) {
    const tapElement = e.target;
    if (tapElement.classList.contains(CLASS_ITEM_DELETE)) {
        removeElement(tapElement);
    } else if (tapElement.classList.contains(CLASS_ITEM_LI)) {
        changeElementClass(tapElement);
    }
}

function removeElement(tapElement) {
    tapElement.parentElement.remove();
}

function changeElementClass(tapElement) {
    tapElement.classList.toggle('doneTask');
}

function deleteClass(element, className) {
    element.classList.remove(className);
}

function addClass(element, className){
    element.classList.add(className);
}

function clearInput(){
    taskTitle.placeholder = '';
    taskTitle.value = '';
}
