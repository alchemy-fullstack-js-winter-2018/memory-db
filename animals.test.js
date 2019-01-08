// const {
//     animalFac, 
//     AnimalCon, 
//     animalClass
     
// } = require('./animals');

// describe('test each type of function', () => {
//     describe('test animal Factory function', () => {
//         it('should return the console speak funtion for a name', () => {

//             const tiger = animalFac('tony', 'tiger');
//             expect(tiger.speak()).toEqual('i am a tiger named tony');
//         });
//     });
//     describe('animal constructor', () => {
//         it('should speak', () => {
//             const animal =  new AnimalCon('fluffy', 'cat');
//             expect(animal.speak()).toEqual('i am a cat named fluffy');
//         });
//     });
//     describe(' test animal class', () => {
//         it('should speak', () => {
//             const animal = new animalClass('fluffy', 'cat');
//             expect(animal.speak()).toEqual('i am a cat named fluffy');
//         });
//     });
// });