# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

```js
let animalMethods = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    }
    set changeLocation(newLocation){
        this.location = newLocation;
    }
    summary(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }
}
function createAnimal(location,numberOfLegs =4)
{
let animal = Object.create(animalMethods)
animal.location = location;
animal.numberOfLegs = numberOfLegs;
return animal;
}
```

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

```js
let dogMethod = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    set changeName(newName){
        this.name = newName;
    }
    set changeColor(newColor){
        this.color = newColor;
    }
    summary(){
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`)
    }
}
dog{

}
function createAnimal(location,numberOfLegs =4)
{
let animal = Object.create(animalMethods)
animal.location = location;
animal.numberOfLegs = numberOfLegs;
return animal;
}
```

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
