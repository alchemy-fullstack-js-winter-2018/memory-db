class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  sayHi() {
    return `Hello, I am a ${this.species} and my name is ${this.name}`;
  }
}
  
const tabby = new AnimalClass('tabby', 'cat');

tabby.sayHi();


const AnimalFactory = function(name, species) {
  return {
    name,
    species,
    sayHi() {
      return `Hello, I am a ${this.species} and my name is ${this.name}`;
    }
  };
};

const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.sayHi = function() {
  return `Hello, I am a ${this.species} and my name is ${this.name}`;
};

module.exports = {
  AnimalClass,
  AnimalFactory,
  AnimalConstructor

};

