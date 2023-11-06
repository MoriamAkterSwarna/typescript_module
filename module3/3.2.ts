{
  //
  // Inheritance in TypeScript => when a class inherits from another class

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(hour: number) {
      console.log(`${this.name} sleeps for ${hour} hours`);
    }
  }

  //   class Teacher {
  //     name: string;
  //     age: number;
  //     address: string;
  //     designation:string;

  //     constructor(name: string, age: number, address: string, designation: string) {
  //       this.name = name;
  //       this.age = age;
  //       this.address = address;
  //       this.designation = designation;
  //     }

  //     getSleep(hour: number) {
  //       console.log(`${this.name} sleeps for ${hour} hours`);
  //     }
  //     takeClass(classHour: number){
  //         console.log(`${this.name} takes class for ${classHour} hours`);

  //     }
  //   }
  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(classHour: number) {
      console.log(`${this.name} takes class for ${classHour} hours`);
    }
  }

  const teacher1 = new Teacher("Mr Teacher", 35, "Dhaka", "Lecturer");
  teacher1.getSleep(8);
  teacher1.takeClass(4);
  //

  //   class Student {
  //     name: string;
  //     age: number;
  //     address: string;

  //     constructor(name: string, age: number, address: string) {
  //       this.name = name;
  //       this.age = age;
  //       this.address = address;
  //     }

  //     getSleep(hour: number) {
  //       console.log(`${this.name} sleeps for ${hour} hours`);
  //     }
  //   }
  class Student extends Parent {
    constructor(namme: string, age: number, address: string) {
      super(namme, age, address);
    }
  }

  const student1 = new Student("Mr Z ", 23, "Lahore");
  student1.getSleep(8);
  //
}
