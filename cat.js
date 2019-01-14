const cat = {
  name: 'Ollie',
  speak() { 
    return `Meow, My name is ${this.name}`;
  }
};
cat.speak();

//factory function
const createCat = name => ({
  name,
  speak() {
    return `Meow, my name is ${this.name}`;
  }
});

const fluffy = createCat('Fluffy');
const whiskers = createCat('Whiskers');

whiskers.speak();
fluffy.speak();

