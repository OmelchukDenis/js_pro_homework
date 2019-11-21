websocket = new WebSocket('wss://fep-app.herokuapp.com/');

websocket.onopen = function(e){
    console.log('onopen', e)
    websocket.send('dsfsd');
}

websocket.onclose = function(e){
    console.log('onclose', e)
}

websocket.onerror = function(e){
    console.log('onerror', e)
}

console.log(websocket)