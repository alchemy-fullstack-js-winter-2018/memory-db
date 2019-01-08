const cat = {
  name: 'Ollie',
  speak() { 
    console.log(`Meow, My name is ${this.name}`);
  }
};
//factory function
const createCat = name => ({
  name,
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
});

const fluffy = createCat('Fluffy');
const whiskers = createCat('Whiskers');

whiskers.speak();
fluffy.speak();

//constructor function
function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function() {
  console.log(`Meow, my name is ${this.name}`);
};
const bingo = new Cat('Bingo');

bingo.speak();

class CatClass {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
}
const myCatFelix = new CatClass('Felix');


