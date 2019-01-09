const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
    let db = null;
    beforeEach(() => { 
        db = new MemoryDatabase();
});

//store = {{ name: 'fluffy' }}

    it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
    });

    it('can find an object by Id', () => {
        const cat = { name: 'fluffy' };
        const createdCat = db.create(cat);


        const foundCat = db.findById(createdCat._id);
        expect(foundCat).toEqual(createdCat);
     });

     it('throws an error when trying to find an object that does not exist', () =>{
        expect(() => {
            db.findById('notARealId');
        }).toThrowError();
    });

    it('will return a list of all objects', () => {
        //const cat = { name: 'snowball'};
        const cat = [{ 
            name: 'snowball',
            name: 'pinky' 
        }];
        const createdCat = db.create(cat);
        //console.log(createdCat);
        const cats = db.find();
        expect(cats).toEqual([createdCat]);
    });

    it('will update and find id', () => {
            
        const cat = { name: 'fluffy'};
        const createdCat = db.create(cat);
        const newCat = { name: 'snowball'};
        const updatedCat = db.findByIdAndUpdate(createdCat._id, newCat);
        
        expect(updatedCat.name).toEqual(newCat.name);
    });

    // it('will find id and delete', () => {
    //     expect(() => {
    //         const cat = { name: 'fluffy'};
    //         const createdCat = db.create(cat);
    //         const 
    //     })
    // })
});