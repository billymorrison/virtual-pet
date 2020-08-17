const { TestScheduler } = require("jest")
const Pet = require('../src/pet'); 

describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet('fido')).toBeInstanceOf(Object);
    })
})