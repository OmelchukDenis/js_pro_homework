'use strict'

const prom = fetch('https://jsonplaceholder.typicode.com/photos?_limit=50');
const imageParent = document.getElementById("body");
const bigImgTest = document.getElementById("bigImg");
const imageGalery = document.createElement('div');

imageGalery.className = 'imageGalery';
imageParent.addEventListener('click', openBigImg);
bigImgTest.addEventListener('click', hideElement);

prom.then((resp) => {
    resp.json().then((data) => {
        runfunc(data);
    })
});

function runfunc(data){
    for(var i = 0; i<=data.length-1; i++){
        let d = {
            dataUrl: data[i].thumbnailUrl,
            dataBigUrl: data[i].url
        };
        createImageList(d);
    }
    imageParent.appendChild(imageGalery);
}

function createImageList(d){
    let image = document.createElement('img');
    image.className = 'test';
    image.src = d.dataUrl;
    image.alt = d.dataBigUrl;
    imageGalery.appendChild(image);
}

function openBigImg(e){
    const imgTest = e.target;
    if(imgTest.classList.contains('test')){
        const bigImg = document.createElement('img');
        bigImg.src = imgTest.alt;
        bigImgTest.appendChild(bigImg);
    }
}

function hideElement(){
    bigImgTest.innerHTML = '';
}


