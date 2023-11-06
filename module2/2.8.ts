{
  // promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    // console.log(data);
    return data;
  };
  getTodo();

  type Something = { something: string };
  //stimulate
  //   const createPromise = (): Promise<string> => {
  const createPromise = (): Promise<Something> => {
    // return new Promise<string>((resolve, reject) => {
    return new Promise<Something>((resolve, reject) => {
      //   const data: string = "something";
      //   const data: Something = "something";
      const data: Something = { something: "something" };
      //   const data: boolean = true;
      if (data) {
        resolve(data);
      } else {
        reject("failed");
      }
    });
  };

  // callling create promise function
  //   const showData = async (): Promise<string> => {
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
  };
  showData();
}
