const { AnimalClass, AnimalFactory, AnimalConstructor } = require('./animal');

describe('implementation', () => {
  describe('AnimalClass', () => {
    it('returns a string of animals species and name', () => {
      const results = new AnimalClass('Beatrice', 'Snake').sayHi();
      expect(results).toEqual('Hello, I am a Snake and my name is Beatrice');
    });
  });
  describe('AnimalFactory', () => {
    it('returns a string of animals species and name', () => {
      const results = new AnimalFactory('Billy', 'Buffalo').sayHi();
      expect(results).toEqual('Hello, I am a Buffalo and my name is Billy');
    });
  });
  describe('AnimalConstructor', () => {
    it('returns a string of animals species and name', () => {
      const results = new AnimalConstructor('Buff', 'Lamb').sayHi();
      expect(results).toEqual('Hello, I am a Lamb and my name is Buff');
    });
  });

});


