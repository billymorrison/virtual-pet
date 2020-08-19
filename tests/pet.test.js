const { TestScheduler } = require("jest")
const Pet = require('../src/pet'); 

describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet()).toBeInstanceOf(Object);
    })
})
describe('test name functionality', () => {
    test('passing pet with a name creates name property', () => {
        expect(new Pet('fido').name).toBe('fido');
    })
    test('passing pet with a name creates name property', () => {
        expect(new Pet('billy').name).toBe('billy');
    })
    test('passing pet with a name creates name property', () => {
        expect(new Pet('HjUMkKK2343').name).toBe('HjUMkKK2343');
    })
})

describe('age functionality', () => {
    const testPet = new Pet('foobar')

    test('initial age is zero', () => {
        expect(testPet.age).toBe(0);
    })

    test('check growUp has aged pet by 1', () => {
        testPet.growUp();
        expect(testPet.age).toBe(1);
    })
})