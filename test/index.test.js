const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  describe('create', () => {
    it('creates an object in the database', () => {
      const cat = { name: 'coolio' };
      const createdCat = db.create(cat);
      expect(createdCat.name).toEqual('coolio');
    });
  });
  
  describe('findById', () => {
    it('can find an object by id', () => {
      const cat = { name: 'snookums' };
      const createdCat = db.create(cat);
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
      const cat1 = { name: 'legolas' };
      const createdCat1 = db.create(cat1);
      const cat2 = { name: 'aragorn' };
      const createdCat2 = db.create(cat2);
      const data = [createdCat1, createdCat2];
      expect(db.find()).toEqual(data);
    });

    it('can return an empty array when the store is empty', () => {
      expect(db.find()).toEqual([]);
    });
  });

  describe('findByIdAndUpdate', () => {
    it('can find an object by id and update it', () => {
      const cat = { name: 'frodo' };
      const createdCat = db.create(cat);
      const newCat = { name: 'spot' };
      expect(db.findByIdAndUpdate(createdCat._id, newCat)).toEqual({ name: 'spot', _id: createdCat._id });
      //in future for jest testing, if you use shortid to generate id, for the test when looking at the object
      //you can use _id: expect.any(String)
    });

    it('can throw an error if there is no object with matching id', () => {
      expect(() => {
        db.findById('fakeId');
      }).toThrowError('No object with _id ${id}');
    });
  });

  describe('findByIdAndDelete', () => {
    it('can find an object by id and delete it', () => {
      const cat = { name: 'striker' };
      const createdCat = db.create(cat);
      expect(db.findByIdAndDelete(createdCat._id)).toEqual({ deleted: 1 });
    });

    it('can throw an error if there is no object with matching id', () => {
      expect(() => {
        db.findById('noIdFool');
      }).toThrowError('No object with _id ${id}');
    });
  });

  describe('drop', () => {
    it('can delete all keys in store', () => {
      const cat = { name: 'baller' };
      const createdCat = db.create(cat);
      expect(db.drop(createdCat)).toEqual({});
    });
  });
});
