'use strict'

const tagLi = 'li';
const addBtn = document.getElementById('addBtn');
const countElements = document.getElementById('count');
const listOfElements = document.getElementById('list');

addBtn.addEventListener('click', replaceList);

function replaceList(){
    listOfElements.innerHTML = '';
    const fragment = document.createDocumentFragment();

    for(let i = 1; i <= countElements.value; i++){
        const newElem = createNewElement(tagLi);
        newElem.innerText = i;
        fragment.append(newElem)
    }
    
    listOfElements.appendChild(fragment);
}

function createNewElement (tagName){
    return document.createElement(tagName);
}