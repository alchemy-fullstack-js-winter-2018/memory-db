const { AnimalClass } = require('./animal');

class Dog extends AnimalClass {
  constructor(name) {
    super(name, 'dog');
  }

  static description() {
    return 'Boundless energy';
  }

}

module.exports = Dog;
