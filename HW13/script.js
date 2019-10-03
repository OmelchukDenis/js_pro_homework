'use strict'

const GALLERY_MY_IMG_CLASS = 'my-img';
const GALLERY_MY_IMG_ACTIVE_CLASS = 'my-img active';
const GALLERY_BTN_NEXT = 'next';
const GALLERY_BTN_PREV = 'prev';

class Gallery{
    constructor(container){
        this.container = container;
        this.images = container.querySelectorAll('ul li');
        this.currentImage = 0;
        this.container.addEventListener('click', this.btnAction.bind(this));
        // setInterval(this.next, 3000);
    }
    btnAction(event){
        if (event.target.classList.contains(GALLERY_BTN_NEXT)) {
            this.next()
        }
        if (event.target.classList.contains(GALLERY_BTN_PREV)) {
            this.prev()
        }
    }
    next(){
        this.show(this.currentImage + 1);
    }
    prev(){
        this.show(this.currentImage - 1);
    }
    show(number){
        this.images[this.currentImage].className = GALLERY_MY_IMG_CLASS;
        this.currentImage = (number + this.images.length)%this.images.length;
        this.images[this.currentImage].className = GALLERY_MY_IMG_ACTIVE_CLASS;
    }
}

const myGallery = new Gallery(document.getElementById('container'))

/* Опциональное задание - реализовать такие методы */

// myGallery.show(2);
// myGallery.next();
// myGallery.prev();
