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
    const cat1 = { name: 'fluffy' };
    const createCat1 = db.create(cat1);
    const cat2 = { name: 'whiskers' };
    const createCat2 = db.create(cat2);
    expect(db.find()).toEqual([createCat1, createCat2]);
  });

  it('finds by ID and updates', () => {
    const obj1 = { name: 'obj1' };
    const obj2 = { name: 'obj2' };
    const createdObj1 = db.create(obj1);
    const createdObj2 = db.create(obj2);
    let updatedItem = db.findByIdAndUpdate(createdObj1._id, createdObj2);
    updatedItem.name = obj2.name;
    expect(updatedItem).toEqual(createdObj2);
  });

  it('throws an error if no object exists for the id', () => {
    expect(() => {
      db.findByIdAndUpdate('notARealId');
    }).toThrowError('No object exists for this id');
  });

  it('finds by ID and deletes', () => {
    const obj = { name: 'obj1' };
    const createdObj = db.create(obj);
    findByIdAndDelete = findByIdAndDelete(obj1, _id, )
    return { deleted: 1 };
  });

  it('throws an error if no object exists for the id', () => {
    expect(() => {
      db.findByIdAndDelete('notARealId');
    }).toThrowError('No object exists for this id');
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
