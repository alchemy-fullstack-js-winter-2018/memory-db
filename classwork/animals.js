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

  static description() {
    throw 'You are required to implement the description method';
  }

  speak() {
    return `Hello my name is ${this.name} and I am a ${this.species}`;
  }
}

// class Dog extends AnimalClass {
//   constructor(name) {
//     super(name, 'dog'); 
//   }
// }

module.exports = {
  Animal,
  factoryAnimal,
  AnimalClass
};
