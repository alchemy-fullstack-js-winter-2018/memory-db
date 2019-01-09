const {
    Cat
} = require('./catExtends');

describe('cat', () => {
    it('have a speak method', () => {
        const fluffy = new Cat('fluffy');
        expect(fluffy.speak()).toEqual("I'm fluffy and I'm a cat");
    });
});

describe('description', () => {
    it('has a description static method', () => {
        expect(Cat.description()).toEqual('All cat\'s have legs')
    });
});



