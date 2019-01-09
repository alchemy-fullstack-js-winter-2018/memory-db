const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortid.generate();
    const copyObj = { ...obj, _id };
    this.store[_id] = copyObj;
    return copyObj;
  }

  findById(_id) {
    if(!this.store[_id]) {
      throw 'no dog assigned to that id!';
    }

    return this.store[_id];
  }

  find() {
    const obj = this.store;
    return Object.values(obj);
  }

  update(_id, obj) {
    const copyObj = { ...obj, _id };
    this.store[_id] = copyObj;   
    console.log(this.store);
    return copyObj;
  }
}

module.exports = MemoryDatabase;
