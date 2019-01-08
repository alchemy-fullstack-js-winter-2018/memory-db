const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    //run before each test
    // * clear database
    // * setup required for each test
  });

  describe('create', () => {
    it('creates an object in the database', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      expect(createdCat.name).toEqual('fluffy');
  
    });
  });

  it('test 2', () => {

  });
});
