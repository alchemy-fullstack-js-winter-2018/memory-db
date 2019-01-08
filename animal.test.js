// const function test

const { createAnimal, createAnimalConstructorStyle, animalByClass } = require('./animal');
describe('animal creator functions', () => {
  describe('createAnimal', () => {
    it('speaks', () => {
      const factory = new createAnimal('some', 'animal');
      expect(factory.speak()).toEqual();
    });
  });
  describe('createAnimalConstructorStyle', () => {
    it('speaks', () => {
      const constructor = new createAnimalConstructorStyle('someC', 'animalC');
      expect(constructor.speak()).toEqual();
    });
  });
  describe('animalByClass', () => {
    it('speaks', () => {
      const aniClass = new animalByClass('someP', 'animalP');
      expect(aniClass.speak()).toEqual();
    });
  });

});
