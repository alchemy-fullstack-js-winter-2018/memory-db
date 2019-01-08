const MemoryDatabase = require('../lib/index.js');


describe('test memory database', () => {

    let db = null;

    beforeEach(() => {
        db = new MemoryDatabase();
        // before each tests
        // clear db
        // any setup needed
    });
    beforeAll(() => {
        // before all tests
        // start db
        // get cred
    });
    afterEach(() => {
        // after each  test runs
        // clear up between tests
        // closing db connections
    });
    afterAll(() => {
        // after the last test runs
        // total clean up
        // deleting files created during test
        // shutdown db
    });
    it('creates object to save', () => {
        const cat = { name : 'cat1'};
        const CreateCat = db.create(cat);
        expect(CreateCat.name).toEqual('cat1');
    });

    it('can find an object by id', () => {
        const cat  = { name: 'cat2' };
        const createdCat = db.create(cat);
        const storedCat = db.findById(createdCat._id);
        expect(storedCat).toEqual(createdCat);
    });


    it('can return all the objects in the db', () => {
        const cat  = { name: 'cat3' };
        const cat2 = { name: 'cat2' };

        const createdCat = db.create(cat);
        const createdCat2 = db.create(cat2);

        const fulldb = db.all();
        expect(fulldb).toEqual([createdCat, createdCat2]);
    });

    it('can update an item in the db', () => {
        const cat  = { name: 'cat3' };
        const newCat = { name: 'new cat'};
        const createdCat = db.create(cat);

        let updatedItem = db.findByIdAndUpdate(createdCat._id, newCat);

        updatedItem.name = newCat.name;

        expect(updatedItem).toEqual(newCat);


    })


});