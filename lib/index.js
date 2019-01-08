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

  findById(id) {
    console.log(this.store[id]);
    return this.store[id];
  }

}

module.exports = MemoryDatabase;
