const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    //super means Dog inherits properties from AnimalClass
    super(name, 'mammal');
  }

  static description() {
    return 'Cats are floofy little beasties.';
  }
}


module.exports = Cat;

