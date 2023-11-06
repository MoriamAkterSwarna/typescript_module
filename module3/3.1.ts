{
  //class => class is a blueprint of an object
  //   class property => we can access it by using this keyword. property is a variable inside a class
  // class method =>  method is a function inside a class
  // constructor =>  constructor is a function inside a class which is called when we create an instance of a class

  class Animal {
    // public name: string;
    public species: string;
    public sound: string;

    // parameter properties
    constructor(public name: string, species: string, sound: string) {
      // constructor(name: string, species: string, sound: string) {
      // this.name = name;
      this.species = species;
      this.sound = sound;
    }
    // we have to use normal function here because arrow function does not have its own this keyword
    makeSound() {
      console.log(`the ${this.species} ${this.name} makes ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "bark");
  const cat = new Animal("Persian", "cat", "meow");
  cat.makeSound();

  //
}
