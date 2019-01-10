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

  findByIdAndUpdate(_id, obj2) {
    const obj1 = { ...obj2, _id };
    this.store[_id] = obj1;
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj2;
  }

  findByIdAndDelete() {

  }

  exists(_id) {
    return !!this.store[_id];
  }

  drop() {

  }
}

module.exports = MemoryDatabase;
