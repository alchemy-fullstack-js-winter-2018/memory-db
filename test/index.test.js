const MemoryDatabase = require('../lib/index');

describe('memory database', () => {

  let db = null;

  beforeEach(() => {
    db = new MemoryDatabase();
    // runs before each test it
    // * clear database
    // * setup required for each test
  });



  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

});
