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
      expect(() => {
        db.findById('notARealId');
      }).toThrowError('No object with _id ${id}');
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

  describe('findByIdAndUpdate', () => {
    it('can find an object by id and update it', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      createdCat.name = 'spot';
      expect(db.findByIdAndUpdate(createdCat.name)).toEqual('spot');
    });
  });

  describe('findByIdAndDelete', () => {
    it('can find an object by id and delete it', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      const deletedCat = db.findByIdAndDelete(createdCat._id);
      expect(deletedCat).toEqual({ deleted: 1 });
    });
  });
});
