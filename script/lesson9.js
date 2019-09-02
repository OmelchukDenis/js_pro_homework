'use strict'

const btn = document.getElementById('btn');
const textInput = document.getElementById('textInput');

btn.addEventListener('click', onBtnClick);

function onBtnClick(e){
    console.log('click', e.target, this);
    e.target.classList.add('click');
}