'use strict'

const tagLi = 'li';
const addBtn = document.getElementById('addBtn');
const countElements = document.getElementById('count');
const listOfElements = document.getElementById('list');

addBtn.addEventListener('click', replaceList);

function replaceList(){
    listOfElements.innerHTML = '';
    for(let i = 1; i <= countElements.value; i++){
        const newElem = createNewElement(tagLi);
        newElem.innerText = i;
        listOfElements.appendChild(newElem);
    }
}

function createNewElement (tagName){
    return document.createElement(tagName);
}