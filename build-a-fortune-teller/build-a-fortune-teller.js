const fortune1 = "Your dog will be very happy today.";
const fortune2 = "The weather will be awful tomorrow.";
const fortune3 = "Be cautious of your new friends.";
const fortune4 = "You will find a new cat soon.";
const fortune5 = "It would be wise to avoid the color green today.";

const randomNumber = Math.floor(Math.random() * 5)+1;
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
}
if (randomNumber === 2) {
  selectedFortune = fortune2;
}
if (randomNumber === 3) {
  selectedFortune = fortune3;
}
if (randomNumber === 4) {
  selectedFortune = fortune4;
}
if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune)
