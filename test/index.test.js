const MemoryDatabase = require ('../lib/index.js');

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
  
  it('can find an object by id', () => {
    const cat = { _id: 123, name: 'fluffy' };
    const createdCat = db.create(cat);
  
    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error when trying to find an object', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });

  it('returns all objects in the database', () => {
    const cat = { name: 'cat' };
    const cat2 = { name: 'cat2' };

    const createdCat = db.create(cat);
    const createdCat2 = db.create(cat2);

    const fulldb = db.findAll();
    expect(fulldb).toEqual([createdCat, createdCat2]);
  });
  it('can update an item in the db', () => {
    const cat = { name: 'cat3' };
    const newCat = { name: 'new cat' };
    const createCat = db.create(cat);

    const updateObj = db.findByIdAndUpdate(createCat._id, newCat);
    expect(updateObj).toEqual(newCat);
  });
  it('throws an error when trying to find an object', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });
  it('can delete an item in the db', () => {
    const cat = { name: 'cat' };
    const createdCat = db.create(cat);

    const deletedItem = db.findByIdAndDelete(createdCat._id);
    expect(deletedItem).toEqual({ deleted: 1 });
  });
  it('throws an error when trying to find an object', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });
  it('can delete all items in the db', () => {
    const cat = { name: 'cat' };
    db.create(cat);
    db.dropAll();

    expect(db.store).toEqual({});
  });
});
