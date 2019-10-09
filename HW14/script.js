'use strict'

const ACCORDEON_CONTAINER_CLASS = 'my-accordeon-container';
const ACCORDEON_TITLE_CLASS = 'title';
const ACCORDEON_ACTIVE_CLASS = 'active';

const TABS_HEAD = document.getElementById('tabs-head');
const TABS_BODY = document.getElementById('tabs-body');

class Tabs{
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
            const isVIsible = Tabs.isElementToogle(e.target.parentElement)
            
            Array.prototype.forEach.call(this.children, Tabs.hideElement)

            if(!isVIsible){
                Tabs.showElement(e.target.parentElement)
            }
        }
    }
}

const acc = new Tabs(
    document.getElementById('tabs')
)