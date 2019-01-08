const  { animals } = require('./animal'); 
const { animalFunction } = require('./animal');
const { AnimalClass } = require('./animal'); 

describe('animal creators', () => {
  describe('animals', () => {
    it('animal should say who they are and their species', () => {
      const animalsResult = animals('Tiger', 'Feline');
      expect(animalsResult.speak()).toEqual('Hello, my name is Tiger and I am a Feline');
    });
  });
  describe('animal function', () => {
    it('animal should say who they are and their species', () => {
      const animalResult = new animalFunction('Tiger', 'Feline'); 
      expect(animalResult.speak()).toEqual('Hello, my name is Tiger and I am a Feline');
    });
  });
  describe('AnimalClass', () => {
    it('has a speak method', () => {
      const animal = new AnimalClass('Tiger', 'Feline');
      expect(animal.speak()).toEqual('Hello, my name is Tiger and I am a Feline');
    });
  });
  it('throws an error', () => {
    try {
      expect(AnimalClass.description()).toThrowError();
    } catch(error) {
      expect(error).toEqual('there is no description');
    }
  });
});
