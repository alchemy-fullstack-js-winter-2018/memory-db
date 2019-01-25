const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('creates an object in the databse', () => {
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

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });

  it('can return every object in the store', () => {
    const obj1 = { name: 'foo' };
    const obj2 = { name: 'bar' };
    db.create(obj1);
    db.create(obj2);
    const foundObjs = db.find();
    expect(foundObjs[0].name).toEqual('foo');
    expect(foundObjs[1].name).toEqual('bar');
  });

  it('throws error if wrong id when updating', () => {
    expect(() => {
      db.findById('NotARealId');
    }).toThrowError();
  });

  it('throws an error if invalid ID', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError();
  });

  it('finds an object by id and then deletes it', () => {
    const cat = { name: 'cat3' };
    const createdCat = db.create(cat);
    const deletedItem = db.findByIdAndDelete(createdCat._id);
    expect(deletedItem).toEqual({ deleted: 1 });
  });

  it('deletes everything in the store', () => {
    const cat = { name: 'cat3' };
    db.create(cat);
    db.drop();
    expect(db.store).toEqual({});
  });
});
