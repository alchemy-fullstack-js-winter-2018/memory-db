// factory ---------------------------------------
const cat = {
  name: 'Fluffy',
  speak() {
    return `Meow, my name is ${this.name}`;
  }
};
function factoryCat() {
  return Object.create(cat);
}
cat.speak();
const cat1 = factoryCat();
console.log(cat1.speak());


// arrow factory ---------------------------------------
const createCat = name => ({
  name, // same as name: name
  speak() {
    return `Meow, my name is ${this.name}`;
  }
});
const cat4 = createCat('BooBoo');
console.log(cat4.speak());


// constructor ---------------------------------------
function Cat(name) {
  this.name = name;
}
Cat.prototype.meow = function() {
  return `Meowwwwww, my name is ${this.name}`;
};
const cat2 = new Cat('Whiskers');
// cat2.name = 'Whiskers';
console.log(cat2.meow());


// class ---------------------------------------
class ClassCat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `Me-owWWW, my name is ${this.name}`;
  }
}
const cat3 = new ClassCat('Shaq');
console.log(cat3.speak());
