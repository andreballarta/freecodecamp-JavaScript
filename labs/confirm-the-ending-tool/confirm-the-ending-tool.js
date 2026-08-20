function confirmEnding(string, ending) {
  const totalNum = string.length
  const endingNum = ending.length
  if (string.slice(totalNum-endingNum, totalNum) === ending) {
    return true
  } else {
    return false
  }
}

// examples of usage
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
