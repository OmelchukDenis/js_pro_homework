import Collection from '../model/Collection'

export default class Controller{
    constructor(){
        console.log('controller')
        this.collection = new Collection;
        this.collection.fetch()
    }    
}