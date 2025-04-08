// reverse all the elements in the string in ascending order and the specific elements in descending order
function reverseStrings(arr) {
    return arr.map(str => str.split('').reverse().join('')).sort();
  }
  
  function reverseSpecificElements(arr, indices) {
    return arr.map((str, index) => {
      if (indices.includes(index)) {
        return str.split('').reverse().join('');
      }
      return str;
    }).sort((a, b) => a.localeCompare(b));
  }
  
  // Example usage:
  let strings = ["apple", "banana", "cherry"];
  console.log(reverseStrings(strings));
  console.log(reverseSpecificElements(strings, [1]));

// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
  function checkNumber(arr) {
    return arr.map(num => {
      if (num > 0) return 'positive';
      if (num < 0) return 'negative';
      return 'zero';
    });
  }
  
  let numbers = [1, -2, 0, 5, -7];
  console.log(checkNumber(numbers));
  

// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function checkNumber(arr) {
    return arr.map(num => {
      if (num > 0) return 'positive';
      if (num < 0) return 'negative';
      return 'zero';
    });
  }
  
  // Example usage:
  let numberArr = [1, -2, 0, 5, -7];
  console.log(checkNumber(numbers));

  
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
  function logNumbersMultipliedBy2(arr) {
    arr.forEach(num => {
      console.log(num * 2);
    });
  }
  
  // Example usage:
  let nums = [1, 2, 3, 4];
  logNumbersMultipliedBy2(nums);
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortEmployeesBySalary(employees) {
  return employees.sort((a, b) => a.salary - b.salary);
}

// Example usage:
let employees = [
  { id: 1, name: 'Alice', salary: 50000 },
  { id: 2, name: 'Bob', salary: 60000 },
  { id: 3, name: 'Charlie', salary: 40000 }
];
console.log(sortEmployeesBySalary(employees));

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function modifyAndLogArray(arr) {
    arr.slice(0, 4).forEach(num => console.log(num * 8));
    arr.slice(-2).forEach(num => console.log(num + 5));
  }
  
  // Example usage:
  let numArray = [1, 2, 3, 4, 5, 6];
  modifyAndLogArray(numArray);





















// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
