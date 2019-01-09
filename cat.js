
// classes 
class catClass {
    constructor(name) {
        this.name = name;
    }
    static description() {
        throw 'there is an error';
    }
    speak() {
        return `hello world im a cat named ${this.name}`;
    }
}

// class Cat extends catClass {
//     constructor(name) {
//         super(name, 'cat');
//     }

//     static description() {
//         return 'Cats are small';
//     }
//     speak() {
//         return `i am a cat ${this.name}`;
//     }
// }


module.exports = catClass;