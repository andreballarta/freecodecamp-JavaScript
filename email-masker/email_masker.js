function maskEmail(email){
  const indexAt = email.indexOf("@");
  const username = email.slice(0, indexAt);
  const numberOfCharacters = username.length;
  const firstLetter = username.slice(0,1);
  const lastLetter = username.slice(numberOfCharacters-1);
  const asterisks = "*".repeat(numberOfCharacters-2);
  const address = email.slice(indexAt)
  return firstLetter + asterisks + lastLetter + address;
}

// e.g. of usage
const email = "apple.pie@example.com"
console.log(maskEmail(email))
