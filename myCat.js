//classes (ES6) can have a constructor and a method
class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Meow, my name is ${this.name}`);
    } 
};

const kingsley = new Cat("Kingsley");

Kingsley.speak();
//"Meow, my name is Kingsley"




//constructor function
function Cat2(name) {
    this.name = name;
}

//or can use a prototype
Cat2.prototype.speak = function() {
    console.log(`Meow, my name is ${this.name}`);
}

const whiskers = new Cat2("whiskers");

whiskers.speak();





//factory function
//putting () around {} will cause the function to return a new object
const createCat = name => ({
    name,
    speak() {
        console.log(`Meow, my name is ${this.name}`);
    };
});

const fluffy = createCat("fluffy");

fluffy.speak();
