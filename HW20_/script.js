'use strict'

const TODO_ITEM_DONE_CLASS = 'done';
const DELETE_BTN_CLASS = 'deleteBtn';
const TODO_CLASS = 'todo-list-item';

let toDoListItems = [
    {
        id: 1,
        title: 'test1',
        isDone: false
    },
    {
        id: 2,
        title: 'test2',
        isDone: true
    },
    {
        id: 3,
        title: 'test3',
        isDone: false
    }
] 

const toDoListElement = document.getElementById('toDoList');
const newTodoItemForm = document.getElementById('newTodoItemForm');
const newTodoListTitle = document.getElementById('newTodoListTitle');
const toDoListElementTemplate = document.getElementById('toDoListElementTemplate').innerHTML

toDoListElement.addEventListener('click', onToDoListElementClick);
newTodoItemForm.addEventListener('submit', onToDoFormClick);


init();

function init(){
    toDoListItems = getState();
    renderList(toDoListItems);
}

function renderList(toDoListItems){
    const todoItemsHTML = toDoListItems.map(getTodoHTML);
    toDoListElement.innerHTML = todoItemsHTML.join('\n')
}

function getTodoHTML(todo){
    return toDoListElementTemplate.replace('{{id}}', todo.id)
                                    .replace('{{title}}', todo.title)
                                    .replace('{{isdone}}', todo.isDone ? TODO_ITEM_DONE_CLASS :'')
}

function onToDoListElementClick(e){
    switch(true){
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteTodoItem(e.target.parentElement.dataset.todoId)
            break
        case e.target.classList.contains(TODO_CLASS):
            toogleTodoItem(e.target.dataset.todoId);
            break;
    }
}

function deleteTodoItem(todoID){
    toDoListItems = toDoListItems.filter(el => el.id != todoID);
    renderList(toDoListItems);
    saveState();
}

function toogleTodoItem(id){
    const todo = toDoListItems.find((el) => el.id == id);

    todo.isDone = !todo.isDone;

    renderList(toDoListItems)
    saveState();
}

function onToDoFormClick(e){
    e.preventDefault();
    submitTodoItem();
}

function submitTodoItem(){
    createTodoItem(newTodoListTitle.value);
    newTodoItemForm.reset();
}

function createTodoItem(title){
    const newTodo = {
        title,
        id:Date.now(),
        isDone: false
    }
    addTodoItem(newTodo);
}

function addTodoItem(newTodo){
    toDoListItems.push(newTodo);
    renderList(toDoListItems)
    saveState();
}

function saveState(){
    localStorage.setItem('todolist', JSON.stringify(toDoListItems))
}

function getState(){
    const data = localStorage.getItem('todolist');
    return data ? JSON.parse(data) : [];
}