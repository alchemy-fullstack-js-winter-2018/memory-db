const puck = {
  name: 'puck',
  speak() {
    console.log(`Yowzzers, I'm called ${this.name}`);
  }
};
const whiskers = {
  name: 'whiskers',
  speak() {
    console.log(`Hello my name is ${this.name}`);
  }
};
puck.speak();
whiskers.speak();

