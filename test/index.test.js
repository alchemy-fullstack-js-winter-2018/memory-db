const MemoryDataBase = require('./lib/index');
describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDataBase();
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

  it('throws an error when trying to find obj that does not exist', () => {
    expect(() => { 
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });
});

