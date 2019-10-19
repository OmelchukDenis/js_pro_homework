'use strict'

const RESOURCE_URL = 'https://jsonplaceholder.typicode.com/users/';

const ITEM_USER_CLASS = 'userItem';
const ITEM_ACTIVE_CLASS = 'active';
const BTN_DISPLAY_NONE = 'd-none';
const DELETE_USER_BUTTON_CLASS = 'deleteUser';
const ADD_USER_BUTTON_CLASS = 'addNewUser';

const METHOD_POST = 'POST';
const METHOD_DELETE = 'DELETE';

const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const websiteInput = document.getElementById('website');
const deleteUserBtn = document.getElementById(DELETE_USER_BUTTON_CLASS);
const addUserBtn = document.getElementById(ADD_USER_BUTTON_CLASS);

const userListTemplate = document.getElementById('userListTemplate').innerHTML;
const usersListItems = document.createElement('ul');

const createNewUser = document.createElement('li');
createNewUser.classList.add('createNewUser');
createNewUser.innerText = 'Create new user'

const usersList = document.getElementById('usersList');
const userInfo = document.getElementById('userInfo');
usersList.addEventListener('click', onUserClick);

const userForm = document.getElementById('userForm');
userForm.addEventListener('click', onControlBtnClick)

const requestUsersList = fetch(RESOURCE_URL);

requestUsersList.then((resp) => {
    return resp.json()
})
.then((data) => {
    renderUsersList(data);
    showControlBtn();
})
.catch(() => console.log('Error'))

function renderUsersList(data){
    data.forEach(el => addUserInList(el.name, el.id));
    usersListItems.prepend(createNewUser);
    usersList.appendChild(usersListItems);
    addActiveClass(usersListItems.firstElementChild);
    showControlBtn();
}

function addUserInList(name, id){
    usersListItems.innerHTML += userListTemplate.replace('{{name}}', name)
                                                .replace('{{userid}}', id);
}

function renderUserInfo(data){
    nameInput.value = data.name;
    usernameInput.value = data.username;
    emailInput.value = data.email;
    phoneInput.value = data.phone;
    websiteInput.value = data.website;            
    deleteUserBtn.dataset.userid = data.id;
    showControlBtn();
}

function showControlBtn(){
    if(deleteUserBtn.hasAttribute('data-userid')){
        deleteUserBtn.classList.remove(BTN_DISPLAY_NONE);
        addUserBtn.classList.add(BTN_DISPLAY_NONE);
    }else{
        addUserBtn.classList.remove(BTN_DISPLAY_NONE);
        deleteUserBtn.classList.add(BTN_DISPLAY_NONE);
    }
}

function onUserClick(e){
    if(e.target.classList.contains(ITEM_USER_CLASS)){
        showUserInfo(e.target.dataset.userid);
    } else {
        deleteUserBtn.removeAttribute('data-userid');
    }
    deleteActiveClass();
    addActiveClass(e.target);
    resetUserForm();
    showControlBtn();
}

function showUserInfo(userId){
    fetch(RESOURCE_URL + userId)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        renderUserInfo(data);
    })
}

function onControlBtnClick(e){
    e.preventDefault();
    if(e.target.classList.contains(DELETE_USER_BUTTON_CLASS)){
        deleteUser(e.target.dataset.userid)
    } 
    else if(e.target.classList.contains(ADD_USER_BUTTON_CLASS)){
        addNewUser()
    }
}

function deleteUser(userid){
    fetch(RESOURCE_URL + userid, {
        method: METHOD_DELETE
    }).then(() => {
        usersList.querySelector('.'+ITEM_ACTIVE_CLASS).remove();
        addActiveClass(usersListItems.firstElementChild);
        deleteUserBtn.removeAttribute('data-userid');
        resetUserForm();
        showControlBtn();
    });
}

function addNewUser(method){
    let newUserInfo = {
        name: nameInput.value,
        username: usernameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        website: websiteInput.value
    };

    fetch(RESOURCE_URL, {
        method: METHOD_POST,
        body: JSON.stringify(newUserInfo)
    })
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        resetUserForm();
        addUserInList(newUserInfo.username, data.id)
    })
}

function deleteActiveClass(){
    usersList.querySelector('.'+ITEM_ACTIVE_CLASS).classList.remove(ITEM_ACTIVE_CLASS)
}

function addActiveClass(el){
    el.classList.add(ITEM_ACTIVE_CLASS);
}

function resetUserForm(){
    userForm.reset();
}