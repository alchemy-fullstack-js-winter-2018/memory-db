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

  findByIdAndDelete(_id) {
    if(this.store[_id] === undefined) {
      throw `No object with _id ${_id}`;
    }
    delete this.store[_id];
    return { deleted: 1 };
  }

  drop() {
    this.store = {};
  }
}
    

// if(!this.store[_id]) {
//   throw `No object with _id ${_id}`;
// } else {
//   delete this.store[_id];
//   return { deleted: 1 };
// }

// delete this.store[_id];
// return { deleted: 1 };




// var objet = this.store[_id];
// if(!objet) {
//   throw `No object with _id ${_id}`;
// } else {
//   var objectz = objet;
      
//   return { objectz, deleted: 1 };
// }
// delete objet;

module.exports = MemoryDatabase;

// var objet = this.store[_id];
// if(!objet) {
//   throw `No object with _id ${_id}`;
// } else {
//   var objectz = objet;
//   delete objectz;
//   return { deleted: 1 };
// }
