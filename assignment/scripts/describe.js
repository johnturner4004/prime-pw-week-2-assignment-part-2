// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called "name" and assigned it the value 'Dane' as a string.
// We check if the variable "name" is equal to 'Mary', it is not so we console.log
// 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared a variable called "secret" but left the value as undefined.
// We declared another variable called "code" and set it equal to 123 as a number.
// We checked to see if code is equal to 123, and because it is, we assigned the value 'super' as
// a string to the variable "secret" and multiplied 2 to the value of code making it equal the Number
// 246. Next we check if code is greater than 250, it is not, so we do nothing.
// Finally we console.log the value of secret and it prints 'super' in the console.

//CODE
/*
let secret;

let code = 123;

if (code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper';
}

console.log(secret);

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declared a variable called "isStudent" and assigned it the boolean value of 'true'.
// We declared a variable called "age" and assigned it the value 34 as a number.
// We declared a third variable "zip" and assigned it the number 55407. We checked if both
// "isStudent" is 'true' and "zip" is greater than '80000'. Since "isStudent" is true but "zip"
// is not greater we move to the first else if statement to check if "isStudent" is 'false' or
// "age" is less than 30. Since neither condition is true we move on to the second else if which only checks if
// "isStudent" is equal to 'true', and since it is we console.log 'Welcome to Prime!' as this condition was true we
// do not run the final else statement.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should equal 'blue'
let colorOne = 'red';
// FIX - colorTwo should equal 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - colorTwo should also be set equal to 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - should be && instead of ||
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - should be age <= min age for the console to return 'enter'.
if(minAge <= age) {
  // ALT FIX - we could also switch the two console.log statements and leave the condition above as inspect
  //           this would make the program flow closer to how it is described though both would only print
  //           'enter' to the console if "age" is greater than or equal to "minAge"
  console.log('no entry');
} else {
  console.log('enter');
}
*/
