{
  //instanceof

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("animal makes sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`${this.name} barks`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log(`${this.name} meows`);
    }
  }
  //smart way to handle instance of => we can use function
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // if (animal instanceof Dog) {
    if (isDog(animal)) {
      animal.makeBark();
      // } else if (animal instanceof Cat) {
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog 1", "dog");
  const cat = new Cat("Cat 1", "cat");
  getAnimal(dog);
  console.log(dog);
  console.log(cat);
  getAnimal(cat);

  //
}
