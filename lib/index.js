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

  findByIdAndUpdate(id, newObject) {
    const obj = this.findById(id);
    if(!obj) {
      throw 'No object with _id ${id}';
    }
    newObject._id = id;
    this.store[id] = newObject;
    return newObject;
  }

  findByIdAndDelete(id) {
    const deleted = this.findById(id);
    if(deleted) {
      delete this.store[id];
      return { deleted: 1 };
    }
    else {
      throw 'Item not found by id given: ${id}';
    }

  }

}

module.exports = MemoryDatabase;
