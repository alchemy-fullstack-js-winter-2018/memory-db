const { AnimalFactory, AnimalClass, AnimalConstructor } = require('./animal');

describe('animal creators', () => {
  describe('AnimalFactory', () => {
    it('creates a new animal object with a speak method', () => {
      const whale = AnimalFactory('whale', 'mammal');
      expect(whale.speak()).toEqual('Hello, I am a whale. My species is a mammal.');
    });
  });

  describe('AnimalClass', () => {
    it('creates a new animal object with a speak method', () => {
      const lizard = new AnimalClass('lizard', 'reptile');
      expect(lizard.speak()).toEqual('Hello, I am a lizard. My species is a reptile.');
    });

    it('throws an error for description', () => {
      //jest breaks with throwing errors, so use try/catch blocks
      try {
        expect(AnimalClass.description()).toThrowError();
      } 
      catch(error) {
        expect(error).toEqual('error no description given');
      }
    });
  });

  describe('constructor function', () => {
    it('creates a new animal object with a speak method', () => {
      const cheetah = new AnimalConstructor('cheetah', 'mammal');
      expect(cheetah.speak()).toEqual('Hello, I am a cheetah. My species is a mammal.');
    });
  });

  it('implements all three creators the same', () => {
    const animalConstructor = new AnimalConstructor('cat', 'mammal');
    const animalFactory = AnimalFactory('cat', 'mammal');
    const animalClass = new AnimalClass('cat', 'mammal');

    expect(animalConstructor.speak()).toEqual(animalFactory.speak());
    expect(animalFactory.speak()).toEqual(animalClass.speak());
  });
});


