const { MemoryDatabase } = require('../lib/index.js'); 

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });
  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy'); 
  });
  it('it can find an obj by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });
  it('should throw an error is the id is not found', () => {
    try {
      expect(db.findById('hello')).toThrowError();
    } catch(error) {
      expect(error).toEqual('the obj you are looking for is not found');
    }
  }); 
  it('should return all objects in the store', () => {
    const cat = { name: 'fluffy' };
    const cat2 = { name: 'whiskers' };
    const createdCat = db.create(cat);
    const createdCat2 = db.create(cat2); 
    const allObject = db.findAll();
    expect(allObject).toEqual([createdCat, createdCat2]);
  });
  it('this should update an old obj with a new obj', () => {
    const cat = { name: 'fluffy' }; 
    const createdCat = db.create(cat); 
    const id = createdCat._id;
    const newUpdatedCat = db.findByIdAndUpdate(id, { name: 'whiskers' });
    expect(newUpdatedCat.name).toEqual('whiskers'); 
  }); 
  it('this should throw an error if the id doesn\'t exist', () => {
    try {
      db.findByIdAndUpdate('hello');
    } 
    catch(error) {
      expect(error).toEqual('the id you are looking for is not found');
    }
  });
  it('this should delete the obj', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const id = createdCat._id;
    const deleteCat = db.findByIdAndDelete(id); 
    expect(deleteCat).toEqual({ deleted: 1 });
  }); 
  it('this should throw an error if the id doesn\'t exist', () => {
    try {
      db.findByIdAndDelete('hello');
    } 
    catch(error) {
      expect(error).toEqual('the id you are looking for is not found');
    }
  });
  it('this should delete everything in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const drop = db.drop(createdCat);
    expect(drop).toEqual();
  });
});
