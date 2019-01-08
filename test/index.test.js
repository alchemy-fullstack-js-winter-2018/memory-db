const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
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

  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });

  it('returns a list of objects', () => {
    const cat = { name: 'fluffy' };
    const createCat1 = db.create(cat);
    const cat2 = { name: 'whiskers' };
    const createCat2 = db.create(cat2);
    expect(db.find()).toEqual([createCat1, createCat2]);
  });

  it('finds by ID and updates', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('finds by ID and deletes', () => {

  });

  it('drops', () => {

  });
});

// beforeEach(() => {
//run before each test (it)
//*clear database
//*setup required for each test
// });
// beforeAll(() => {
//   //once before the first test runs
//   //*starting our database
//   //*getting credentials
// });
// afterEach(() => {
//   //run after each test (it)
//   //*clean up between tests
//   //*closing db connections
// });
// afterAll(() => {
//   //run after the last test runs
//   //*deleting files that were created during testing
//   //*shutdown db
// });
