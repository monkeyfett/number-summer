/**
 *  3. Listen for a submit and start adding.
 *  4. Update <output> to show the total.
 */

const stopValue = document.querySelector("#stop").value;
console.log(stopValue);

// querySelector() expects to get a CSS-style selector
const startValue = document.querySelector("#start").value;
console.log(startValue);

document.querySelector("form").addEventListener(
  "submit",
  // Add a callback fxn.
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
