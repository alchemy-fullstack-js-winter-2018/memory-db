const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
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

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError();
  });

  it('can find all objects', () => {
    const obj1 = { name: 'foo' };
    const obj2 = { name: 'bar' };
    const createObj1 = db.create(obj1);
    const createObj2 = db.create(obj2);
    const foundObjs = db.find();
    expect(foundObjs[0].name).toEqual('foo');
    expect(foundObjs[1].name).toEqual('bar');
    expect(foundObjs.length).toEqual(2);
  });

  it('can update an item in the db', () => {
    const obj1 = { name: 'foo2' };
    const obj2 = { name: 'bar2' };
    const createdObj1 = db.create(obj1);
    const createdObj2 = db.create(obj2);
    let updatedItem = db.findByIdAndUpdate(createdObj1._id, createdObj2);
    updatedItem.name = obj2.name;
    expect(updatedItem).toEqual(createdObj2);
  });

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findByIdAndUpdate('notARealId');
    }).toThrowError();
  });

  it('can delete an object by id', () => {
    const obj1 = { name: 'foo' };
    const createdObj = db.create(obj1);
    const findAndDelObj = db.findByIdAndDelete(createdObj._id);
    expect(findAndDelObj).toEqual({ deleted: 1 });  
  });

  it('can delete everything in the db', () => {
    const obj = { name: 'foo' };
    db.create(obj);
    db.drop();
    expect(db.store).toEqual({});
  });
});
