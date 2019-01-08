const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    //run before each test (it)
    //clear database
    //setup required for each test
  });

  beforeAll(() => {
    //once before the first test runs
    //*starting database
    //*getting credentials
  });

  afterEach(() => {
    //runs after each test (it)
    //*clean up between tests
    //*closing db connections
  });

  afterAll(() => {
    //one after the last test runs 
    //* deleting files that were creating during testing
    //*shutdown db
  });
  // store = { { name: 'fluffy'}}

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



  });
