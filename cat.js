const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }
}

module.exports = Cat;