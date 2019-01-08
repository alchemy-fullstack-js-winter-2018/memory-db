const { animalByClass } = require('./animal');

class Cat extends animalByClass {
  constructor(name) {
    super(name, 'cat');
  }

  static typeOfSpecies() {
    return 'cat';
  }

  static description() {
      return 
  }

}
module.exports = Cat;
 
// super calls the constructor of the animal class
