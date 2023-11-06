{
  //destructuring

  const user = {
    id: 234,
    name: {
      firstName: "mariam",
      middleName: "khanam",
      lastName: "akter",
    },
    contactNo: "784983",
    address: " uganda",
  };

  const {
    contactNo: phoneNo, // here we can rename the property name and it is called Name Alias
    // name: {middleName}
    name: { middleName: middName }, // here we cannot set explicitely type of middleName rather it will consider as name and type will be any
  } = user;

  // array destructuring
  const myFriends = ["sakib", "tamim", "mashrafi", "mushfiq", "mahmudullah"];

  //   const [ a, b, bestFriend] = myFriends;
  const [, , bestFriend, ...rest] = myFriends; // here we can skip the first two elements of the array
}
