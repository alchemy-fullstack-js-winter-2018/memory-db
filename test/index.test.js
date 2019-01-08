
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
  it('throws an error when trying to find an opb that DNE', () => {
    expect(() => {
      db.findById('notARealID');
    }).toThrowError();
  });
  it('can return a list of objects in the store', () => {
    const cat = { name: 'fluffy' };
    const dog = { name: 'bingo'};
    const createdCat = db.create(cat); 
    const createdDog = db.create(dog); 

    const findEm = db.find();
    expect(findEm).toEqual([createdCat, createdDog]);
  });

  });
