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