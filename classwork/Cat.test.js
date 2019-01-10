const { Cat } = require('./Cat');

describe('extends method', () => {
  describe('cat class', () => {
    it('has a speak method', () => {
      const cat = new Cat('meow');
      expect(cat.speak()).toEqual('Meow, I am meow');
    });
    it('has a typeOfSpecies static method', () => {
      expect(Cat.typeOfSpecies()).toEqual('cat');
    });
    it('has a description static method', () => {
      expect(Cat.description()).toEqual('cats are not dogs');
    });
  });
});
