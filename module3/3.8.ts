{
  // polymorphism => many forms. when a method of a class changes its behavior according to the type of object it is called on, it is called polymorphism.

  class Person {
    getSleep() {
      console.log("Person sleeps 8 hours");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("Student sleeps 7 hours");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("developer sleeps 6 hours");
    }
  }

  const getSleepHours = (param: Person) => {
    param.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepHours(person1);
  getSleepHours(person2);
  getSleepHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //formula => pi * r * r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  //formula => height * width
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
}
