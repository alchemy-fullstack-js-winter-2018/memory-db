const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
    let db = null;
    beforeEach(() => { 
        db = new MemoryDatabase;
    })
});

//store = {{ name: 'fluffy' }}

it('creates an object in the database', () => {
    const cat = { name: 'fluffy'};
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
});

    it('can find an object by Id', () => {
        const cat = { name: 'fluffy' };
        const createCat = db.create(cat);
        // -> {name:'fluffy', _id:1234}
        //createdCat._id = 1234

        const storedCat = db.findById(createCat._id);
        expect(storedCat).toEqual(createdCat);
    });

    

});