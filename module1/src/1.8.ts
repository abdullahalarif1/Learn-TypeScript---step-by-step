{
  //destructuring

  // object destructuring

  const user = {
    Id: 345,
    name: {
      firstName: "abdullah",
      middleName: "al",
      lastName: "arif",
    },
    contactNo: "01837464776",
    address: "uganda",
  };

  const {
    address,
    name: { middleName, lastName },
  } = user; // this way to grave specific property

  // array destructuring

  const myFriends = ["turag", "sohan", "Fayez", "Abdullah", "al", "Arif"];

  const [, , bestFriend, ...myName] = myFriends; // destructuring and set name to easily find out what position they have from complex data.
}