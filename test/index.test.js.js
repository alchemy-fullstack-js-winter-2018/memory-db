const MemoryDatabase = require('../lib/index');
const shortId = require('shortid');


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
    expect(createdCat).toEqual('fluffy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id);
    expect(foundCat.name).toEqual(createdCat);
  });

module.exports = MemoryDatabase;











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

  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
    db.create(cat);
  });

  it('test 2', () => {

  });
});
