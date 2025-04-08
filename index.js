// reverse all the elements in the string in ascending order and the specific elements in descending order
function reversedstr(arr) {
    return arr.map(str => str.split('').reverse().join('')).sort();}
  function specificItem(arr, indices) {
    return arr.map((str, index) => {
      if (indices.includes(index)) {
        return str.split('').reverse().join('');}
      return str;
    }).sort((a, b) => a.b);}
    
  let strs = ["Thinkpad", "X1 Carbon", "Yoga", "IdeaPad"];
  console.log(reversedstr(strs));
  console.log(specificItem(strs, [1 ,2]));

// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
  function spotNum(arr) {
    return arr.map(num => {
      if (num > 0) return 'positive';
      if (num < 0) return 'negative';
      return 'zero';});}
  let num= [-2,-90,10,5,35];
  console.log(spotNum(num));


  
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
  function numMultiplied2(arr) {
    arr.forEach(num => {
      console.log(num * 2);});}
  let nums = [1,2,3];
  numMultiplied2(nums);



// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortedsalary(employees) {
  return employees.sort((a, b) => a - b);}
let employees = [
  { id: 4, name: 'Esther', salary: 500 },
  { id: 8, name: 'James', salary: 600},];
console.log(sortedsalary(employees));

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function specificNumberss(arr) {
    arr.slice(0, 4).forEach(num => console.log(num * 8));
    arr.slice(-2).forEach(num => console.log(num + 5));}
    let numArray = [11, 20, 16,54, 12, 36];
  specificNumberss(numArray);



















