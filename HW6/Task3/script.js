'use strict'

const userObj = {
    'key1' : 'value1',
    'key2' : 'value2',
    'key3' : 'value3',
    'key4' : {
        'key4_1' : 'value1',
        'key4_2' : 'value2',
        'key4_3' : {
            'key_4_3_1' : 'value1'
        }
    },
    'key5' : 'value5'
}

let newObj = createCopyObj(userObj);
console.log(userObj, newObj);

function createCopyObj(userObj) {
    let copyObj = {};
    for(let key in userObj){
        if(typeof(userObj[key]) === 'object'){
            copyObj[key] = createCopyObj(userObj[key]);
        } else{
            copyObj[key] = userObj[key];
        }
    }
    return copyObj;
}