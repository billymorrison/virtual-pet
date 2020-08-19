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

module.exports = Pet;
