const Dog = require('./dog');


describe('Dog class', () => {
  it('returns a string of a dogs species and name', () => {
    const results = new Dog('Beatrice');
    expect(results.sayHi()).toEqual('Hello, I am a dog and my name is Beatrice');
  });
  it('has description static method', () => {
    expect(Dog.description()).toEqual('Boundless energy');
  });
});
