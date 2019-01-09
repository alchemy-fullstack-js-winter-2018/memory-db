const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
    this.shortid = shortid;
  }
  create(obj) {
    const _id = shortid.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }
  findById(_id) {
    if(!this.store[_id]) {
      throw 'the obj you are looking for is not found';
    }
    else {
      return this.store[_id];
    }
  }
  findAll() {
    return Object.values(this.store);
  }
  findByIdAndUpdate(_id, obj) {
    const updatedObj = { ...obj }; 
    if(!this.store[_id]) {
      throw 'the id you are looking for is not found';
    }
    else 
    {
      this.store[_id] = updatedObj;
      return this.store[_id];
    }
  }
  findByIdAndDelete(_id) {
    if(!this.store[_id]) {
      throw 'the id you are looking for is not found';
    }
    delete this.store[_id]; 
    return { deleted: 1 };
  }
  drop() {
    this.store = {};
  }
}
module.exports = {
  MemoryDatabase
};
