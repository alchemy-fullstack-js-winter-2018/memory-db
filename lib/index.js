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
    // if(!obj) {
    //   throw `No object with _id ${_id}`;
    // } else {
    //   return obj;
    // }

    if(!obj) {
      throw `No object with _id ${_id}`;
    }

    return obj;
  }

  find() {
    return this.store;
  
  }

  findByIdAndUpdate(_id, newObject) {
    const updated = this.findById(_id);
    if(updated) {
      newObject._id = _id;
      this.store[_id] = newObject;
      return newObject;
    }
    // if(!obj) {
    //   throw `No object with _id ${_id}`;
    // }
  }

  findByIdAndDelete(_id) {
    const deleted = this.findById(_id);
    if(deleted) {
      delete this.store[_id];
      return { deleted: 1 };
    }
    // if(!obj) {
    //   throw `Item not found by given id ${_id}`;
    // }
  }

  drop() {
    return this.store = {};
  }
}


module.exports = MemoryDatabase;
