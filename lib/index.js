const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }


  create(obj) {
    const _id = shortid.generate(); //replace with shortid
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj; //stored this object in store under id
    return copiedObj;
        

  }
  findById(_id) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj;
  }

  find() {
    const obj = this.store;
    return Object.values(obj); 
        
  }

  findByIdAndUpdate(_id, newObject) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    const copiedObj = { ...newObject, _id };
    this.store[_id] = copiedObj;
         
    return copiedObj;
  }
}

module.exports = MemoryDatabase;

