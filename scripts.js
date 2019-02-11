/**
 *  1. Capture user input from #start.
 *  2. "" "" from #stop.
 *  3. Listen for a submit and start adding.
 *  4. Update <output> to show the total.
 */

const stopValue = prompt("How high do you want to sum numbers up until?");

let startValue = prompt("Where do you want to start the summing from?");

startValue = Number(startValue);

let sum = 0;

while (startValue <= stopValue) {
  sum += startValue;
  startValue += 1;
}

console.log(sum);
