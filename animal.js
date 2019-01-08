
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}
AnimalConstructor.prototype.speak = function() {
  return `Myello, my name is ${this.name} and I am a ${this.species}.`;
};
// const animal1 = new AnimalConstructor('Eddie', 'dog');
// console.log(animal1.speak());

const AnimalFactory = (name, species) => ({
  name,
  species,
  speak() {
    return `Myello, my name is ${this.name} and I am a ${this.species}.`;
  }
});
// const animal2 = AnimalFactory('Uncle Bob', 'walrus');
// console.log(animal2.speak());

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `Myello, my name is ${this.name} and I am a ${this.species}.`;
  }
}
// const animal3 = new AnimalClass('Shaq', 'cat');
// console.log(animal3.speak());

module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};
