'use strict'

const ITEM_USER_CLASS = 'userItem';
const ITEM_ACTIVE_CLASS = 'active';


const requestUsersList = fetch('https://jsonplaceholder.typicode.com/users');

const usersList = document.getElementById('usersList');
const userInfoTemplate = document.getElementById('userInfoTemplate').innerHTML;
const userInfo = document.getElementById('userInfo');
const usersListItems = document.createElement('ul');
usersList.addEventListener('click', onUserClick)

requestUsersList
.then((resp) => {
    return resp.json()
})
.then((data) => {
    return showUsersList(data);
})
.then((firstUser) => {
    showUserInfo(firstUser)
})
.catch(() => console.log('Error'))

function showUserInfo(user){
    fetch('https://jsonplaceholder.typicode.com/users/' + user)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        addUserInfo(data);
    })
}

function showUsersList(data){
    data.forEach(el => addUserInList(el.name, el.id));
    usersList.appendChild(usersListItems);
    addActiveClass(usersListItems.firstChild);
    return data[0].id
}

function addUserInList(name, id){
    const userItem = document.createElement('li');
    userItem.innerText = name;
    userItem.setAttribute('data-userid', id);
    userItem.classList.add(ITEM_USER_CLASS);
    usersListItems.appendChild(userItem);
}

function addUserInfo(data){
    userInfo.innerHTML = userInfoTemplate.replace('{{username}}', data.username)
                                        .replace('{{name}}', data.name)
                                        .replace('{{email}}', data.email)
                                        .replace('{{street}}', data.address.street)
                                        .replace('{{suite}}', data.address.suite)
                                        .replace('{{city}}', data.address.city)
                                        .replace('{{zipcode}}', data.address.zipcode)
                                        .replace('{{phone}}', data.phone)
                                        .replace('{{website}}', data.website)
                                        .replace('{{name}}', data.company.name)
                                        .replace('{{catchPhrase}}', data.company.catchPhrase)
                                        .replace('{{bs}}', data.company.bs);
                                        
}

function onUserClick(e){
    if(e.target.classList.contains(ITEM_USER_CLASS)){
        showUserInfo(e.target.dataset.userid)
        deleteActiveClass();
        addActiveClass(e.target);
    }
}

function deleteActiveClass(){
    usersList.querySelector('.active').classList.remove(ITEM_ACTIVE_CLASS)
}

function addActiveClass(tag){
    tag.classList.add(ITEM_ACTIVE_CLASS);
}