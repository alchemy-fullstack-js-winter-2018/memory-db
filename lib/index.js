const shortId = require('short-id');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortId.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    const item = this.store[_id];
    if(item) {
      return item;
    }
    else {
      throw 'No object with _id ${id}';
    }
  }

  find() {
    return Object.values(this.store);
  }

  findByIdAndUpdate(_id, newObject) {
    const updated = this.findById(_id);
    if(updated) {
      newObject._id = _id;
      this.store[_id] = newObject;
      return newObject;
    }
    else {
      throw 'No object with _id ${_id}';
    }
  }

  findByIdAndDelete(_id) {
    const deleted = this.findById(_id);
    if(deleted) {
      delete this.store[_id];
      return { deleted: 1 };
    }
    else {
      throw 'Item not found by id given: ${_id}';
    }
  }

  drop() {
    return this.store = {};
  }
}

module.exports = MemoryDatabase;
