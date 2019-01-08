const MemoryDatabase = require('../lib/index');
describe('MemoryDatabase', () => {
  let db  = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('creates an obj in db', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find an obj by id in the db', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws error when obj does not exist', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });
});

// beforeAll(() => {
// });
// afterEach(() => {   
// });
// afterAll(() => {
// });


//   //store = { { name: 'fluffy} }}

//afterall:     //once after last test runs
//deleting files that were created in testing
// shut down db

// after each:     // runs after each test, closing db connections

