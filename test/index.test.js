const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    //run before each test (it)
    //* clear database
    db = new MemoryDatabase();
  });
  beforeAll(() => {

  });

  afterEach(()=> {
    //runs after each test
    //*clean up between test
    //*closing db connections
  });

  afterAll(() => {
    // one after the last test runs
    //* deleting files that were created during testing
    //* shutdown db
  });

  //store
  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    // -> { name: 'fluffy, _id:1234 }
    //createdCat._id === 1234
    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error when trying to find an object', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });

  it('return a list of objects', () => {
    const cat = [
      { name: 'coco' },
      { name: 'felix' },
    ];
    const createdCat = db.create(cat);
    const cats = db.find();
    expect(cats).toEqual([createdCat]);
  });

  it('creates a copy and update list', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    const newCat = { name: 'snowball' };
    const updatedCat = db.findByIdAndUpdate(createdCat._id, newCat);
    expect(updatedCat.name).toEqual(newCat.name);
  });
  it('throws an error when trying to find an object', () => {
    expect(() => {
      db.findByIdAndUpdate('notARealId');
    }).toThrowError('No object with _id notARealId');
  });
  //find and delete
  //   it('find an object by id and delete', () => {
  //     const cat = { name: 'fluffy' };
  //     const createdCat = db.create(cat);
  //     const foundCat = db.findById(createdCat._id);
  //     const deletedCat = db.findByIdAndUpdate(createdCat._id);
  //     expect(deletedCat).toEqual(createdCat);
  //   });

  //drop
  //   const cat = [
  //     { name: 'coco' },
  //     { name: 'felix' },
  //   ];
  //   const createdCat = db.create(cat);
  //   const cats = db.find();
  //   expect(cats).toEqual([createdCat]);
  // });

});

