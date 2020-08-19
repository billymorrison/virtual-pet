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

describe('check initial values', () => {
    const testPet = new Pet('foobar')

    test('initial age is zero', () => {
        expect(testPet.age).toBe(0);
    })
    test('initial hunger is zero', () => {
        expect(testPet.hunger).toBe(0);
    })
    test('initial fitness is ten', () => {
        expect(testPet.fitness).toBe(10);
    })
    
})

describe('growUp functionality', () => {
    const testPet = new Pet('foobar')
    testPet.growUp();

    test('check growUp has aged pet by 1', () => {
        expect(testPet.age).toBe(1);
    })
    test('growUp increases hunger by 5', () => {
        expect(testPet.hunger).toBe(5);
    })
    test('growUp decreases hunger by 3', () => {
        expect(testPet.fitness).toBe(7);
    })
})

describe('walk functionality', () => {
    const testPet = new Pet('foobar')

    test('walk increases fitness by 4', () => {
        testPet.fitness = 3;
        testPet.walk();
        expect(testPet.fitness).toBe(7);
    })
    test('10 is maximum number fitness can reach', () => {
        testPet.walk();
        expect(testPet.fitness).toBe(10);
    })  
})

