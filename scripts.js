/**
 *  3. Listen for a submit and start adding.
 *  4. Update <output> to show the total.
 */

/**
 * Query the document with a CSS selector.
 * We would expect to get back an HTML element.
 * Next, we access the 'value' property of this element.
 */
const stopValue = document.querySelector("#stop").value;
console.log(stopValue);

// querySelector() expects to get a CSS-style selector
const startValue = document.querySelector("#start").value;
console.log(startValue);

// Listen for a 'submit' event on the 'form.'
document.querySelector("form").addEventListener(
  "submit",
  // Add a CALLBACK fxn.
  () => {
    console.log("submitted");
  }
);

// startValue = Number(startValue);

// let sum = 0;

// while (startValue <= stopValue) {
//   sum += startValue;
//   startValue += 1;
// }

// console.log(sum);
