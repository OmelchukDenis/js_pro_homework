'use strict'

const itemTemplate = document.getElementById('itemTemplate').innerHTML;
const toDoList = document.getElementById('toDoList');
const taskTitle = document.getElementById('taskTitle');
const addBtn = document.getElementById('addTask');

toDoList.addEventListener('click', onToDoListClick);
addBtn.addEventListener('click', onBtnClick);


function onBtnClick(){
    addNewTask();
}

function addNewTask(){
    const taskValue = getUserTask();
    toDoList.innerHTML += generateTask(taskValue.value);
    taskTitle.placeholder = '';
    taskTitle.value = '';
}
function getUserTask(){
    if (taskTitle.value == ''){
        taskTitle.placeholder = 'error';
        taskTitle.classList('error');
    }
    return taskTitle;
}

function generateTask(value){
    return itemTemplate.replace('{{item}}', value);
}

function onToDoListClick(e){
    if(e.target.tagName == 'B'){
        removeLi(e);
    }else if(e.target.tagName == 'LI'){
        changeLiClass(e);
    }
}

function removeLi(e){
    e.target.parentElement.remove();
}

function changeLiClass(e){
    e.target.classList.toggle('doneTask');
}
