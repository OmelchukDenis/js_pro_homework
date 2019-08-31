'use strict'

const addBtn = document.getElementById('addBtn');
const countElements = document.getElementById('count');
const listOfElements = document.getElementById('list');

addBtn.addEventListener('click', replaceElements);

function replaceElements(){
    listOfElements.innerHTML = '';
    for(let i = 1; i <= countElements.value; i++){
        const newElem = document.createElement('li');
        newElem.innerText = i;
        listOfElements.appendChild(newElem);
    }
}