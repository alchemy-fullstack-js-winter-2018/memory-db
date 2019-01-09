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

  findByIdAndUpdate(_id, obj) {
    if(!obj) {
      throw 'there is no object at this id!!';
    }
    else {
      const copyObj = { ...obj, _id };
      this.store[_id] = copyObj;   
      return copyObj;
    }
  }

  findByIdAndDelete(_id) {
    if(!this.store[_id]) { 
      throw 'no object at this id'; 
    }
    else {
      delete this.store[_id];
      return { deleted: 1 };
    } 
  }

  drop() {
    delete this.store;
    return {};
  }

}

module.exports = MemoryDatabase;
