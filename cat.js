const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }
  static description() {
    return 'fluffy and will destroy your allergies';
  }
}

module.exports = Cat;
