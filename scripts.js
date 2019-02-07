const stopValue = prompt("How high do you want to sum numbers up until?");
let startValue = prompt("Where do you want to start the summing from?")

startValue = Number.parseInt(startValue, 10);

let sum = 0;

while (startValue <= stopValue) {
  sum += startValue;
  startValue++;
}

console.log(sum);
