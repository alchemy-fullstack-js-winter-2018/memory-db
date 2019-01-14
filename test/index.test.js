const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
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
      const cat = { name: 'puffy' };
      const createdCat = db.create(cat);
      const storedCat = db.findById(createdCat._id);
      expect(storedCat).toEqual(createdCat);
    });

    it('throws an error when trying to find an object that does not exist', () => {
      expect(() => {
        db.findById('notARealId');
      }).toThrowError('No object with _id ${id}');
    });
  });

  describe('find', () => {
    it('can return an object within the object', () => {
      const cat1 = { name: 'buffy' };
      const createdCat1 = db.create(cat1);
      const cat2 = { name: 'muffy' };
      const createdCat2 = db.create(cat2);
      const data = [createdCat1, createdCat2];
      expect(db.find()).toEqual(data);
    });

    it('can return an empty array when the store is empty', () => {
      expect(db.find()).toEqual([]);
    });
  });

  describe('findByIdAndUpdate', () => {
    it('can find object by id and update it', () => {
      const cat = { name: 'scruffy' };
      const createdCat = db.create(cat);
      const newCat = { name: 'fifi' };
      expect(db.findByIdAndUpdate(createdCat._id, newCat)).toEqual({ name: 'fifi', _id: createdCat._id });
    });
    it('can throw an error if there is no object with matching id', () => {
      expect(() => {
        db.findById('fakeId');
      }).toThrowError('No object with _id ${id}');
    });
  });
    
  describe('findByIdAndDelete', () => {
    it('can find object by id and delete it', () => {
      const cat = { name: 'biff' };
      const createdCat = db.create(cat);
      expect(db.findByIdAndDelete(createdCat._id)).toEqual({ deleted: 1});
    });

    it('can throw an error if there is no object with matching id', () => {
      expect(() => {
        db.findById('noIdMatch');
      }).toThrowError('No object with _id ${id}');
    });
  });

  describe('drop', () => {
    it('can delete all keys in store', () => {
      const cat = { name: 'walter' };
      const createdCat = db.create(cat);
      expect(db.drop(createdCat)).toEqual({});
    });
  });
});
