let ids = require('short-id');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  
  create(emoji) {
    const _id = ids.generate();
    const copiedEmoji = { ...emoji, _id };
    this.store[_id] = copiedEmoji;
    return copiedEmoji;
  }

  findById(_id) {
    const emoji = this.store[_id];
    if(emoji) return emoji;
    throw `No object with id ${_id} found` ;
  }

  find() {
    return Object.values(this.store);
  }

  update(_id, emoji) {
    try {
      this.findById(_id);
    } catch(err) {
      throw err;
    }
    const copiedEmoji = { ...emoji, _id };
    this.store[_id] = copiedEmoji;
    return copiedEmoji;
  }
}

module.exports = MemoryDatabase;
