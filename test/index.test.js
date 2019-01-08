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

});
