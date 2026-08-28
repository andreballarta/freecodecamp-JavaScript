let lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }
  const lastItem = array.pop();
  console.log(`${lastItem} removed from the end of the lunch menu.`);
  return array;
}

function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }
  const firstItem = array.shift();
  console.log(`${firstItem} removed from the start of the lunch menu.`);
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
    return array;
  }
  const randomIndex = Math.floor((Math.random() * array.length));
  const randomItem = array[randomIndex];
  console.log(`Randomly selected lunch: ${randomItem}`);
  return array;
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
    return array;
  }
  const menuList = array.join(", ");
  console.log(`Menu items: ${menuList}`);
}

// examples of usage
addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(lunches, "Sushi");
getRandomLunch(lunches);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
