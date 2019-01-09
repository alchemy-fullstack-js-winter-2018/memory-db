class AnimalClass{
    constructor(name, species) {
        this.name = name;
        this.species = species;
    };
    speak() {
        return `I'm ${this.name} and I'm a ${this.species}`
    };
    static description() {
        throw 'you are required to implement the description method';
    }
}

function AnimalConstructor(name, species) {
    this.name = name;
    this.species = species
}

AnimalConstructor.prototype.speak = function() {
    return `I'm ${this.name} and I'm a ${this.species}`;
}

const AnimalFactory = (name, species) => ({
    name,
    species,
    speak() {
        return `I'm ${this.name} and I'm a ${this.species}`;
    }
});

//extends - everything the AnimalClass has is now on the dog class too
class Dog extends AnimalClass {
    constructor(name) {
        //super calls the AnimalClass constructor
        super(name, 'dog');
    }
}



module.exports = {
    AnimalClass,
    AnimalConstructor,
    AnimalFactory
};
