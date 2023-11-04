{
  // Generic Type ---------------------------->

  // reusable globally handle dynamic generic type --->
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [1,2,3]
  const rollNumbers: GenericArray<number> = [1, 2, 3]; // array generic type

  //const mentors: string[] = ["Mr.x", "Mr. y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr.x", "Mr. y", "Mr. Z"]; // array generic type

  //const boolArray: boolean[] = [true, false, true]
  const boolArray: GenericArray<boolean> = [true, false, true]; // array generic type

  // Array of object for generic ----------------------->

  type User = { // you can use this type name for simplify
    name: string;
    age: number;
  };

  const user: GenericArray<{ name: string; age: number } > = [
    {
      name: "abd",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 30,
    },
  ];

  //generic tuple ------------------------------->

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    23445,
    {
      name: "Abdullah",
      email: "abdullah@gmail.com",
    },
  ];
}
