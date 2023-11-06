{
  // spread operator

  const bros1: string[] = ["mohammed", "ahmed", "ali"];
  const bros2: string[] = ["khaled", "hassan", "riyad"];
  //   const bros2 = bros1.push(bros2); // return error

  bros1.push(...bros2); // spread operator

  const mentors = {
    typescript: "mezba",
    redux: "mir",
    dbms: "mizan",
  };

  const mentors2 = {
    prisma: "firoz",
    next: "tanmoy",
    cloud: "nahid",
  };

  const mentorsList = { ...mentors, ...mentors2 }; // spread operator

  // rest operator

  // in this way if we try to add more than 3 arguments it will return error
  //   const greetFriends = (friend1, friend2, friend3) => {
  //     console.log(`hi ${friend1}, ${friend2}, ${friend3}`);
  //   };

  //   greetFriends("mohammed", "ahmed", "ali", 'khaled', 'hassan', 'riyad');

  const greetFriends = (...friends: string[]) => {
    //rest operator
    friends.forEach((friend) => console.log(`hi ${friend}`));
  };

  greetFriends("mohammed", "ahmed", "ali");
}
