//Constructor Function
// class cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log('Hello, I am');
//   }
//   const felix = new cat('MyCat');
// }

// let Cat1 = new cat('Jeffery and I like Cheese');
// let Cat2 = new cat('Whiskers and I like Ham');

// console.log(Cat1.name.speak());
// console.log(Cat2.name.speak());

//Factory Function
const createCat = name => ({
  name, 
  speak() {
    console.log(`hello, my name is ${this.name}`);
  }
});
const fluffy = createCat('fluffly');
const whiskers = createCat('whiskers');
fluffy.speak();
whiskers.speak();
