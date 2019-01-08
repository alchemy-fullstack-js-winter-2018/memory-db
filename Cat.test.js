const Cat = require('./Cat');

describe('Cat tests', () => {
  it('returns hi my name is X the cat', () => {
    const cat = new Cat('Fluffy');
    expect(cat.speak()).toEqual('Hi, I\'m Fluffy, the cat');
  });
});
