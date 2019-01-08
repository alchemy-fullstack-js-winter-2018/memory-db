// const cat = {
//   name: 'Roxy',
//   speak() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

//class method
class Cat {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

const roxy = new Cat('Roxy', '12 lbs');
const whiskers = new Cat('Whiskers', '9 lbs');

console.log(roxy.speak());
console.log(roxy);
console.log(whiskers.speak());
console.log(whiskers);

//constructor method
function addCat(name, weight) {
  this.name = name;
  this.weight = weight;
  this.speak = function() {
    return `Hello, my name is ${this.name}`;
  };
}

const riley = new addCat('Riley', '10 lbs');
console.log(riley);
console.log(riley.speak());

//factory function
const createCat = (name, weight) => {
  return {
    name,
    weight,
    speak() {
      return `Hello, my name is ${this.name}`;
    }
  };
};

const watson = createCat('Watson', '16 lbs');
console.log(watson);
console.log(watson.speak());
