const Cat = require('./Catclass'); 
const AnimalClass = require('./Catclass'); 

describe('Cat', () => {
  it('can speak', () => {
    const whiskers = new Cat('whiskers');
    expect(whiskers.speak()).toEqual('Hello, my name is whiskers and I am a cat');
  });
  it('will say the static age of the class', () => {
    expect(Cat.typeOfAge()).toEqual(12); 
  });
  // describe('Throw error test', () => {
  //   expect(AnimalClass.description()).toEqual('all cats are fluffy');
  // });
}); 
