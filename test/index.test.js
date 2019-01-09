const MemoryDatabase = require('../lib/index');

describe('memory database', () => {

  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    //clear db
    //setup required for test 
  });
  it('creates an object in the db', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id); 
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error if no object exists for the id', () => {
    expect(() => {
      db.findById('notRealId');
    }).toThrowError('No object with _id notRealId');
  });

  it('returns all objects', () => {
    const cat = { name: 'fluffy' };
    const kitten = { name: 'missy' };

    const createdCat = db.create(cat);
    const createdKitten = db.create(kitten);
    
    const allCats = db.find();
  
    expect(allCats).toEqual([createdCat, createdKitten]);
  });

  it('finds an object by id and updates', () => {
    const oldCat = { name: 'fluffy' };
    const newCat = { name: 'missy' };
    const createdCat = db.create(oldCat);
    const updatedCat = db.update(createdCat._id, newCat);
   
    expect(newCat.name).toEqual(updatedCat.name);
  });

  it('throws an error if no object exists for the id', () => {
    const newCat = { name: 'kitty' };
    expect(() => {
      db.update('123', newCat);
    }).toThrowError('No object found with that _id');
  });

  it('finds and object by id and deletes', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    const deletedCat = db.delete(createdCat._id);

    expect(deletedCat).toEqual({ deleted: 1 });
  });

  it('throws an error if no object exists for the id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    expect(() => {
      db.delete(123);
    }).toThrowError('No object found with that _id');
  });
  
  it('deletes all keys in the store', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat); 

    const deleteAll = db.drop();

    expect(deleteAll).toEqual({});
  });
});
