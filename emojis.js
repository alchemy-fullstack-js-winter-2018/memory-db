let ids = require('short-id');

class MemoryDatabase {
  constructor() {
    this.stored = [];
    this.store = newEmo => this.stored.push(newEmo);
  }
}


const Emojis = new MemoryDatabase();

const Happy = {
  name: 'Happs'
};

const createdId = ids.generate();
let Happy1 = { ... Happy, _id: createdId };

Emojis.store(Happy1);

console.log(Emojis);


