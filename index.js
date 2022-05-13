import chalk from "chalk";
import readLineSync from "readline-sync";

var score = 0;
const userName = readLineSync.question("What is your name?");
console.log(`${chalk.bgBlue(`Weclome ${userName}`)}`);

console.log(" ");

console.log(
  `${chalk.bgYellowBright(
    "I welcome you to the world of One Piece. Let's see how much you know about the One Piece Anime."
  )}`
);

console.log("");

console.log(
  `${chalk.underline(
    "Here are the certain rules which will be followed through out the game"
  )}`
);
console.log(
  `1. ${chalk.bgCyan("For each correct answer you'll get 2 points")}`
);
console.log(
  `2. ${chalk.bgCyan("For each wrong answer you'll loose 1 point.")}`
);

console.log(" ");

console.log("Here's the leaderboard. Check it out! and surpass them.");
console.log(" ");
console.log("     NAMES  ||  SCORES     ");
console.log("-----------------------------");
var scoreBoard = [
  {
    name: "Anas",
    score: 20,
  },
  {
    name: "Kamado",
    score: 17,
  },
];

for (var i = 0; i < scoreBoard.length; i++) {
  console.log(`       ${scoreBoard[i].name}  ||  ${scoreBoard[i].score}     `);
  console.log("-----------------------------");
}

console.log(`${chalk.cyan.bold("Let's get started!!!!")}`);

var questionBank = [
  {
    question:
      "In the Skypiea arc, one of the priests is Ohm.  What is the name of Ohm's dog?",
    answer: "Holy",
  },
  {
    question: " Where was Gol D. Roger born?",
    answer: "East Blue",
  },
  {
    question:
      "Thanks to Boa Hancock, Luffy manages to sneak into Impel Down. On Level 1, Luffy encounters an old foe but teams up with him. Who is this person?",
    answer: "Buggy",
  },
  {
    question: "Who is Luffy's first main opponent?",
    answer: "Alvida",
  },
  {
    question: "What is the name of the village Luffy was born in?",
    answer: "Foosha Village",
  },
  {
    question:
      "What is the name of the zombie that Moria let possess Brooke's shadow in the Thriller Bark Arc?",
    answer: "Ryuma",
  },
  {
    question:
      "When Luffy was younger, he had an idol. What was his idol's name?",
    answer: "Shanks",
  },
  {
    question:
      "What is the name Luffy uses to enter the Colosseum in Dressrosa?",
    answer: "Lucy",
  },
  {
    question:
      "Who controls the weather with their weapon and is the navigator of the fictional Straw Hat Pirates?",
    answer: "Nami",
  },
  {
    question:
      " Who was the first Straw Hat to make it back to Saobody after the time skip?",
    answer: "Zoro",
  },
];

function quiz(question, answer) {
  var userName = readLineSync.question(question);
  if (
    userName == answer ||
    userName == answer.toUpperCase() ||
    userName == answer.toLowerCase()
  ) {
    console.log(`${chalk.green("Right Answer")}`);
    score += 2;
  } else {
    console.log(`${chalk.red("Wrong Answer")}`);
    score -= 1;
  }
}

for (let i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer);
}
console.log(`Your score is: ${score}`);

scoreBoard.push({ name: `${userName}`, score: `${score}` });

function compare(a, b) {
  if (a.score > b.score) {
    return 1;
  } else {
    return -1;
  }
}

scoreBoard.sort(compare);
console.log("Here's the final leaderboard. ");

console.log("     NAMES  ||  SCORES     ");
console.log("-----------------------------");

for (var i = 0; i < scoreBoard.length; i++) {
  console.log(`       ${scoreBoard[i].name}  ||  ${scoreBoard[i].score}     `);
  console.log("-----------------------------");
}
