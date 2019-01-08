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
      const animal2 = AnimalFactory('Uncle Bob', 'walrus');
      expect(animal2.speak()).toEqual('Myello, my name is Uncle Bob and I am a walrus.');
    });
  });

  describe('AnimalClass', () => {
    it('can speak and provide name and species', () => {
      const animal3 = new AnimalClass('Shaq', 'cat');
      expect(animal3.speak()).toEqual('Myello, my name is Shaq and I am a cat.');
    });
  });

});
