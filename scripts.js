/*
 * We use 'const' to capture the value that the user enters in to our prompt.
 * We use 'const' b/c we don't expect it to change, mutate or iterate.
*/
const stopValue = prompt("How high do you want to sum numbers up until?");

/**
 * We use 'let' to capture the value once again.
 * We use 'let' as this value will need to be incremented.
 */
let startValue = prompt("Where do you want to start the summing from?");

/**
 * Since startValue 'default's to being treated like a 'String',
 * we use a Number constructor (similar to a function).
 * It will accept our 'String' ARGUMENT and RETURN a number.
 */
startValue = Number(startValue);

// We create, name and instantiate a 'sum' variable to keep track of the total
let sum = 0;

// We create a 'while' loop that will run until the condition inside the parentheses is true.
while (startValue <= stopValue) {
  /**
   * All code below the '{' and the '}' below will continuously run inside this 'while' loop WHILE the condition inside the parentheses above remains true.
   * JS will not proceed anywhere else while this is happening.
   */
  sum += startValue;
  startValue += 1;
}

/**
 * Access log() inside the 'window.console' Object,
 * passing it VALUE contained inside the VARIABLE named 'sum.'
 */
console.log(sum);
