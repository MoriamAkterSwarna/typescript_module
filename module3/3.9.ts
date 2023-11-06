{
  // abstraction => when you hide the details and show only the essentials . 2 ways 1. interface 2. abstract class

  //idea
  interface Vehicle1 {
    // name: string;
    // model: number;
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  //   const vehicl: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2020,
  //   };

  // real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("start engine");
    }
    stopEngine(): void {
      console.log("stop engine");
    }
    move(): void {
      console.log("move car");
    }
    test() {
      console.log("testing");
    }
  }
  const toyotaCar = new Car();
  toyotaCar.startEngine();

  // abstract class

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("testing");
    }
  }

  class Toyota extends Car2 {
    startEngine(): void {
      console.log("starting the car engine");
    }
    stopEngine(): void {
      console.log("stopping the car engine");
    }
    move(): void {
      console.log("moving the car");
    }
  }

  const hondaCar = new Toyota();
  hondaCar.startEngine();

  //
}
