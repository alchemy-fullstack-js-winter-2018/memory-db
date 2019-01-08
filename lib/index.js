const shortId = require('short-id');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    //spread goes through each key in the object and makes a new copy of the object
    const _id = shortId.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(id) {
    const item = this.store[id];
    if(item) {
      return item;
    }
    else {
      throw 'error no matching object with given id';
    }
  }

  find() {
    return Object.values(this.store);
  }

  // findByIdAndDelete(id) {

  // }

}

module.exports = MemoryDatabase;
