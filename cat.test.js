// Ryan has this in animal.test

const { Cat } = require('./cat');

describe('cat stuff', () => {
  it('speaks', () => {
    const fluffy = new Cat('Fluffy');
    expect(fluffy.speak().toEqual('Meow, I am ${WHATEVER. Sticking by that}'))
  });
});






