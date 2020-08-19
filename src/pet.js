function Pet(nameInput) {
    this.name = nameInput,
    this.age = 0
};

Pet.prototype.growUp = function() {
    this.age++;
}

module.exports = Pet;
