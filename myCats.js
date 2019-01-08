//factory function (creates "cats")
const createCat = name => ({
    name: name,
    speak() {
        console.log(`Hi I'm ${this.name}`);
    }
});
const fluffyII = cresteCat('FluffyII');
const whiskersII = createCat('WhiskersII');

fluffyII.speak();
whoskersII.speak();

//constructor fn
function Cat(name {
    this.name = name
}
cat.protoptype.speak = fynction() {

}

//classes (es6) can have const fn or method - React uses them heavily
class catClass {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`My name is ${this.name}`);
    }
}
const myCat = new CatClass('myCat');
// new instance bcse it's a class - CapitalizedName