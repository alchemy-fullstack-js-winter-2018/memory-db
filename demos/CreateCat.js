const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'fluffskers');
  }

  static typeOfSpecies() {
    return 'catt';
  }

  static description() {
    return 'All cats have legs';
  }

  // overrides AnimalClass speak method
  speak() {
    return `Meow, I am fluffy ${this.name}`;
  }
}

module.exports = Cat;
