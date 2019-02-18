/**
 *  3. Listen for a submit and start adding.
 *  4. Update <output> to show the total.
 */

// Listen for a 'submit' event on the 'form.'
document.querySelector("form").addEventListener(
  "submit",
  // Capture the event that was fired and prevent the default from following its default behavior.
  e => {
    // console.log(e);
    e.preventDefault();
    const stopValue = document.querySelector("#stop").value;
    let startValue = document.querySelector("#start").value;
    startValue = Number(startValue);

    let sum = 0;

    while (startValue <= stopValue) {
      sum += startValue;
      startValue += 1;
    }

    console.log(sum);
  }
);
