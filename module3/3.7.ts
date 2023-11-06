{
  // static in oop

  class Counter {
    // count: number = 0;
    static count: number = 0;
    // increment() {
    static increment() {
      //   return (this.count = this.count + 1);
      return (Counter.count = Counter.count + 1);
    }
    // decrement() {
    static decrement() {
      //   return (this.count = this.count - 1);
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter();
  //   console.log(instance1.increment());
  //   console.log(instance1.increment());
  //   console.log(instance1.increment());

  //   const instance2 = new Counter();
  //   console.log(instance2.decrement());
  //   console.log(instance2.decrement());

  //   const increment3 = new Counter();
  //   console.log(increment3.increment());

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());

  console.log(Counter.decrement());
  console.log(Counter.decrement());
}
