// Declare variables for different DOM elements that will be manipulated in the game.
var startGameEl = document.querySelector("#start-game"); // Start game button element
var highScoreBtn = document.querySelector("#high-score"); // High score button (unused in this snippet)
var questions = document.querySelector("#questions"); // Questions container element
var intro = document.querySelector("#intro"); // Intro section (before game starts)
var questionEl = document.querySelector("#question"); // Question display element
var choicesEl = document.querySelector("#choices"); // List element for the choices
var resultEl = document.querySelector("#result"); // Result element (displays feedback)
var lineBreakEl = document.querySelector("#line-break"); // Line break element to be used between sections
var timerEl = document.querySelector("#timer"); // Timer display element
var inputFormEl = document.querySelector("#input-form"); // Form element for player initials input after game
var inputInitialsEl = document.querySelector("#input-initials"); // Input element for initials (unused in this snippet)
var highScoreSectionEl = document.querySelector("#high-score-section"); // Section for displaying high scores (unused here)

// Set initial values for game variables
var timer = 15; // The game timer starts at 15 seconds
var questionIndex = 0; // Index to track the current question in the array
var score = 0; // Player's score starts at 0

// Function to start and handle the countdown timer
function startTimer() {
  // Use setInterval to decrement the timer every second
  setInterval(function () {
    if (timer > 0) {
      // If there's time left, decrement the timer and update the timer display
      timer--;
      timerEl.textContent = `You have ${timer} seconds left, Mr. Bond.`;
    } else {
      // If the timer hits 0, call the endGame function
      endGame();
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Function to begin the game
function startGame() {
  // Hide the intro screen and show the questions section
  intro.setAttribute("class", "hide");
  questions.setAttribute("class", "show");
  timerEl.setAttribute("class", "show");
  lineBreakEl.setAttribute("class", "show");
  updateQuestion(); // Call the function to display the first question
  startTimer(); // Begin the countdown timer
}

// Function to update the question and choices
function updateQuestion() {
  // Clear previous choices and result content
  choicesEl.innerHTML = " ";
  resultEl.innerHTML = " ";

  // Check if there are no more questions to show (end of the question list)
  if (questionIndex === question.length) {
    // Call the endGame function after a brief delay (1000ms)
    setTimeout(endGame, 1000);
    return; // Exit the function as there are no more questions
  }

  // Set the current question text
  questionEl.textContent = question[questionIndex].question;

  // Loop through the choices for the current question and display them as list items
  for (var i = 0; i < question[questionIndex].choices.length; i++) {
    var element = document.createElement("li"); // Create a new list item element
    element.textContent = question[questionIndex].choices[i]; // Set the text content to the current choice
    choicesEl.appendChild(element); // Add the new list item to the choices section
  }
}

// Function to handle the end of the game
function endGame() {
  // Hide the questions and timer elements
  questions.setAttribute("class", "hide");
  timerEl.setAttribute("class", "hide");

  // Show the input form for player initials and the high score section
  lineBreakEl.setAttribute("class", "show");
  inputFormEl.setAttribute("class", "show");
  highScoreSectionEl.setAttribute("class", "show");

  // Display the player's final score in the result section
  resultEl.textContent = `Oh Mr. Bond, your final score is ${score}.`; 
}

// Event listener to detect a choice being clicked
choicesEl.addEventListener("click", function (event) {
  var target = event.target; // Get the clicked target element

  // Check if the clicked target is a list item (which would be one of the choices)
  if (target.matches("li")) {
    // If the choice matches the correct answer, increment the score
    if (target.textContent === question[questionIndex].answer) {
      resultEl.textContent = "Right idea, Mr. Bond. For once...";
      score++; // Increment score for correct answer
    } else {
      // If the choice is incorrect, penalize the player by reducing time
      resultEl.textContent = "You amuse me, Mr. Bond. And time is running out.";
      timer = timer - 5; // Reduce timer by 5 seconds for a wrong answer
    }
    questionIndex++; // Move to the next question
    setTimeout(updateQuestion, 1000); // Wait 1 second before updating the question
  }
});

// This code snippet seems to have a bug: the key for localStorage is not specified.
// It's possible that this section was intended to store the player's score for high scores.
var storedPoints = localStorage.getItem(""); // This needs to have a proper key value

// Add event listener to the start game button to initiate the game when clicked
startGameEl.addEventListener("click", startGame);




// //  1   Click start button & begin timer.
// //  2   Answer question & receive "correct" or receive 
// //          "incorrect" plus time penalty.
// //  3   Continue answering subesequent questions.
// //  4   Game ends when:
// //          4a  All questions are answered.
// //          4b  ...or timer reaches 0.
// //  5   Then user can save initials and current score.
// //  6   After saving initials & high score, user can:
// //          6a  Delete high score, and/or
// //          6b  Choose "Go Back" button, which leads to:
// //  7   The start over button, which takes us back to 
// //          the beginning option.


// // 1. Initialize Variables
// //    - Set up variables to track the current question, time, and timer state.
// //    - Reference DOM elements (questions, timer, choices, submit button, start button, initials, feedback, etc.).
// //    - Set up sound effects for correct and incorrect answers.

// // 2. Start Quiz Function
// //    - Hide the start screen.
// //    - Show the questions section.
// //    - Start the timer with an interval that triggers every second.
// //    - Display the initial time.

// // 3. Get Question Function
// //    - Get the current question from the array.
// //    - Update the title with the current question.
// //    - Clear old choices on the page.
// //    - Loop through each choice, create a button for each, and display them on the page.

// // 4. Question Click Function
// //    - When a choice is clicked:
// //      - Check if the clicked element is a choice button.
// //      - If wrong, decrease the time by 15 seconds, update the timer, and play the wrong sound.
// //      - If correct, play the right sound.
// //      - Display feedback (correct/wrong) briefly.
// //      - Move to the next question.
// //    - If all questions are finished or time is up, end the quiz.

// // 5. End Quiz Function
// //    - Stop the timer.
// //    - Display the end screen and show the final score.
// //    - Hide the questions section.

// // 6. Timer Function (Clock Tick)
// //    - Decrease the time by 1 second.
// //    - Update the displayed time.
// //    - If time runs out, end the quiz.

// // 7. Save Highscore Function
// //    - Get initials from the input field.
// //    - Ensure the initials are not empty.
// //    - Retrieve saved scores from localStorage or use an empty array.
// //    - Create a new score object with the current score and initials.
// //    - Save the new score in localStorage.
// //    - Redirect the user to the high scores page.

// // 8. Check for Enter Function
// //    - If the Enter key is pressed, call the saveHighscore function.

// // 9. Event Listeners
// //    - Set up event listeners for:
// //      - Submit button (calls saveHighscore).
// //      - Start button (starts the quiz).
// //      - Choices container (handles question selection).
// //      - Keyup event on initials input (checks for Enter key).




// var startGameEl = document.querySelector("#start-game");
// var highScoreBtn = document.querySelector("#high-score");
// var questions = document.querySelector("#questions");
// var intro = document.querySelector("#intro");
// var questionEl = document.querySelector("#question");
// var choicesEl = document.querySelector("#choices");
// var resultEl = document.querySelector("#result");
// var lineBreakEl = document.querySelector("#line-break");
// var timerEl = document.querySelector("#timer");
// var inputFormEl = document.querySelector("#input-form");
// var inputInitialsEl = document.querySelector("#input-initials");
// var highScoreSectionEl = document.querySelector("#high-score-section");


// var timer = 15;
// var questionIndex = 0;
// var score = 0;

// function startTimer() {
//   setInterval(function () {
//     if (timer > 0) {
//       timer--;
//       timerEl.textContent = `You have ${timer} seconds left, Mr. Bond.`;
//     } else {
//       endGame();
//     }
//   }, 1000);
// }

// function startGame() {
//   intro.setAttribute("class", "hide");
//   questions.setAttribute("class", "show");
//   timerEl.setAttribute("class", "show");
//   lineBreakEl.setAttribute("class", "show");
//   updateQuestion();
//   startTimer();
// }

// function updateQuestion() {
//   choicesEl.innerHTML = " ";
//   resultEl.innerHTML = " ";
//     if (questionIndex === question.length) {
//         setTimeout(endGame);
//         return;
//     }
//     questionEl.textContent = question[questionIndex].question;

//     for(var i = 0; i < question[questionIndex].choices.length; i++){
//         var element = document.createElement("li");
//         element.textContent = question[questionIndex].choices[i];
//         choicesEl.appendChild(element);
//     }
// }

// function endGame() {
//     questions.setAttribute("class", "hide");
//     timerEl.setAttribute("class", "hide");
//     lineBreakEl.setAttribute("class", "show");
//     inputFormEl.setAttribute("class", "show");
//     highScoreSectionEl.setAttribute("class", "show");
//     resultEl.textContent = `Oh Mr. Bond, your final score is ${score}.`; 
// }

// choicesEl.addEventListener("click", function (event) {
//     var target = event.target;
//     if (target.matches("li")) {
//       if (target.textContent === question[questionIndex].answer) {
//         resultEl.textContent = "Right idea, Mr. Bond. For once...";
//         score++;

//       } else {
//         resultEl.textContent = "You amuse me, Mr. Bond. And time is running out.";
//         timer = timer - 5;
//     }
//     questionIndex++;
//     setTimeout(updateQuestion, 1000);
//   }

//   var storedPoints = localStorage.getItem("");
  
// });

// startGameEl.addEventListener("click", startGame);
