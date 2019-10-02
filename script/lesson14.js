'use strict'

const ACCORDEON_CONTAINER_CLASS = 'my-accordeon-container';
const ACCORDEON_TITLE_CLASS = 'title';
const ACCORDEON_ACTIVE_CLASS = 'active';

class Accordeon{
    constructor(el){
        this.el = el;
        this.bindClasses();
        this.bindEventListener();
    }
    static isElementToogle(el){
        return el.classList.contains(ACCORDEON_ACTIVE_CLASS)
    }
    static showElement(el){
        return el.classList.add(ACCORDEON_ACTIVE_CLASS)
    }
    static hideElement(el){
        return el.classList.remove(ACCORDEON_ACTIVE_CLASS)
    }
    static isElementToogle(el){
        return el.classList.contains(ACCORDEON_ACTIVE_CLASS)
    }
    bindClasses(){
        this.el.classList.add(ACCORDEON_CONTAINER_CLASS);
    }
    bindEventListener(){
        this.el.addEventListener('click', this.onElementClick)
    }
    onElementClick(e){
        if(e.target.classList.contains(ACCORDEON_TITLE_CLASS)){
            const isVIsible = Accordeon.isElementToogle(e.target.parentElement)
            
            Array.prototype.forEach.call(this.children, Accordeon.hideElement)

            if(!isVIsible){
                Accordeon.showElement(e.target.parentElement)
            }
        }
    }
}

const acc = new Accordeon(
    document.getElementById('accordeon')
)