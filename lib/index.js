const shortid = require('shortid');
class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = shortid.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj;
  }

  find() { 
    return Object.values(this.store);
  }

  findByIdAndUpdate(_id, updated) {
    
    this.store[_id] = updated;
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj;

  }
}

module.exports = MemoryDatabase;

// findByIdAndUpdate(, )

// create a copy of the newObject similar to the create method above (make sure to put the id into the object)
// replace the old object with the new copied object in this.store
// return the new copied object
// throw an error if no object exists for the id
