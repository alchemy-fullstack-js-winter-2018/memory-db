const { AnimalClass } = require('./animal'); 

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }
  static typeOfAge() {
    return 12; 
  }
  // static description() {
  //   throw 'there is no description'; 
  // }
  speak() {
    return `Hello, my name is ${this.name} and I am a ${this.species}`;
  }
}

module.exports = Cat;
