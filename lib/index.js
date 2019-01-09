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
      throw `No id found for: ${_id}`;
    }
    return obj;
  }

  find() {
    const obj = this.store;
    return Object.values(obj);
  }

  findByIdAndUpdate(_id, newObj) {
    const copiedObj = { ...newObj, _id };
    const obj = this.store[_id];
    if(!obj) {
      throw `No object found for: ${_id}`;
    }
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findByIdAndDelete(_id) {
    if(!this.store[_id]) {
      throw `No object found for: ${_id}`;
    }
    else {
      delete this.store[_id];
      return { deleted: 1 };
    }
  }

  drop() {
    this.store = {};
    return this.store;
  }

}

module.exports = MemoryDatabase;
