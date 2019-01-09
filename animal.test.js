const {
    AnimalClass,
    AnimalConstructor,
    AnimalFactory
} = require('./animal');

describe('animals', () => {
    describe('AnimalClass', () => {
        it(`have a speak method`, () => {
        const tiger = new AnimalClass("stripes", "tiger");
        expect(tiger.speak()).toEqual("I'm stripes and I'm a tiger");
        });
        //tests that an error is thrown
        it('description throws an error', () => {
            //an error needs to be inside a 'try' so that the server doesn't crash - it will 'catch' and return a log
            try {
                expect(AnimalClass.description().toThrowError());
            } catch(e) {
                expect(e).toEqual('you are required to implement the description method')
            }
        });
    });
    describe('AnimalConstructor', () => {
        it('have a speak method', () => {
            //make a new object and test that the speak method works on that object
            const animal = new AnimalConstructor('fluffy', 'cat');
            expect(animal.speak()).toEqual("I'm fluffy and I'm a cat");
        })
    })
    describe('AnimalFactory', () => {
        it('have a speak method', () => {
            //no 'new' keyword needed for factory functions
            const animal = AnimalFactory('blubber', 'whale');
            expect(animal.speak()).toEqual("I'm blubber and I'm a whale");
        })
    })
    //test that all of the functions return the same results aka are equal to each other
    it('implements all three creators the same', () => {
         const animalConstructor = new AnimalConstructor('fluffy', 'cat');
         const animalFactory = AnimalFactory('fluffy', 'cat');
         const animalClass = new AnimalClass('fluffy', 'cat');
    
        expect(animalConstructor.speak()).toEqual(animalFactory.speak());
        expect(animalFactory.speak()).toEqual(animalClass.speak());
    })
});