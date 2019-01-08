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
      throw 'No object found with that id';
    }
    return this.store[_id];
  }
}

module.exports = MemoryDatabase;
