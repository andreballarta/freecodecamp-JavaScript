function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return `${year} is not a leap year.`;
    }
    return `${year} is a leap year.`;
  } else {  
    return `${year} is not a leap year.`;
    }
  }

// example of usage
let year = 1900;
let result = isLeapYear(year);
console.log(result)
