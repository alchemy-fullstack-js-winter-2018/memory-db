//factory 
const animalFac = (name, species) => ({
    name,
    species,
    speak() {
        return `i am a ${this.species} named ${this.name}`;
    }
});

const Mytiger = animalFac('bill', 'tiger');
Mytiger.speak();



//constructor 

const AnimalCon = function(name, species) {
    this.name = name;
    this.species = species;
};

AnimalCon.prototype.speak = function() {
    return `i am a ${this.species} named ${this.name}`;
};



//class 
class animalClass {
    constructor(name, species) {
        this.name = name, 
        this.species = species;
    }
    speak() {
        return `i am a ${this.species} named ${this.name}`;
    }
}





module.exports = {
    animalFac,
    AnimalCon,
    animalClass
};