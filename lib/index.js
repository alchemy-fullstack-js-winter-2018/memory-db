const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    // spread operator iterates
    // _obj is for mongo db convention 
    const _id = shortid.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    console.log(copiedObj);
    return copiedObj;
  }

  // findById(obj) {
    
  //   // return foundObj;
  // }
}

module.exports = MemoryDatabase;
