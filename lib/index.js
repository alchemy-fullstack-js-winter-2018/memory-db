const shortid = require('shortid');

class MemoryDataBase {
    constructor() {
        this.store = {};
    }
    create(obj) {
        const _id = shortid();
        const copiedObj = { ...obj, _id };
        this.store[_id] = copiedObj;
        return copiedObj;
        // for(let key in obj)
    }
    
    findById(_id) {
        const item = this.store[_id];
        if(!item) {
            throw `No Item Id:${_id}`;}

        return item;
        
    }

    all() {
        const allItems  = Object.values(this.store);
        return allItems;
    }
    
    findByIdAndUpdate(_id, newItem) {
        this.store[_id] = newItem;

        const item = this.store[_id];

        if(!item) {
            throw 'No Item Id';}

            
        delete this.store[newItem._id];
        return item; 

    }
    findByIdAndDelete(_id) {
        let item = this.store[_id];
        delete this.store[_id];
        if(!item) {
            throw 'No Item Id';}

        return { deleted: 1 };

    }
    drop() {
        this.store = {};

    }

};


module.exports = MemoryDataBase;
