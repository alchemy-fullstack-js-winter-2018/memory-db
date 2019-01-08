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
  // find() {
  //   const all = this.store.values;
  //   return all;
  // }
}

module.exports = MemoryDatabase;

//return a list of all objects in this.store. 
//(NOTE: use Object.values)
