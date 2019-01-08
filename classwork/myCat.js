const cat = {
  name: 'Fluffy',
  speak() { 
    console.log(`Meow, my name is ${this.name}`);  
  }
};

cat.speak();

function catGenerator() {
  return Object.create(cat);
}

const whiskers = catGenerator();
whiskers.name = 'Whiskers';
whiskers.speak();

//factory function 
const copyCat = name => ({
  name,
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
});

const pepper = copyCat('Pepper');
pepper.speak();

//constructor function
function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function() {
  console.log(`Meow, my name is ${this.name}`);
};

const bingo = new Cat('bingo');
bingo.speak();

//classes 
class CatClass {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }
}

const myCatFelix = new CatClass('felix');
myCatFelix.speak();
