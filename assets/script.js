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


var startGameEl = document.querySelector("#start-game");
var questions = document.querySelector("#questions");
var intro = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");

var timer = 15;

var question = [
  {
    question: "this is not a character in harry potter",
    choices: ["harry", "hermione", "ron", "bugs bunny"],
    answer: "bugs bunny",
  },
  {
    question: "how many harry potter movies are there",
    choices: ["1", "2", "3", "8"],
    answer: "8",
  },
];

var questionIndex = 0;

function startTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      timerEl.textContent = timer;
    } else {
      endGame();
    }
  }, 1000);
}

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
    

  questionEl.textContent = question[questionIndex].question;
  choicesEl.innerHTML = "";
  resultEl.innerHTML = "";
  for (var i = 0; i < question[questionIndex].choices.length; i++) {
    var element = document.createElement("li");
    element.textContent = question[questionIndex].choices[i];
    choicesEl.appendChild(element);
  }
}

function endGame() {
  questions.setAttribute("class", "hide");
  timerEl.setAttribute("class", "hide");
  resultEl.textContent = "game over";
}

choicesEl.addEventListener("click", function (event) {
  var target = event.target;

  if (target.matches("li")) {
    if (target.textContent === question[questionIndex].answer) {
      resultEl.textContent = "correct";
    } else {
      resultEl.textContent = "incorrect";
      timer = timer - 5;
    }

    questionIndex++;

    setTimeout(updateQuestion, 1500);
  }
});

startGameEl.addEventListener("click", startGame);