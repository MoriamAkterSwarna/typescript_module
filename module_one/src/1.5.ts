// reference type ==> object

const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
};
const user1: {
  //   company: string;
  readonly company: string;
  // company: "programming hero";  // literal type  ==>when the  value is fixed
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  // company: "programming hero bangladesh",
  company: "programming hero",
  firstName: "Jhanker",
  lastName: "Mahbub",
  isMarried: true,
};
