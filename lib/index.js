const shortid = require('shortid');


class MemoryDatabase {
    constructor() {
        this.store = {};
    }

    create(obj) {
        const _id = shortid.generate();
        const copiedObj = {...obj, _id};
        this.store[_id] = copiedObj;
        return copiedObj;
    }

    findById(_id) {
        const object = this.store[_id];
        if (!object) {
            throw 'no object with id ${_id}';
        }
        return object;
    }

    find() {
       return Object.values(this.store);
    }

    findByIdAndUpdate(_id, obj) {
        if(!this.store[_id]) {
            throw `id ${_id} not found`;
        }
        return this.store[_id] = {...obj, _id};
    }

    findByIdAndDelete(_id) {
        if(!this.store[_id]) {
            throw `object with id ${_id} not found`
        }
        const obj = this.store[_id];
        const objName = obj.name; 
        delete this.store[_id];
        return `${objName} is deleted`;
    }

    drop() {
        return this.store = {};
    }
}



module.exports = {
    MemoryDatabase
};