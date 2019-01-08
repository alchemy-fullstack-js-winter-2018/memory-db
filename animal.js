//factory function
const AnimalFactory = (name, species) => {
  return {
    name,
    species,
    speak() {
      return `Hello, I am a ${this.name}. My species is a ${this.species}.`;
    }
  };
};

//constructor method
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `Hello, I am a ${this.name}. My species is a ${this.species}.`;
};

//class method
class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `Hello, I am a ${this.name}. My species is a ${this.species}.`;
  }
}

module.exports = {
  AnimalFactory,
  AnimalConstructor,
  AnimalClass
};
