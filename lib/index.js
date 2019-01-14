const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortid.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }
  findById(_id) {
    const obj = this.store[_id];
    if (!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj;
  }
  find() {
    return Object.values(this.store);
  }
  findByIdAndUpdate(_id, newObj) {
    if (!this.exists(_id)) {
      throw `No object with _id ${_id}`;
    }
    const objToUpdateWith = { ...newObj, _id };
    this.store[_id] = objToUpdateWith;
    return objToUpdateWith;
  }
  exists(_id) {
    return !!this.store[_id];
  }
  findByIdAndDelete(_id) {
    return delete this.store[_id];
  }
  drop() {
    return this.store = {};
  }
}


module.exports = MemoryDatabase;
