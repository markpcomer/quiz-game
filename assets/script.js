//  1   Click start button & begin timer.
//  2   Answer question & receive "correct" or receive 
//          "incorrect" plus time penalty.
//  3   Continue answering subesequent questions.
//  4   Game ends when:
//          4a  All questions are answered.
//          4b  ...or timer reaches 0.
//  5   Then user can save initials and current score.
//  6   After saving initials & high score, user can:
//          6a  Delete high score, and/or
//          6b  Choose "Go Back" button, which leads to:
//  7   The start over button, which takes us back to 
//          the beginning option.

var question = [
  {
    question: "Who did 007 fight in a traincar in From Russia with Love?",
    choices: ["Le Chiffre", "Jason Bourne", "Red Grant", "Jaws"],
    answer: "Red Grant",
  },
  {
    question: "Who directed Skyfall?",
    choices: ["Steven Spielberg", "Michael G. Wilson", "Kathryn Bigelow", "Sam Mendes"],
    answer: "Sam Mendes",
  },
  {
    question: "Who sang the theme song 'Goldeneye'?",
    choices: ["Tina Turner", "Shirley Bassey", "Sam Smith", "Tom Jones"],
    answer: "Tina Turner",
  },
  {
    question: "How many official James Bond movies are there?",
    choices: ["22", "23", "24", "25"],
    answer: "25",
  },
  {
    question: "How many official James Bond actors are there?",
    choices: ["5", "6", "7", "8"],
    answer: "6",
  },
  {
    question: "What is 007's quartermaster known as?",
    choices: ["M", "Miss Moneypenny", "Q", "Greg from State Farm"],
    answer: "Q",
  },
];

var startGameEl = document.querySelector("#start-game");
var questions = document.querySelector("#questions");
var intro = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");

// var count;
// Remember: count++ or count--

var timer = 15;
var questionIndex = 0;
var score = 0;

function startTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      timerEl.textContent = `You have ${timer} seconds left, Mr. Bond.`;
    } else {
      endGame();
    }
  }, 1000);
}

// Timer from Module 4.9
/* function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
} 
*/

function startGame() {
  intro.setAttribute("class", "hide");
  updateQuestion();
  questions.setAttribute("class", "show");
  timerEl.setAttribute("class", "show");
  startTimer();
}

function updateQuestion() {
    if (questionIndex === question.length) {
        setTimeout(endGame, 1500);
        return;
    }
    questionEl.textContent = question[questionIndex].question;
    choicesEl.innerHTML = " ";
    resultEl.innerHTML = " ";
    for(var i = 0; i < question[questionIndex].choices.length; i++){
        var element = document.createElement("li");
        element.textContent = question[questionIndex].choices[i];
        choicesEl.appendChild(element);
    }
}

function endGame() {
    questions.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    resultEl.textContent = "You win this time. Now, look after Mr. Bond. See that some harm comes to him...";
}

choicesEl.addEventListener("click", function (event) {
    var target = event.target;

    if (target.matches("li")) {
      if (target.textContent === question[questionIndex].answer) {
        resultEl.textContent = "Right idea, Mr. Bond. For once...";
        score++;
        console.log(score);
      } else {
        resultEl.textContent = "You amuse me, Mr. Bond. And time is running out.";
        timer = timer - 5;
    }

    questionIndex++;

    setTimeout(updateQuestion, 1500);
  }
});

startGameEl.addEventListener("click", startGame);
// answer button event listener