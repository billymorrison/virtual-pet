function Pet(nameInput) {
    this.name = nameInput,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
};

Pet.prototype.growUp = function() {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function() {
    const maxFitness = 10;
    const walkingFitnessIncrease = 4;

    this.fitness += walkingFitnessIncrease;
    if(this.fitness > maxFitness) this.fitness = maxFitness;
}

Pet.prototype.feed = function() {
    const minimumHunger = 0;
    const feedHungerDecrease = 3;

    this.hunger -= feedHungerDecrease;
    if(this.hunger < 0) this.hunger = minimumHunger;
}

module.exports = Pet;
