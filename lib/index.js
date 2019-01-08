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

  findByIdAndUpdate(id, obj) {
    const updated = this.store[id];
    const newObject = { ...obj, id };
    if(updated) {
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
}

module.exports = MemoryDatabase;
