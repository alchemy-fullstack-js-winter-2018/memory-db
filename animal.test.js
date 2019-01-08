const { 
  AnimalConstructor,
  AnimalFactory,
  AnimalClass

} = require('./animal');

describe('animal creator', () => {
  describe('animalConstructor', () => {
    it('returns a string', () => {
      const animal = new AnimalConstructor('Fluffy', 'lion');
      const sound = animal.speak();
      expect(sound).toEqual('Hi I am Fluffy and I am a lion');
    });
  });

  describe('animalFactory', () => {
    it('have a speak method', () => {
      const animal = AnimalFactory('Fluffy', 'lion');
      expect(animal.speak()).toEqual('Hi I am Fluffy and I am a lion');
    });
  });

  describe('AnimalClass', () => {
    it('has speak method', () => {
      const animal = new AnimalClass('Fluffy', 'lion');
      expect(animal.speak()).toEqual('Hi I am Fluffy and I am a lion');
    });
  });

  it('implements all three creators the same', () => {
    const animalConstructor = new AnimalConstructor('Fluffy', 'lion');
    const animalFactory = AnimalFactory('Fluffy', 'lion');
    const animalClass = new AnimalClass('Fluffy', 'lion');

    expect(animalConstructor.speak()).toEqual(animalFactory.speak());
    expect(animalFactory.speak()).toEqual(animalClass.speak());
  });
});

