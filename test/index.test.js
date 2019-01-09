const MemoryDatabase = require('../lib/index');

describe('memory database', () => {

  let db = null;

  beforeEach(() => {
    db = new MemoryDatabase();
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
  it('no foundObj throws error', () => {
    expect(() => {
      db.findById('blahblah');
    }).toThrow(/^No id found for: blahblah$/);
  });

  it('can find a list of all objects in store', () => {
    const cat1 = { name: 'fluffy' };
    const cat2 = { name: 'boobah' };
    const createdCat1 = db.create(cat1);
    const createdCat2 = db.create(cat2);
    const all = db.find();
    expect(all).toEqual([createdCat1, createdCat2]);
  });

  it('can find an item by Id and update', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const updatedCat = db.findByIdAndUpdate(createdCat._id, { name: 'blahblah' });
    expect(updatedCat.name).toEqual('blahblah');
  });
  it('no foundObj throws error', () => {
    expect(() => {
      db.findByIdAndUpdate('blahblah');
    }).toThrow(/^No object found for: blahblah$/);
  });

  it('finds by id and deletes it', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const deletedCatMsg = db.findByIdAndDelete(createdCat._id);
    console.log(deletedCatMsg);
    expect(deletedCatMsg).toEqual({ deleted: 1 });
  });
  it('throws an error if no object exists for the id', () => {
    expect(() => {
      db.findByIdAndUpdate('blahblah');
    }).toThrow(/^No object found for: blahblah$/);
  });

  // it('drops the whole database', () => {
  //   const dropped = db.drop();
  //   expect(dropped).toEqual({});
  // });

});
