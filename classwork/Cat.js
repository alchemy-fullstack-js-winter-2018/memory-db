const { AnimalClass } = require('./animals');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }

  //static method
  static typeOfSpecies() {
    return 'cat';
  }

  //static method
  static description() {
    return 'cats are not dogs';
  }

  //overriding a method
  speak() {
    return `Meow, I am ${this.name}`;
  }
}

module.exports = { Cat };
