const shortid = require('shortid');

var newId = shortid.generate();
console.log(newId, 'new id!!!!!!!');

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
    }
    return obj;
  }

  find() {
    return Object.values(this.store);
  }

  findByIdAndUpdate(_id, newObj) {
    const updated = this.store[_id];
    if(updated) {
      newObj._id = _id;
      this.store[_id] = newObj;
      return newObj;
    } else {
      throw 'No ID Found';
    }
  }

  findByIdAndDelete(_id) {
    const deleted = this.store[_id];
    if(deleted) {
      delete this.store[_id];
      return { deleted: 1 };
    } else {
      throw 'No ID Found';
    }
  }

  exists(_id) {
    return !!this.store[_id];
  }

  // drop() {

  // }
}

module.exports = MemoryDatabase;
