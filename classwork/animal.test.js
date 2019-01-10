const { Animal, 
  factoryAnimal, 
  AnimalClass } = require('./animals');

describe('animal creators', () => {
  describe('animal constructor', () => {
    it('has a speak method', () => {
      const animal = new Animal('banana', 'monkey');
      expect(animal.speak()).toEqual('Hello my name is banana and I am a monkey');
    });
  });
  describe('animal factory', () => {
    it('has a speak method', () => {
      const animal = factoryAnimal('yoyo', 'gorilla');
      expect(animal.speak()).toEqual('Hello my name is yoyo and I am a gorilla');
    });
  });
  describe('animal class', () => {
    it('has a speak method', () => {
      const animal = new AnimalClass('bozo', 'cat');
      expect(animal.speak()).toEqual('Hello my name is bozo and I am a cat');
    });
    it('description throws an error', () => {
      try {
        expect(AnimalClass.description()).toThrowError();
      } catch(e) {
        expect(e).toEqual('You are required to implement the description method');
      }
    });
  });
  it('implements all three creators the same', () => {
    const animalConstructor = new Animal('fluffy', 'cat');
    const animalFactory = factoryAnimal('fluffy', 'cat');
    const animalClass = new AnimalClass('fluffy', 'cat');

    expect(animalConstructor.speak()).toEqual(animalFactory.speak());
    expect(animalFactory.speak()).toEqual(animalClass.speak());
  });
});
