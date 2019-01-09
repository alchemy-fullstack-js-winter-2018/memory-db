const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    //run before each test(it)
    // * clear database 
    // * set-up required for each test
    // * for this lab: instantiate a new db for each test
  });

  it('creates a dog in the db', () => {
    const dog = { name: 'fluffy' };
    const createdDog = db.create(dog);

    expect(createdDog.name).toEqual('fluffy');
  });

  it('can find an obj by id', () => {
    const dog = { name: 'fluffy' };
    const createdDog = db.create(dog);
    const foundDog = db.findById(createdDog._id);

    expect(foundDog).toEqual(createdDog);
  });
  
  it('throws an error', () => {
    expect(() => {
      db.findById('1234');
    }).toThrowError('no dog assigned to that id!');
  });

  it('returns a list of all objects in the store', () => {
    const dog = { name: 'fluffy' };
    const dogTwo = { name: 'fido' };
    const createdDog = db.create(dog);
    const createdDawg = db.create(dogTwo);
    const all = db.find();
    expect(all).toEqual([createdDog, createdDawg]);
  });

  it('updates a specific object', () => {
    const dog = { name: 'fluffy' };
    const createdDog = db.create(dog);
    const updatedDog = db.findByIdAndUpdate(createdDog._id, { name: 'banana' });

    expect(updatedDog.name).toEqual('banana');
  });

  it('throws an error', () => {
    expect(() => {
      db.findByIdAndUpdate('NotAnId');
    }).toThrowError('no object at this id!!');
  });

  it('deletes a specific id', () => {
    const dog = { name: 'fluffy' };
    const createdDog = db.create(dog);
    const foundDog = db.findById(createdDog._id);
    const noId = db.findByIdAndDelete(foundDog._id);
    
    expect(noId).toEqual({ deleted: 1 });
  });

  it('throws an error', () => {
    expect(() => {
      db.findByIdAndDelete('NotAnId');
    }).toThrowError('no object at this id');
  });

  it('drops all keys in the store', () => {
    const banana = db.drop();
    expect(banana).toEqual({});
  });

});
