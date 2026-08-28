const questions = [
  {
    category: "Internet",
    question: "What is the name of the first YouTube video?",
    choices: ["Chocolate Rain", "La caída de Edgar", "Me at the zoo"],
    answer: "Me at the zoo"
  },
  {
    category: "Food",
    question: "From which fast food chain does Grimace come?",
    choices: ["Chick-fill-a", "Wendy's", "McDonald's"],
    answer: "McDonald's"
  },
  {
    category: "Science",
    question: "What year was Albert Einstein born?",
    choices: ["1878", "1879", "1880"],
    answer: "1879"
  },
  {
    category: "Memes",
    question: "Which is the most famous meme number nowadays?",
    choices: ["61", "67", "68"],
    answer: "67"
  },
  {
    category: "Language",
    question: "What is the meaning of 'Wo bist du?' in German?",
    choices: ["Where are you from?", "How old are you?", "Where are you?"],
    answer: "Where are you?"
  }
]


function getRandomQuestion(questionsArray) {
  const n = questionsArray.length;
  // random index number between 0 and n
  const randomQuestionIndex = Math.floor((Math.random() * n));
  return questionsArray[randomQuestionIndex]
}

function getRandomComputerChoice(choicesArray) {
  const randomChoiceIndex = Math.floor((Math.random() * 3));
  return choicesArray[randomChoiceIndex]
}

function getResults(questions, computerChoice) {
  if (questions.answer === computerChoice) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questions.answer}`
  }
}

// example of usage
const randomQuestionObject = getRandomQuestion(questions)
console.log(randomQuestionObject)

const randomComputerChoice = getRandomComputerChoice(randomQuestionObject.choices)
console.log(randomComputerChoice)

const result = getResults(randomQuestionObject, randomComputerChoice)
console.log(result)
