class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  
  create(obj) {
    const _id = 1234;
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }
  findById(_id) {
    return this.store[_id];
  }
  
}


module.exports = MemoryDatabase;
