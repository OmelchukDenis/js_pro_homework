import config from '../config'
import Model from './Model'


export default class Collection{
    constructor(){
        this.setData = this.setData.bind(this)
    }

    fetch(){
        fetch(config.contactsUrl)
        .then(resp => resp.json())
        .then(this.setData)
    }

    setData(data){
        console.log(data);
        this.list = data.map((item)=> new Model(item))
    }
}