'use strict'

const ITEM_IMAGE_CLASS = 'item-image';
const HIDE_ELEMENT_CLASS = 'hidden';

const requestPhoto = fetch('https://jsonplaceholder.typicode.com/photos?_limit=50');
const myGallery = document.getElementById('myGallery');
const imageBig = document.getElementById('imageBig');
const imageGallery = document.createElement('div');
imageGallery.classList.add('imageGallery');

imageGallery.addEventListener('click', showBigImg);
imageBig.addEventListener('click', hideBigImg);

requestPhoto.then((resp) => {
    resp.json().then((data) => {
        createPhotoGallery(data);
    })
});

function createPhotoGallery(data){
    const imageTag = createImageElement();
    imageBig.appendChild(imageTag);
    data.map(el => addImageInGallery(el.url, el.thumbnailUrl));
    myGallery.appendChild(imageGallery);
}

function addImageInGallery(urlBigImg, urlSmallImg){
    const image = createImageElement();
    image.className = ITEM_IMAGE_CLASS;
    image.src = urlSmallImg;
    image.setAttribute('data-bigimg', urlBigImg);
    imageGallery.appendChild(image);
}

function createImageElement(){
    const imageElement = document.createElement('img');
    return imageElement;
}

function showBigImg(e){
    if(e.target.classList.contains(ITEM_IMAGE_CLASS)){
        imageBig.querySelector('img').src = e.target.dataset.bigimg;
        imageBig.classList.remove(HIDE_ELEMENT_CLASS);
    }
}

function hideBigImg(){
    imageBig.classList.add(HIDE_ELEMENT_CLASS);
}
