//Creating multiple cats using the same factory function

const createCat = name => ({
  name,
  speak() {
    console.log(`Meow, my name is ${this.name}`);

  }
});

const fluffy = createCat('fluffy');
const whiskers = createCat('whiskers');

fluffy.speak();
whiskers.speak();

//Creating multiple cats using the same constructor function

function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function() {
  console.log(`Meow, my name is ${this.name}`);
};

const bingo = new Cat('bingo');
bingo.speak();


//Creating multiple cats using the same class function

class CatClass {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Meow, my name is ${this.name}`);

  }
}

const myCat = new CatClass('felix');
myCat.speak();
