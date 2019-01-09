
const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortid();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    } 
    return obj;
  }

  findAll() {
    const allObjs = Object.values(this.store);
    return allObjs;
  }

  findByIdAndUpdate(_id, newObj) {
    let obj = this.store[_id];
    obj = newObj;
    if(!obj) {
      throw `No object with _id ${_id}`;
    } 
    return obj;
  }

  findByIdAndDelete(_id) {
    let obj = this.store[_id];
    delete this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    } 
    return { deleted: 1 };
  }

  dropAll() {
    this.store = {};
  }
}

module.exports = MemoryDatabase;
