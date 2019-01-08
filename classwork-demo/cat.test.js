const Cat = require('./Cat');
describe('Cat', () => {
  it('can speak', () => {
    const cat = new Cat('cat');
    expect(cat.speak()).toEqual('Hello, I am a cat. My species is a mammal.');
  });

  //since it's static, you can run on the Cat class itself, not a particular instance
  it('has a description static method', () => {
    expect(Cat.description()).toEqual('Cats are floofy little beasties.');
  });
});
