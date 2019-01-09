const shortId = require('short-id');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortId.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    const item = this.store[_id];
    if(item) {
      return item;
    }
    else {
      throw 'No object with _id ${id}';
    }
  }

  find() {
    return Object.values(this.store);
  }

  findByIdAndUpdate(_id, newObject) {
    if(!this.store[_id]) {
      throw 'No object with _id ${_id}';
    }
    const objectToUpdateWith = { ...newObject, _id };
    this.store[_id] = objectToUpdateWith;
    return objectToUpdateWith;
  }

  findByIdAndDelete(_id) {
    const deleted = this.findById(_id);
    if(deleted) {
      delete this.store[_id];
      return { deleted: 1 };
    }
    else {
      throw 'Item not found by id given: ${_id}';
    }
  }
  
  drop() {
    return this.store = {};
  }
}

module.exports = MemoryDatabase;
