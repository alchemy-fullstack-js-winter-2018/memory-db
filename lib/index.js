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
    if(!obj) {
      throw (`No object with specified id ${_id}`);
    } else {
      return obj;
    }
  }

  find() {
    const all = this.store;
    return Object.values(all);
  }

  findByIdAndUpdate(_id, newObj) {
    if(!this.exists(_id)) {
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
    if(!_id) {
      throw 'No item by ID';
    }
    delete this.store[_id];
    return { deleted: 1 };
  }

  drop() {
    this.store = {};
  }
}

module.exports = MemoryDatabase;