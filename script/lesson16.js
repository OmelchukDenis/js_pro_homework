'use strict'

// const prom = fetch('https://jsonplaceholder.typicode.com/photos');

// prom.then((resp) => {
//     resp.json().then((data) => {
//         let c = data;
//         console.log(c);
//     })
// })

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

// const xhr = new XMLHttpRequest();
// xhr.open('GET', url)
// xhr.send();
// xhr.onload = function(){
//     console.log(JSON.parse(xhr.responseText));
// }

fetch(url).then(
    
);