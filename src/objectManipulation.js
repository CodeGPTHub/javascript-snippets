const person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

// Object destructuring
const { name, age } = person;

// Object keys and values
const keys = Object.keys(person);
const values = Object.values(person);

// Object merging
const additionalInfo = {
  country: "USA",
  occupation: "Developer"
};

const mergedPerson = { ...person, ...additionalInfo };
