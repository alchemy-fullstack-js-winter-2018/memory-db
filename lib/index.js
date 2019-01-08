
class MemoryDatabase {
    constructor () {
        this.store = {};
    }


    create(obj) {
        const _id = 1234; //replace with shortid
        const copiedObj = { ...obj, _id: 1234 };
        this.store[_id] = copiedObj; //stored this object in store under id
        return copiedObj;
        

    }
    findById(obj) {
         
    }
}

module.export = MemoryDatabase;