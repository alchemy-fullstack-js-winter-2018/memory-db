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

const whale = AnimalFactory('whale', 'mammal');
console.log(whale);
console.log(whale.speak());

//constructor method
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `Hello, I am a ${this.name}. My species is a ${this.species}.`;
};

const cheetah = new AnimalConstructor('Cheetah', 'mammal');
console.log(cheetah);
console.log(cheetah.speak());

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

const lizard = new AnimalClass('lizard', 'reptile');
console.log(lizard.speak());
console.log(lizard);

module.exports = {
  AnimalFactory,
  AnimalConstructor,
  AnimalClass
};
