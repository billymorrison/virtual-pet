# Virtual Pet

This project will be used to create and care for a virtual pet. The aim of this project is to get an understanding of objext oriented programming.

* You can give them a name

* They can get older

* As they get older, they get hungrier and less fit

* You can walk your pet to increase it's fitness. 🏃‍♂️

* You can feed your pet to decrease it's hunger. 🍕

* You can talk to your pet to see if it needs feeding or walking

* If your pet gets too hungry or unfit, it will DIE 💀

* If your pet gets to 30 days old it will DIE 😢

## Dependencies

The only dependency you need is Jest for testing

```bash
npm install jest -D
```

## Usage

Create your new pet by calling the constructor with your desired name.

```js
const newPet = new Pet('alan')
```

Your pet will have some initial values that determine it's wellbeing.

```js
constructor(name) {
        this.name = name,
        this.hunger = 0,
        this.age = 0,
        this.fitness = 10,
        this.children = []
    }
```

You can check your pet's wellbeing using the checkup method.

```js
newPet.checkUp()
```

And depending on the output of the checkup you can perform various activities with your pet.

```js
newPet.walk()
newPet.feed()
```

Your pet can also adopt a child!

```js
newPet.adoptChild(new Pet('Bob'))
```

Sadly all good things must come to an end and you can check whether your pet is alive.

```js
newPet.isAlive()
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
