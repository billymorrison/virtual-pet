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

describe('feed functionality', () => {
    const testPet = new Pet('foobar')

    test('feed decreases hunger by 3', () => {
        testPet.hunger = 5;
        testPet.feed();
        expect(testPet.hunger).toBe(2);
    })
    test('0 is the lowest number hunger can reach', () => {
        testPet.feed();
        expect(testPet.hunger).toBe(0);
    })  
})

describe('checkUp functionality', () => {
    let testPet = new Pet('foobar')
    beforeEach(() => testPet = new Pet('foobar'));

    test('returns i am fine if all state is in correct levels', () => {
        expect(testPet.checkUp()).toBe('I feel great!');
    })
    test('returns i am fine if all state is in correct levels', () => {
        testPet.hunger = 3;
        testPet.fitness = 7;
        expect(testPet.checkUp()).toBe('I feel great!');
    })
    test('fitness <= 3 and hunger >= 5 asks for a walk and a snack', () => {
        testPet.fitness = 2;
        testPet.hunger = 7;
        expect(testPet.checkUp()).toBe('I am hungry AND I need a walk');
    })
    test('fitness <= 3 asks for a walk', () => {
        testPet.fitness = 2;
        expect(testPet.checkUp()).toBe('I need a walk');
    })
    test('hunger >= 5 asks for a snack', () => {
        testPet.hunger = 7;
        expect(testPet.checkUp()).toBe('I am hungry');
    })  
})

describe('isAlive functionality', () => {
    let testPet = new Pet('foobar')
    beforeEach(() => testPet = new Pet('foobar'));

    test('returns true if all states are in acceptable levels', () => {
        expect(testPet.isAlive).toBe(true);
    })
    test('returns false when hunger is over maximum', () => {
        testPet.hunger = 11;
        expect(testPet.isAlive).toBe(false);
    })
    test('returns false if fitness is under minimum', () => {
        testPet.fitness = 0;
        expect(testPet.isAlive).toBe(false);
    })
    test('returns false if age is over maximum', () => {
        testPet.age = 35;
        expect(testPet.isAlive).toBe(false);
    })
})

describe('check error functionality', () => {
    let testPet = new Pet('foobar')
    testPet.hunger = 11;

    test('throws an error if you try to feed a dead pet', () => {
        expect(() => testPet.feed()).toThrow('Your pet is no longer alive :(');
    })
    test('throws an error if you try to walk a dead pet', () => {
        expect(() => testPet.walk()).toThrow('Your pet is no longer alive :(');
    })
    test('throws an error if you try to age a dead pet', () => {
        expect(() => testPet.growUp()).toThrow('Your pet is no longer alive :(');
    })
    test('checkUp returns a similar string if the pet is dead', () => {
        expect(() => testPet.checkUp()).toThrow('Your pet is no longer alive :(');
    })
})

describe('check we can make babies', () => {
    const parent = new Pet('Dave');
    const child = new Pet('Amelia');

    parent.adoptChild(child);

    test('check adding a child to a parent adds to the children array', () => {
        expect(parent.children).toHaveLength(1);
    })
    test('check adding a child to a parent adds to the children array', () => {
        expect(parent.children[0].name).toEqual('Amelia');
    })
})

