'use strict'

const STICKER_DONE_CLASS = 'done';
const STICKER_ITEM_CLASS = 'stickerItem';
const STICKER_TITLE = 'stickerTitle';
const STICKER_DESCRIPTION = 'stickerDescription';
const STICKER_DELETE_BTN_CLASS = 'deleteBtn';


let stickerItems = [];

const stickerList = document.getElementById('stickerList');
const newStickerForm = document.getElementById('newStickerForm');
const newStickerTitle = document.getElementById('newStickerTitle');
const stickerElementTemplate = document.getElementById('stickerElementTemplate').innerHTML;

newStickerForm.addEventListener('submit', onStickerFormClick);

stickerList.addEventListener('click', onStickerListElementClick);
stickerList.addEventListener('focusout', inputFocusOut);


init();

function init(){
    stickerItems = getState();
    renderList(stickerItems);
}

function renderList(stickerItems){
    const stickerItemsHTML = stickerItems.map(getStickerHTML);
    stickerList.innerHTML = stickerItemsHTML.join('\n');
}

function getStickerHTML(sticker){
    return stickerElementTemplate.replace('{{id}}', sticker.id)
                                    .replace('{{title}}', sticker.title)
                                    .replace('{{description}}', sticker.description)
                                    .replace('{{isdone}}', sticker.isDone ? STICKER_DONE_CLASS :'')
}

function onStickerListElementClick(e){
    switch(true){
        case e.target.classList.contains(STICKER_DELETE_BTN_CLASS):
            deleteStickerItem(e.target.parentElement.dataset.stickerId);
            break;
        case e.target.classList.contains(STICKER_ITEM_CLASS):
            toogleStickerItem(e.target.dataset.stickerId);
            break;
    }
}

function deleteStickerItem(stickerId){
    stickerItems = stickerItems.filter(el => el.id != stickerId);
    rerenderPage();
}

function toogleStickerItem(id){
    const stickerInfo = stickerItems.find((el) => el.id == id);
    stickerInfo.isDone = !stickerInfo.isDone;
    rerenderPage();
}

function onStickerFormClick(e){
    e.preventDefault();
    submitStickerItem();
}

function submitStickerItem(){
    createStickerItem(newStickerTitle.value);
    newStickerForm.reset();
}

function createStickerItem(title){
    const newSticker = {
        title,
        id:Date.now(),
        isDone: false,
        description: ''
    }
    addTodoItem(newSticker);
}

function addTodoItem(newSticker){
    stickerItems.push(newSticker);
    rerenderPage();
}

function saveState(){
    localStorage.setItem('todolist', JSON.stringify(stickerItems));
}

function getState(){
    const data = localStorage.getItem('todolist');
    return data ? JSON.parse(data) : [];
}

function inputFocusOut(e){
    switch(true){
        case e.target.classList.contains(STICKER_TITLE):
            saveNewTitle(e.target.value, e.target.parentElement.dataset.stickerId);
            break;
        case e.target.classList.contains(STICKER_DESCRIPTION):
            saveNewDescription(e.target.value, e.target.parentElement.dataset.stickerId);
            break;
    }
}

function saveNewTitle(title, id){
    const stickerInfo = stickerItems.find((el) => el.id == id);
    stickerInfo.title = title;
    rerenderPage();
}

function saveNewDescription(description, id){
    const stickerInfo = stickerItems.find((el) => el.id == id);
    stickerInfo.description = description;
    rerenderPage();
}

function rerenderPage(){
    renderList(stickerItems);
    saveState();
}