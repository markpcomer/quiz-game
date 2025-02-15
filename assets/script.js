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


// 1. Initialize Variables
//    - Set up variables to track the current question, time, and timer state.
//    - Reference DOM elements (questions, timer, choices, submit button, start button, initials, feedback, etc.).
//    - Set up sound effects for correct and incorrect answers.

// 2. Start Quiz Function
//    - Hide the start screen.
//    - Show the questions section.
//    - Start the timer with an interval that triggers every second.
//    - Display the initial time.

// 3. Get Question Function
//    - Get the current question from the array.
//    - Update the title with the current question.
//    - Clear old choices on the page.
//    - Loop through each choice, create a button for each, and display them on the page.

// 4. Question Click Function
//    - When a choice is clicked:
//      - Check if the clicked element is a choice button.
//      - If wrong, decrease the time by 15 seconds, update the timer, and play the wrong sound.
//      - If correct, play the right sound.
//      - Display feedback (correct/wrong) briefly.
//      - Move to the next question.
//    - If all questions are finished or time is up, end the quiz.

// 5. End Quiz Function
//    - Stop the timer.
//    - Display the end screen and show the final score.
//    - Hide the questions section.

// 6. Timer Function (Clock Tick)
//    - Decrease the time by 1 second.
//    - Update the displayed time.
//    - If time runs out, end the quiz.

// 7. Save Highscore Function
//    - Get initials from the input field.
//    - Ensure the initials are not empty.
//    - Retrieve saved scores from localStorage or use an empty array.
//    - Create a new score object with the current score and initials.
//    - Save the new score in localStorage.
//    - Redirect the user to the high scores page.

// 8. Check for Enter Function
//    - If the Enter key is pressed, call the saveHighscore function.

// 9. Event Listeners
//    - Set up event listeners for:
//      - Submit button (calls saveHighscore).
//      - Start button (starts the quiz).
//      - Choices container (handles question selection).
//      - Keyup event on initials input (checks for Enter key).




var startGameEl = document.querySelector("#start-game");
var highScoreBtn = document.querySelector("#high-score");
var questions = document.querySelector("#questions");
var intro = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var lineBreakEl = document.querySelector("#line-break");
var timerEl = document.querySelector("#timer");
var inputFormEl = document.querySelector("#input-form");
var inputInitialsEl = document.querySelector("#input-initials");
var highScoreSectionEl = document.querySelector("#high-score-section");


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

function startGame() {
  intro.setAttribute("class", "hide");
  questions.setAttribute("class", "show");
  timerEl.setAttribute("class", "show");
  lineBreakEl.setAttribute("class", "show");
  updateQuestion();
  startTimer();
}

function updateQuestion() {
  choicesEl.innerHTML = " ";
  resultEl.innerHTML = " ";
    if (questionIndex === question.length) {
        setTimeout(endGame);
        return;
    }
    questionEl.textContent = question[questionIndex].question;

    for(var i = 0; i < question[questionIndex].choices.length; i++){
        var element = document.createElement("li");
        element.textContent = question[questionIndex].choices[i];
        choicesEl.appendChild(element);
    }
}

function endGame() {
    questions.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    lineBreakEl.setAttribute("class", "show");
    inputFormEl.setAttribute("class", "show");
    highScoreSectionEl.setAttribute("class", "show");
    resultEl.textContent = `Oh Mr. Bond, your final score is ${score}.`; 
}

choicesEl.addEventListener("click", function (event) {
    var target = event.target;
    if (target.matches("li")) {
      if (target.textContent === question[questionIndex].answer) {
        resultEl.textContent = "Right idea, Mr. Bond. For once...";
        score++;

      } else {
        resultEl.textContent = "You amuse me, Mr. Bond. And time is running out.";
        timer = timer - 5;
    }
    questionIndex++;
    setTimeout(updateQuestion, 1000);
  }

  var storedPoints = localStorage.getItem("");
  
});

startGameEl.addEventListener("click", startGame);
// answer button event listener