# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

<!-- Yet to do -->

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

<!-- ##   -->

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  incrementProject() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }
  decrementProject() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}

let boyUser = new User("Aditya", 21, 7);
```
