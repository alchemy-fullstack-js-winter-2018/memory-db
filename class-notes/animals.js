function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `Meow, my name is ${this.name} the ${this.species}`;
};

const niko = new AnimalConstructor('Niko', 'dog');
const heidi = new AnimalConstructor('Heidi', 'dog');
niko.speak();
heidi.speak();

////////////////////////////////////////////

const AnimalFactory = (name, species) => ({
  name,
  species,
  speak() {
    return `Meow, my name is ${this.name} the ${this.species}`;

  }
});

const cleo = AnimalFactory('Cleo', 'cat');
const willy = AnimalFactory('Willy', 'dog');

cleo.speak();
willy.speak();

///////////////////////////////////////////////

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  static description() {
    throw 'You are required to implement the description method';
  }

  speak() {
    return `Meow, my name is ${this.name} the ${this.species}`;

  }
}

const myCat = new AnimalClass('Felix', 'cat');
const myBird = new AnimalClass('Chirpy', 'bird');
myCat.speak();
myBird.speak();

module.exports = {
  AnimalClass,
  AnimalFactory,
  AnimalConstructor
};
