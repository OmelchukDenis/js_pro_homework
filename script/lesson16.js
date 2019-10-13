'use strict'

const prom = fetch('https://jsonplaceholder.typicode.com/photos');

prom.then((resp) => {
    resp.json().then((data) => {
        console.log(data);
    })
})

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

// const xhr = new XMLHttpRequest();
// xhr.open('GET', url)
// xhr.send();
// xhr.onload = function(){
//     console.log(JSON.parse(xhr.responseText));
// }



createTimer(3000).then(() => {
    console.log('alert');
    return fetch(url)
})
.then((resp) => {
    resp.json();
})
.then((data) => {
    console.log(data)
})
.catch(() => {
    console.log('error')
})

function createTimer(sec){
    return new Promise((resolve, reject) => {
        if(sec >= 5000){
            reject();
        }
        else{
            setTimeout(() => {
                resolve();
            }, sec);
        }
    })
}