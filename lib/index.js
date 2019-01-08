
const shortId = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }


  create(obj) {
    const _id = 1234;
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;

  }
}

module.exports = MemoryDatabase;
