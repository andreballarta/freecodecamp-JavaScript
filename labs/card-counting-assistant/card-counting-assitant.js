let count = 0;
function cardCounter(card) {
  let decision;
  if (typeof card === "string" || card === 10) {
    count--;
  }
  if (card >= 2 && card <= 6) {
    count++;
  }

  if (count > 0) {
    decision = 'Bet'
  } else {
    decision = 'Hold'
  }
  return count + ' ' + decision
}

// example of usage:
console.log(cardCounter(10))
console.log(cardCounter("J"))
console.log(cardCounter("Q"))
console.log(cardCounter("K"))
