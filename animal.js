function AnimalConstructor(name, species){
  this.name = name;
  this.species = species;
}
AnimalConstructor.prototype.speak = function() {
  return `Hi I am ${this.name} and I am a ${this.species}`;
};

module.exports = {
  AnimalConstructor
};
