const shortid = require('shortid');
class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  //in test you get more generic
  //...obj takes from previous object and copies
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
    // const obj = this.store;
    return Object.values(this.store);
  }
  findByIdAndUpdate(_id,) {
    const obj = this.store[_id];
  }
}
 


module.exports = MemoryDatabase;
