class MemoryDatabase {
  constructor() {    //#1
    this.store = {};
  }

  create(obj) {
    const _id = 1234;
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj; //so see what it looks like - still in progress
  }
}

module.exports = MemoryDatabase;
