/**
 *  3. Listen for a submit and start adding.
 *  4. Update <output> to show the total.
 */

const output = document.querySelector("output");

// Listen for a 'submit' event on the 'form.'
document.querySelector("form").addEventListener(
  "submit",
  // Capture the event that was fired and prevent the default from following its default behavior.
  e => {
    e.preventDefault();

    // We use the 'value' property on <input> elements.
    const stopValue = document.querySelector("#stop").value;
    let startValue = document.querySelector("#start").value;
    startValue = Number(startValue);

    let sum = 0;

    while (startValue <= stopValue) {
      sum += startValue;
      startValue += 1;
    }

    // Use 'textContent' property to get the text inside of an HTML element - this means the stuff between the tags.
    output.textContent = sum;
  }
);
