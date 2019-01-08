const { AnimalConstructor } = require('./animal');
const { AnimalFactory } = require('./animal');
const { AnimalClass } = require('./animal');


describe('animal constructor functions', () => {
  describe('animal constructor', () => {
    it('returns a string saying hello and the animals name and the species', () => {
      const connorCat = new AnimalConstructor('Connor', 'cat');
      expect(connorCat.speak()).toEqual('Hi, I\'m Connor, the cat');
    });
  });
  describe('animal factory', () => {
    it('returns a string saying hello, the animals name, and the species', () => {
      const lanceTurtle = AnimalFactory('Lance', 'turtle');
      expect(lanceTurtle.speak()).toEqual('Hi, I\'m Lance, the turtle');
    });
  });
  describe('animal class', () => {
    it('returns a string saying hello, the name, and species', () => {
      const drewDeer = new AnimalClass('Drew', 'deer');
      expect(drewDeer.speak()).toEqual('Hi, I\'m Drew, the deer');
    });
  });
}); 
