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

  it('can delete an object', () => {
    const obj1 = { name: 'foo' };
    const findAndDelObj = db.findByIdAndDelete(obj1);
  });
});
