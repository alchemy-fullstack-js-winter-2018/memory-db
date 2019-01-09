const {
    MemoryDatabase
} = require('../lib/index');

describe('memory database', () => {
    let db = null;
    beforeEach(() => {
        db = new MemoryDatabase();
        //run before each test (it)
        //clear database
        //setup required for each test
    });

    beforeAll(() => {
        //once before the first test runs
        //starting our database
        //getting credentials
    });

    afterEach(() => {
        //runs after each test (it)
        //clean up between tests
        //closing databse connections
    });

    afterAll(() => {
        //one after the last test runs
        //total clean up 
        //shut down database
        //deleting files that were created during testing
    });

    it('creates an object in the database', () => {
        const cat = {name: 'fluffy'};
        const createdCat = db.create(cat);
        expect(createdCat.name).toEqual('fluffy');
    });

    describe('findById', () => {
        it('can find an object by id', () => {
            const cat = {name: 'fluffy'};
            const createdCat = db.create(cat);

            const foundCat = db.findById(createdCat._id);
            expect(foundCat).toEqual(createdCat);
        });

        it('throw an error when object not found', () => {
            expect(() => {
                db.findById('111');
            }).toThrowError();
        });
    });

    describe('find', () => {
        it('will find and list all objects in store', () => {
            const cat = db.create({name: 'fluffy'});
            const dog = db.create({name: "fido"});
            const allCats = db.find();
            expect(allCats).toEqual([cat, dog]);
        });
    });

    describe('find By Id And Update', () => {
        it('will update an exisitng object with new info', () => {
            const cat = db.create({name: 'sassy'});
            const id = cat._id;
            const results = db.findByIdAndUpdate(id, { name: "skinny" });
            expect(results.name).toEqual("skinny")
        })
    })

    describe('find by id and delete', () => {
        it('will find an object with the id and delete it', () => {
            const cat = db.create({name: 'sassy'});
            const catId = cat._id;
            const results = db.findByIdAndDelete(catId);
            expect(results).toEqual('sassy is deleted');
        })

        it('throw an error when object not found', () => {
            expect(() => {
                db.findById('111');
            }).toThrowError();
        });
    });
    
    describe('delete all keys in this.store', () => {
        it('will delete all the keys in this.store and return empty object', () => {
            const results = db.drop();
            expect(results).toEqual({});
        })
    })
});

