const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.speak = function() {
  return (`Hi, I'm ${this.name}, the ${this.species}`);
};

const AnimalFactory = function(name, species) {
  return {
    name,
    species,
    speak() {
      return (`Hi, I'm ${this.name}, the ${this.species}`);
    }
  };
};

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return (`Hi, I'm ${this.name}, the ${this.species}`);
  }
}

module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};
