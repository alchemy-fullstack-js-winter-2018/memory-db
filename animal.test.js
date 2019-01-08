const  { animals } = require('./animal'); 
const { animalFunction } = require('./animal');
// const { animalConstructor } require('./animal'); 

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
});
