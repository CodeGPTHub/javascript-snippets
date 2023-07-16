// Array map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

// Array filter
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Array reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Array find
const firstEvenNumber = numbers.find(num => num % 2 === 0);
