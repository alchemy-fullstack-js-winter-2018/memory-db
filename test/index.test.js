const MemoryDatabase = require('../lib/index');

describe('memory database', () => {

  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
    //clear db
    //setup required for test 
  });
  it('creates an object in the db', () => {
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

  it('throws an error if no object exists for the id', () => {
    try {
      expect(db.findById(123)).toThrowError();
    } catch(e) {
      console.log(e);
    }
  });

  it('returns all objects', () => {
    const cat = { name: 'fluffy' };
    const kitten = { name: 'missy' };

    const createdCat = db.create(cat);
    const createdKitten = db.create(kitten);
    
    const allCats = db.find();
  
    expect(allCats).toEqual([createdCat, createdKitten]);
  })

  
});
