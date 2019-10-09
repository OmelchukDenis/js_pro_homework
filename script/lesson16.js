'use strict'

const prom = fetch('https://jsonplaceholder.typicode.com/photos');

prom.then((resp) => {
    resp.json().then((data) => {
        let c = data;
        console.log(c);
    })
})
