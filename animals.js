// constructor function
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

Animal.prototype.speak = function() {
  return `Hello my name is ${this.name} and I am a ${this.species}`;
};

//factory function 
const factoryAnimal = (name, species) => ({
  name,
  species,
  speak() {
    return `Hello my name is ${this.name} and I am a ${this.species}`;
  }
});

//class 
class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `Hello my name is ${this.name} and I am a ${this.species}`;
  }
}

module.exports = {
  Animal,
  factoryAnimal,
  AnimalClass
};
