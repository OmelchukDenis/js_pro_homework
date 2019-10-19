'use strict'

const ITEM_IMAGE_CLASS = 'item-image';
const HIDE_ELEMENT_CLASS = 'hidden';
const AMOUNT_PHOTOS_ON_PAGE = 100;
const CURRENT_PAGE_NUMBER = 'currentPageNum';

const requestPhoto = fetch('https://jsonplaceholder.typicode.com/photos');
const myGallery = document.getElementById('myGallery');
const imageBig = document.getElementById('imageBig');
const imagesContainer = document.createElement('div');
const paginationContainer = document.getElementById('paginationContainer');
const paginationList = document.createElement('ul');
const paginationListTemplate = document.getElementById('paginationListTemplate').innerHTML;

imagesContainer.classList.add('imagesContainer');
paginationContainer.addEventListener('click', onPaginationItemClick)
imagesContainer.addEventListener('click', showBigImg);
imageBig.addEventListener('click', hideBigImg);

requestPhoto.then((resp) => {
    resp.json()
    .then(init)
});

let photosData = [];

function init(data){
    localStorage.setItem('photosData', JSON.stringify(data))
    photosData = JSON.parse(localStorage.getItem('photosData'));
    renderPhotoGallery(getCurrentPageData())
    showPagination(photosData);
}

function showPagination(data){
    let countPaginationPage = data.length / AMOUNT_PHOTOS_ON_PAGE;
    for(let i = 1; i <= countPaginationPage; i++){
        paginationList.innerHTML += paginationListTemplate.replace('{{itemnumber}}', i)
                                                            .replace('{{num}}', i);
    }
    paginationContainer.appendChild(paginationList);
}

function onPaginationItemClick(e){
    if(e.target.classList.contains('paginationItem')){
        localStorage.setItem(CURRENT_PAGE_NUMBER, e.target.dataset.num);
        renderPhotoGallery(getCurrentPageData());
    }
}
function getCurrentPageData(){
    let currentPageNum = checkLocalStorage();
    let currentPageData;
    if(currentPageNum == 1){
        currentPageData = photosData.slice(currentPageNum - 1, currentPageNum + AMOUNT_PHOTOS_ON_PAGE -1 );
    } else {
        currentPageNum = (currentPageNum - 1) * AMOUNT_PHOTOS_ON_PAGE;
        currentPageData = photosData.slice(currentPageNum, currentPageNum + AMOUNT_PHOTOS_ON_PAGE);
    }
    return currentPageData;
}

function checkLocalStorage(){
    let pageNum;
    if(localStorage.getItem(CURRENT_PAGE_NUMBER) == null){
        pageNum = 1;
    } else {
        pageNum = +localStorage.getItem(CURRENT_PAGE_NUMBER);
    }
    return pageNum;
}

function renderPhotoGallery(data){
    imagesContainer.innerHTML = "";
    const imageTag = createImageElement();
    imageBig.appendChild(imageTag);
    data.forEach(el => addImageInGallery(el.url, el.thumbnailUrl));
    myGallery.appendChild(imagesContainer);
}

function addImageInGallery(urlBigImg, urlSmallImg){
    const image = createImageElement();
    image.className = ITEM_IMAGE_CLASS;
    image.src = urlSmallImg;
    image.setAttribute('data-bigimg', urlBigImg);
    imagesContainer.appendChild(image);
}

function createImageElement(){
    const imageElement = document.createElement('img');
    imageElement.classList.add('bigimg');
    return imageElement;
}

function showBigImg(e){
    const imgSelectorSrc = imageBig.querySelector('img');
    if(e.target.classList.contains(ITEM_IMAGE_CLASS)){
        imgSelectorSrc.src = e.target.dataset.bigimg;
        imageBig.classList.remove(HIDE_ELEMENT_CLASS);
    }
}

function hideBigImg(){
    imageBig.classList.add(HIDE_ELEMENT_CLASS);
}