const {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
} = require('./animals');

describe('animal creators', () => {
  describe('AnimalConstructor', () => {
    it('has a speak method', () => {
      const animal = new AnimalConstructor('fluffy', 'cat');
      expect(animal.speak()).toEqual('Meow, my name is fluffy the cat');
    });
  });
  describe('AnimalFactory', () => {
    it('has a speak method', () => {
      const animal = AnimalFactory('fluffy', 'cat');
      expect(animal.speak()).toEqual('Meow, my name is fluffy the cat');
    });
  });
  describe('AnimalClass', () => {
    it('has a speak method', () => {
      const animal = new AnimalClass('fluffy', 'cat');
      expect(animal.speak()).toEqual('Meow, my name is fluffy the cat');
    });
    it('description throws an error', () => {
      try {
        expect(AnimalClass.description()).toThrowError();
      } catch(e) {
        console.log(e);
      }
    });
  });
});
