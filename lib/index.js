const shortid = require('shortid');

class MemoryDataBase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = 1234;
    // spread operator, spreads from original obj into new obj
    const copiedObj = { ...obj, _id: 1234 };
    this.store[_id] = copiedObj;
    // _id is the key
    // copiedObj is the value
    return copiedObj;
  }

  findById(_id) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    
    return obj;
  }
}

module.exports = MemoryDataBase;
