const shortId = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {
   
    };
  }

  create(obj) {
    //spread goes through each key in the object
    const _id = shortId();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  // findBy(id) {

  // }

  // find() {

  // }

  // findByIdAndDelete(id) {

  // }

}

module.exports = MemoryDatabase;
