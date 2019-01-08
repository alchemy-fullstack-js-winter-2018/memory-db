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
  
  describe('findById', () => {
    it('can find an object by id', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      // -> {name: 'fluffy', _id: 1234}
      // createdCat._id === 1234
      const storedCat = db.findById(createdCat._id);
      expect(storedCat).toEqual(createdCat);
    });
  
    it('can throw an error if there is no object with matching id', () => {
      try {
        const dog = { name: 'fluffy', id: '99999' };
        expect(db.findById(dog.id)).toThrowError();
      }
      catch(error) {
        expect(error).toEqual('error no matching object with given id');
      }
    });
  });

  describe('find', () => {
    it('can return all objects within the object', () => {
      const cat1 = { name: 'fluffy' };
      const createdCat1 = db.create(cat1);
      const cat2 = { name: 'spot' };
      const createdCat2 = db.create(cat2);
      const data = [createdCat1, createdCat2];
      expect(db.find()).toEqual(data);
    });
  });
});
