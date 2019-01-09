const shortId = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortId.generate();
    const copiedObj = { ... obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    if(!this.store[_id]) {
      throw `No object with _id ${_id}`;
    }
    return this.store[_id];
  }

  find(obj) {
    return Object.values(this.store);
  }

  update(_id, obj) {
    const newCopy = { ...obj, _id };
    
    if(!this.store[_id]) {
      throw 'No object found with that _id';
    }
    this.store[_id] = newCopy;
    return newCopy;

  }

  delete(_id) {
    if(!this.store[_id]) {
      throw 'No object found with that _id';
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
