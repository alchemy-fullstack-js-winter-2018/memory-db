var ids = require('short-id');

class MemoryDatabase {
  constructor() {
    this.store = {

    };
  }

  create(obj) {
    const _id = ids.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(id) {
    const object = this.store[id];
    if(object) {
      return object;
    } else {
      throw 'No Id found';
    }
  }

  find() {
    return Object.values(this.store);
  }
}

module.exports = MemoryDatabase;
