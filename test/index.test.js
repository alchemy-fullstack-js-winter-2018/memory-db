const MemoryDatabase = require('../lib/index');
const _id = require('short-id');


describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    // run before each test (it)
    //clear database
    //setup required for each test
  
  });

  it('creates an object in the database', () => {
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
      db.findById('notARealId');
    }).toThrowError();
  });

  it('returns a list of all objects in this.store', () => {
    const cat = [];

    expect(db.find()).toEqual(cat);
  });

  it('can find by id and update the object with the new object', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const newCat = { name: 'dobby' };

    const updatedCat = db.findByIdAndUpdate(createdCat._id, newCat);
    expect(updatedCat).toEqual({ name: 'dobby', _id: createdCat._id });
  });

  it('can find an id and delete value under id in this.store', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const deletedCat = db.findByIdAndDelete(createdCat._id);

    expect(deletedCat).toEqual({ deleted: 1 });
  });

  it('deletes all keys in this.store', () => {
    expect(db.drop()).toEqual({ });
  });









  beforeAll(() => {
    // once before the first test runs
    // starting our database
    // getting credentials

  });

  afterEach(() => {
    // runs after each test (it)
    // clean up between tests
    // closing db connections

  });

  afterAll(() => {
    // one after the last test runs
    // deleting files that were created during testing
    // closing db connections

  });

 
});
