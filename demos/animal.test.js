const { 
  AnimalConstructor, 
  AnimalFactory,
  AnimalClass
} = require('./animal');

describe('animal creators', () => {

  describe('AnimalConstructor', () => {
    it('can speak and provide name and species', () => {
      const animal1 = new AnimalConstructor('Eddie', 'dog');
      const animal2 = new AnimalConstructor('BooBoo', 'cat');
      expect(animal1.speak()).toEqual('Myello, my name is Eddie and I am a dog.');
      expect(animal2.speak()).toEqual('Myello, my name is BooBoo and I am a cat.');
    });
  });

  describe('AnimalFactory', () => {
    it('can speak and provide name and species', () => {
      const animal = AnimalFactory('Uncle Bob', 'walrus');
      expect(animal.speak()).toEqual('Myello, my name is Uncle Bob and I am a walrus.');
    });
  });

  describe('AnimalClass', () => {
    it('can speak and provide name and species', () => {
      const animal = new AnimalClass('Shaq', 'cat');
      expect(animal.speak()).toEqual('Myello, my name is Shaq and I am a cat.');
    });
    it('description throws error', () => {
      try {
        expect(AnimalClass.description()).toThrow();
      } catch(err) {
        expect(err).toEqual('You are required to implement the description method');
      }
    });
  });

  describe('implements all 3 creators the same', () => {
    const animalConstructor = new AnimalConstructor('Eddie', 'dog');
    const animalFactory = AnimalFactory('Eddie', 'dog');
    const animalClass = new AnimalClass('Eddie', 'dog');
    expect(animalConstructor.speak()).toEqual(animalFactory.speak());
    expect(animalFactory.speak()).toEqual(animalClass.speak());
  });

});
