'use strict'

let empty = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
};

const ITEM_USER_CLASS = 'userItem';
const ITEM_ACTIVE_CLASS = 'active';
const DELETE_USER_BUTTON_CLASS = 'deleteUser';
const ADD_USER_BUTTON_CLASS = 'onAddNewUser';

const METHOD_POST = 'POST';
const METHOD_DELETE = 'DELETE';


const requestUsersList = fetch('https://jsonplaceholder.typicode.com/users');

const userInfoTemplate = document.getElementById('userInfoTemplate').innerHTML;
const userListTemplate = document.getElementById('userListTemplate').innerHTML;

const usersList = document.getElementById('usersList');
const userInfo = document.getElementById('userInfo');

const usersListItems = document.createElement('ul');
const addNewUser = document.createElement('li');
addNewUser.classList.add('addNewUser');
addNewUser.innerText = 'Add new user'

usersList.addEventListener('click', onUserClick);
userInfo.addEventListener('click', onDeleteClick)


requestUsersList
.then((resp) => {
    return resp.json()
})
.then((data) => {
    addUserInfo(empty, true);
    return showUsersList(data);
})
.catch(() => console.log('Error'))

function showUserInfo(user){
    fetch('https://jsonplaceholder.typicode.com/users/' + user)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        addUserInfo(data, false);
    })
}

function showUsersList(data){
    data.forEach(el => addUserInList(el.name, el.id));
    usersListItems.prepend(addNewUser);
    usersList.appendChild(usersListItems);
    addActiveClass(usersListItems.firstElementChild);
    return data[0].id
}

function addUserInList(name, id){
    usersListItems.innerHTML += userListTemplate.replace('{{name}}', name)
                                                .replace('{{userid}}', id);
}

function addUserInfo(data, newuser){
    userInfo.innerHTML = userInfoTemplate.replace('{{username}}', data.username)
                                        .replace('{{name2}}', data.name)
                                        .replace('{{email}}', data.email)
                                        .replace('{{phone}}', data.phone)
                                        .replace('{{website}}', data.website)
                                        .replace('{{userid}}', data.id);
    if(newuser){
        document.getElementById(DELETE_USER_BUTTON_CLASS).remove();
    } else {
        document.getElementById(ADD_USER_BUTTON_CLASS).remove();
    }
                                        
}

function onUserClick(e){
    if(e.target.classList.contains(ITEM_USER_CLASS)){
        showUserInfo(e.target.dataset.userid)
        deleteActiveClass();
        addActiveClass(e.target);
    } else {
        addUserInfo(empty, true);
        deleteActiveClass();
        addActiveClass(e.target);
    }
}

function deleteActiveClass(){
    usersList.querySelector('.active').classList.remove(ITEM_ACTIVE_CLASS)
}

function addActiveClass(el){
    el.classList.add(ITEM_ACTIVE_CLASS);
}

function onDeleteClick(e){
    if(e.target.classList.contains(DELETE_USER_BUTTON_CLASS)){
        deleteUser(e.target.dataset.userid, METHOD_DELETE)
    } 
    else if(e.target.classList.contains(ADD_USER_BUTTON_CLASS)){
        onAddNewUserClick()
    }
}

function deleteUser(userid, method){
    fetch('https://jsonplaceholder.typicode.com/users/' + userid, {
        method: method
    }).then(() => {
        addUserInfo(empty, true)
        deleteActiveClass();
        addActiveClass(usersListItems.firstElementChild);
    });
}

function onAddNewUserClick(){
    let newUserInfo = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        website: document.getElementById('website').value
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: METHOD_POST,
        body: JSON.stringify(newUserInfo)
    })
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        addUserInfo(empty, true)
        addUserInList(newUserInfo.username, data.id)
    })
}
