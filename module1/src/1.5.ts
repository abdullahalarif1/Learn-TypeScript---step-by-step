// objects type

const user: {
  readonly company: string; // literal/fixed type
//company: "Programming Hero"; - fixed can't change
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Abdullah",
  lastName: "Arif",
  isMarried: false,
};

