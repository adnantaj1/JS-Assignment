// 1. Add function code goes here
exports.add = (a, b) => { 
  return (a + b);
}
// 2. Multiply function code goes here
exports.multiply = (a, b) =>{
  return (a * b);
 };
// 3. OddOrEven function code goes here
exports.oddOrEven = (a) =>  {
  if(a % 2 === 0){
    return "even";
  }else{
    return "odd";
  }
 };

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = () => {
  arr = [];
  for( i=1; i<=100; i++){
    arr.push(i);
  }
  return arr;
 };

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = () => {
  let y = 2;
  console.log(y);
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
numbers = [5,4,6,7,8,3,5,7,9,6,5,3,2,4,5,89,77,88,567,545,7,6,76,787]; 
exports.minValue = (numbers) =>  { 
  return Math.min(... numbers);
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
arr[2,3,4,5]
exports.doubleArray = (arr) => { 
  let doubleArr = [];
  for(i=0; i< arr.length; i++){
    doubleArr.push(arr[i] * 2); 
  }
  return doubleArr;
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];

exports.findStudentName = (students, name) =>  { 
  return name = students.name;
};

// 9. Transform all of the above into arrow functions below here
