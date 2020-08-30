function Pet(nameInput) {
    this.name = nameInput,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function() {

    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }

    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function() {

    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }

    const maxFitness = 10;
    const walkingFitnessIncrease = 4;

    this.fitness += walkingFitnessIncrease;
    if(this.fitness > maxFitness) this.fitness = maxFitness;
}

Pet.prototype.feed = function() {

    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }

    const minimumHunger = 0;
    const feedHungerDecrease = 3;

    this.hunger -= feedHungerDecrease;
    if(this.hunger < 0) this.hunger = minimumHunger;
}

Pet.prototype.checkUp = function() {

    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }

    const upperHunger = 5;
    const lowerFitness = 3;

    if (this.hunger >= upperHunger && this.fitness <= lowerFitness) {
        return 'I am hungry AND I need a walk';
    } else if (this.hunger >= upperHunger) {
        return 'I am hungry';
    } else if (this.fitness <= lowerFitness) {
        return 'I need a walk';
    } else {
        return 'I feel great!';
    }
};

Pet.prototype.adoptChild = function(pet) {
    this.children.push(pet);
}

module.exports = Pet;
