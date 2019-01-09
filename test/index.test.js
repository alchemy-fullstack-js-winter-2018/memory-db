const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  // store = { { name: 'fluffy' } }
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
      // -> { name: 'fluffy', _id: 1234 }
      // createdCat._id === 1234

      const foundCat = db.findById(createdCat._id);
      expect(foundCat).toEqual(createdCat);
    });

    it('throws an error when trying to find an object that does not exist', () => {
      expect(() => {
        db.findById('notARealId');
      }).toThrowError('No object with _id notARealId');
    });
  });

  describe('find', () => {
    it('can return an object within the object', () => {
      const cat1 = { name: 'fluffy' };
      const createdCat1 = db.create(cat1);
      const cat2 = { name: 'muffy' };
      const createdCat2 = db.create(cat2);
      expect(db.find()).toEqual([createdCat1, createdCat2]);
    });
  });

  describe('findByIdAndUpdate', () => {
    it('can find object by id and update it', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      const newCat = { name: 'fifi' };
      expect(db.findByIdAndUpdate(createdCat._id, newCat)).toEqual({ name: 'fifi', _id: createdCat._id });
    });
  });
    
  describe('findByIdAndDelete', () => {
    it('can find object by id and delete it', () => {
      const cat = { name: 'fluffy' };
      const createdCat = db.create(cat);
      const deletedCat = db.findByIdAndDelete(createdCat._id);
      expect(deletedCat).toEqual({ deleted: cat });
    });
  });
});
