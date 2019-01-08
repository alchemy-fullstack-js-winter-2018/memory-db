const { AnimalFactory, AnimalClass, AnimalConstructor } = require('./animal');

describe('factory function', () => {
  it('creates a new animal object', () => {
    const whale = AnimalFactory('whale', 'mammal').speak();
    expect(whale).toEqual('Hello, I am a whale. My species is a mammal.');
  });
});

describe('class', () => {
  it('creates a new animal object', () => {
    const lizard = new AnimalClass('lizard', 'reptile').speak();
    expect(lizard).toEqual('Hello, I am a lizard. My species is a reptile.');
  });
});

describe('constructor function', () => {
  it('creates a new animal object', () => {
    const cheetah = new AnimalConstructor('cheetah', 'mammal').speak();
    expect(cheetah).toEqual('Hello, I am a cheetah. My species is a mammal.');
  });
});


