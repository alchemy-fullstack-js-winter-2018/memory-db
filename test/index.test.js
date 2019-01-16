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
    const createdObj1 = db.create(obj1);
    const createdObj2 = db.create(obj2);
    const foundObjs = db.find();
    expect(foundObjs).toEqual([createdObj1, createdObj2]);
  });

  it('can update a stored item by id', () => {
    const createdTweet = db.create({ user: 'Ryan', text: 'My first tweet' });
    const _id = createdTweet._id;
    const updatedTweet = db.findByIdAndUpdate(_id, { user: 'Ryan', text: 'EDITED: My first tweet' });
    expect(updatedTweet).toEqual({ user: 'Ryan', text: 'EDITED: My first tweet', _id: expect.any(String) });
  });

  it('throws an error when trying to find an id that does not exist', () => {
    expect(() => {
      db.findByIdAndUpdate('notARealId', /* { name: 'fluffy' } */);
    }).toThrowError();
  });

  it('can delete an object by id', () => {
    const obj1 = { name: 'foo' };
    const createdObj = db.create(obj1);
    const findAndDelObj = db.findByIdAndDelete(createdObj._id);
    expect(findAndDelObj).toEqual({ deleted: 1 });  
  });

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findByIdAndUpdate('notARealId', { name: 'fluffy ' });
    }).toThrowError();
  });

  it('can delete everything in the db', () => {
    const obj = { name: 'foo' };
    db.create(obj);
    db.drop();
    expect(db.store).toEqual({});
  });
});