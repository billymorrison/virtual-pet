 class Pet {
    constructor(name) {
        this.name = name,
        this.hunger = 0,
        this.age = 0,
        this.fitness = 10,
        this.children = []
    }

    walk() {

        if(!this.isAlive) throw new Error('Your pet is no longer alive :(')
        
        const fitnessIncrease = 4;
        const topFitness = 10;

        this.fitness += fitnessIncrease;
        if(this.fitness > topFitness) this.fitness = topFitness;
    }

    feed() {

        if(!this.isAlive) throw new Error('Your pet is no longer alive :(')
        
        const hungerDecrease = 3;
        const topHunger = 0;

        this.hunger -= hungerDecrease;
        if(this.hunger < topHunger) this.hunger = topHunger;
    }

    growUp() {

        if(!this.isAlive) throw new Error('Your pet is no longer alive :(')
        
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;

        if(this.fitness > 10) this.fitness = 10;
        if(this.hunger < 0) this.hunger = 0;
    }

    checkUp() {

        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(')
        }

        if (this.hunger >= 5 && this.fitness <= 3) {
            return 'I am hungry AND I need a walk'
        } else if (this.hunger >= 5) {
            return 'I am hungry'
        } else if (this.fitness <= 3) {
            return 'I need a walk'
        } else {
            return 'I feel great!'
        }
    }

    adoptChild(child) {
        this.children.push(child);
    }

    get isAlive() {
        const maxAge = 30;
        const maxHunger = 10;
        const minFitness = 0;

        return this.age < maxAge && this.hunger < maxHunger && this.fitness > minFitness;
    }
 }

 module.exports = Pet;