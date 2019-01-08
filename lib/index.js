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

  findByIdAndUpdate(id, newObject) {
    const updated = this.store[id];
    if(updated) {
      newObject._id = id;
      this.store[id] = newObject;
      return newObject;
    } else {
      throw 'No Id found';
    }
  }

  findByIdAndDelete(id) {
    const deleted = this.store[id];
    if(deleted) {
      delete this.store[id];
      return { deleted: 1 };
    } else {
      throw 'No Id found';
    }
  }

  drop() {
    return this.store = {};
  }
}

module.exports = MemoryDatabase;
