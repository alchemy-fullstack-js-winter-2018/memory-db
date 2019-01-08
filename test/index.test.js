const { MemoryDatabase } = require('./index');   // #1
describe('memory db', () => {   //goning to create new db before each test
    beforeEach(() => {
        //rin b4 each test
    });
    beforeAll(() => {
        db = new MemoryDatabase();
        //run once b4 the first test runs set up environment eg start the db of give drecedntials
    });
    //store = { { name: 'fluffy} }}
    it('creates an obj in db', () => {
        const cat = { name: 'fluffy' };
        const cresatedCat = db.create(cat);
        expect(createdAat.name).toEqual('fluffy');
    });

    it('can find an obj by id in the db', () => {
        const cat = { name: 'fluffy' };
        const createdCat = db.create(cat);

        const storedCat = db.findBYId(createdCat._id); // ditto foundCat
        expect(foundCat).toEqual(createdCat);
    });


    afterEach(() => {   
            // runs after each test, closing db connections
    });
    afterAll(() => {
        //once after last test runs
        //deleting files that were created in testing
        // shut down db
    });
    it('test 1', () => {
    it('test 2', () => { 

    });
});