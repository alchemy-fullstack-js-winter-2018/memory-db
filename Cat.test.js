const Cat  = require('./catClass');

describe('cat test', () => {
  it('can speak', () => {
    const fluffy = new Cat('Fluffy');
    expect(fluffy.speak()).toEqual('Meow, I am Fluffy');
  });
  it('has a typeOfSpecies static method', () => {
    expect(Cat.typeOfSpecies()).toEqual('cat');
  });
  it('has a description static method', () => {
    expect(Cat.description()).toEqual('All cats have legs');
  });
});

