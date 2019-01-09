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
    it('throws an error if invalid ID', ()=> {
        expect(() => {
            db.findById('notAReadId');
        }).toThrowError('No Item Id');
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
        const newCat = { name: 'new cat2' };
        const createdCat = db.create(cat);
        const newCreatedCat = db.create(newCat);

        console.log('before update function runs',db);

        let updatedItem = db.findByIdAndUpdate(createdCat._id, newCreatedCat);

        console.log('after update function runs', db);

        updatedItem.name = newCat.name;

        expect(updatedItem).toEqual(newCreatedCat);
    });

    it('throws an error if invalid ID when updating', ()=> {
        expect(() => {
            db.findById('notAReadId');
        }).toThrowError();
    });

    it('can delete an item by id', () => {
        const cat  = { name: 'cat3' };
        const createdCat = db.create(cat);

        console.log('before delete function runs', db);

        const deletedItem = db.findByIdAndDelete(createdCat._id);

        console.log('after delete functions run', db);

        expect(deletedItem).toEqual({ deleted: 1 });

    });

    it('throws an error if invalid ID', ()=> {
        expect(() => {
            db.findById('notAReadId');
        }).toThrowError();
    });

    it('can delete everything from the DB', () => {
        const cat  = { name: 'cat3' };
        db.create(cat);

        console.log('before delete all function runs', db);
        db.drop();
        console.log('after delete all function runs', db);

        expect(db.store).toEqual({});
    });

});
