const Cat = require('./CreateCat');

describe('CreateCat', () => {
  describe('Cat', () => {
    it('can speak and provide name and species', () => {
      const animal = new Cat('Shaqqqq');
      expect(animal.speak()).toEqual('Meow, I am fluffy Shaqqqq');
    });

    it('has a typeOfSpecies static method', () => {
      expect(Cat.typeOfSpecies()).toEqual('catt');
    });

    it('has a description static method', () => {
      expect(Cat.description()).toEqual('All cats have legs');
    });
  });
});
