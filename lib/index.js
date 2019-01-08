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
        return item;
    }

    all() {
        const allItems  = Object.values(this.store);
        return allItems;
    }
    
    findByIdAndUpdate(_id, newItem) {

        let item = this.store[_id];

        item = newItem;

        return item; 

    }

};


module.exports = MemoryDataBase;