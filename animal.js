// factory function

const createAnimal = function(name, species) {
  return {
    name: name,
    species: species,
    speak() {
      console.log(`I'm ${this.name}, a ${this.species}`);
    }
  };
};

const armadillo = createAnimal('Armie', 'Armadillo');
const zebra = createAnimal('Zee', 'Zebra');

armadillo.speak();
zebra.speak();

// constructor fn note CapitalizationofFunctionName

const createAnimalConstructorStyle = function(name, species) {
  this.name = name;
  this.species = species;
};

createAnimalConstructorStyle.prototype.makeIt = function() {
  return `Hi, I'm ${this.name}, a ${this.species}!`;
};

//class (which is functionish)
class animalByClass {
  constructor(name, species) {
    this.name = name,
    this.species = species
  }
  speak() {
    return `Hi, I am ${this.name}, the ${this.species}`;
  }
}


module.exports = {
  createAnimal,
  createAnimalConstructorStyle,
  animalByClass
};
