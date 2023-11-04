{
  // ternary operator || optional chaining || nullish coalescing

  // ternary operator
  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not";
  console.log({ isAdult });

  // nullish coalescing operator---------------------
  // (null / undefined) --> decision making

  // always use like this ternary for null and undefined
  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";
  console.log({ result });

  // optional chaining with nullish
  type User = {
    name: string;
    address: {
      city: string;
      permanentAddress: string;
      presentAddress?: string;
      road: string;
    };
  };

  const user: User = {
    name: "Abdullah",
    address: {
      city: "Abdullah",
      permanentAddress: "Dhaka",
      road: "nazrul road",
    },
  };

const presentAddress = user?.address?.presentAddress ?? "No present Address";
console.log({ presentAddress });

}
