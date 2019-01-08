const { AnimalConstructor } = require('./animal');
describe('animal creator', () => {
  describe('animalConstructor', () => {
    it('returns a string', () => {
      const animal = new AnimalConstructor('Fluffy', 'lion');
      const sound = animal.speak();
      expect(sound).toEqual('Hi I am Fluffy and I am a lion');
    });
  });
});

