//require the file animal.js in order to be able to use the function AnimalClass
const {AnimalClass} = require('./animal');

//extend the function AnimalClass to be included in the class Cat
class Cat extends AnimalClass {
    constructor(name) {
        //super calls the AnimalClass constructor and provides all of the same properties
        //species is set to 'cat' beause this is a specific species of....cat
        super(name, 'cat');
    }
    //static applies to ALL instances of Cat and can be called as Cat.desription
    static description() {
        return "All cat's have legs";
    }
}



module.exports = {
    Cat
};