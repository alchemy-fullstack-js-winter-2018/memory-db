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
    const cat = this.store[_id];
    return cat;
  }
}
  
  
module.exports = MemoryDatabase;
  
