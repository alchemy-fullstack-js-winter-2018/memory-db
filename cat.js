const cat = {
  name: 'Sir Cattington',
  speak() {
    console.log(`Meow, my name is ${this.name}`);
  }

};

cat.speak();

const Cat = function(name) {
  this.name = name;
};

Cat.prototype.speak = function() {
  console.log(`Meow, I'm ${this.name}`);
};


const fluffy = new Cat('fluffy');

fluffy.speak();


class Cats {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Meow, I'm ${this.name}`);
  }
}

const tabby = new Cats('tabby');

tabby.sayHi();

const Kitty = function(name) {
  return {
    name,
    sayHi() {
      console.log(`Meow, I'm ${this.name}`);
    }
  };
};

const fluffers = Kitty('fluffers');

fluffers.sayHi();
