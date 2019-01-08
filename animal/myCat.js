// CLASSES
class CatClass {
  constructor(name) {
    this.name = name;
}
  speak() {
    console.log('meow, my name is ${this.name}');
  }
};
const myCatFelix = newCatClass('felix');


// FACTORY FUNCTION
const createCat = name => ({
  name,
  speak() {
    console.log('Meow, my name is ${this.name}');
  }
});

const fluffy = createCat('fluffy');
const whiskers = createCat('whiskers');

fluffy.speak();
whiskers.speak();


// CONSTRUCTOR FUNCTION
function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function() {
  console.log('meow my name is ${this.name}');
};


