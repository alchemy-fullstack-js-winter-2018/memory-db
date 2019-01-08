//cat should have a name
// should be able to speak
const cat = {
  name: 'fluffy',
  speak() {
    console.log(`Meow, my name is ${this.name}!`);
  }  
};
cat.speak();

const whiskers = {
  name: 'whiskers',
  speak() {
    console.log(`Meow, my name is ${this.whiskers}`);
  }
};
whiskers.speak();




