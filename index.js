let ids = require('short-id');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  
  create(obj) {
    const _id = ids.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    if(this.store[_id]) return this.store[_id];
    throw `No object with id ${_id} found` ;
  }

  find() {
    return Object.values(this.store);
  }
}

module.exports = MemoryDatabase;
