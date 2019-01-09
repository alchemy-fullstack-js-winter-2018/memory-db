
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
      throw `No object with _id ${_id}`;
    } else {
      return obj;
    }

  }

  find() {
    return Object.values(this.store);
  }

  findByIdAndUpdate(id, newObject) {
    const updatedObj = this.store[id];
    if(updatedObj) {
      newObject._id = id;
      this.store[id] = newObject;
      return newObject;
    } else {
      throw 'no object exists for this id';
    }
  }
}

module.exports = MemoryDatabase;
