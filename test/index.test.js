
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
  // store = { { name: 'itchy'}}

  it('creates an object in the database', () => {
    const cat = { name: 'itchy' };
    const createdCat = db.create(cat);

    expect(createdCat.name).toEqual('itchy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'itchy' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error when trying to find an obj that DNE', () => {
    expect(() => {
      db.findById('notARealID');
    }).toThrowError();
  });

  it('can return a list of objects in the store', () => {
    const cat = { name: 'itchy' };
    const dog = { name: 'pootchie' };
    const createdCat = db.create(cat);
    const createdDog = db.create(dog);

    const findEm = db.find();
    expect(findEm).toEqual([createdCat, createdDog]);
  });

  it('can 1. find by id 2. update and object by creating a copy of a new object', () => {
    const cat = { name: 'itchy' };
    const createdCat = db.create(cat);

    const findByIdAndUpdate = db.findByIdAndUpdate(createdCat._id, { name: 'scratchy' });
    expect(findByIdAndUpdate.name).toEqual('scratchy');
  });

  it('can delete the value under the id in this.store', () => {
      const cat = { name: 'itchy' };
      const createdCat = db.create(cat);

      const findByIdAndDelete = db.findByIdAndDelete(createdCat._id);
      expect(findByIdAndDelete).toEqual(true); 
  });
  it('can delete all the keys in the store', () => {
    const cat = { name: 'itchy'};

    expect(db.drop()).toEqual({});


  })

  });