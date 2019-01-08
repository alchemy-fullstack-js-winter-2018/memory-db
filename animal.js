// Factory Function
const animals = (name, species) => ({
  name, 
  species, 
  speak() {
    return `Hello, my name is ${this.name} and I am a ${this.species}`;
  }
});

// const tiger = animals('Tiger', 'Feline');
// const whale = animals('Whale', 'Mammal'); 

// tiger.speak();
// whale.speak();

function animalFunction(name, species) {
  this.name = name;
  this.species = species;
}
animalFunction.prototype.speak = function() {
  return `Hello, my name is ${this.name} and I am a ${this.species}`;
};

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  static description() {
    throw 'there is no description'; 
  }
  speak() {
    return `Hello, my name is ${this.name} and I am a ${this.species}`;
  }
}

module.exports = {
  animalFunction,
  animals,
  AnimalClass
}; 
