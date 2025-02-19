// 1. Initialize Variables
//    - Set up variables to track the current question, time, and timer state.
//    - Reference DOM elements (questions, timer, choices, submit button, start button, initials, feedback, etc.).
//    - Set up sound effects for correct and incorrect answers.


const startGameEl = document.querySelector("#start-game");
const highScoreBtn = document.querySelector("#high-score");
let questions = document.querySelector("#questions");
const intro = document.querySelector("#intro");
let questionEl = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");
let resultEl = document.querySelector("#result");
const lineBreakEl = document.querySelector("#line-break");
let timerEl = document.querySelector("#timer");
const inputFormEl = document.querySelector("#input-form");
const inputInitialsEl = document.querySelector("#input-initials");
const highScoreSectionEl = document.querySelector("#high-score-section");

let timer = 15;
let questionIndex = 0;
let score = 0;

const updateTimer = () => {
    if (timer > 1) {
        timer--;
        timerEl.textContent = `You have ${timer} seconds remaining, Mr. Bond...`;
    } else if (timer === 1) {
        timer;
        timerEl.textContent = `You have ${timer} second remaining, Mr. Bond...`
    } else {
        endQuiz();
    }
};

const startTimer = () => {
    setInterval(updateTimer, 1000);
};

// 2. Start Quiz Function
const startQuiz = () => {
    intro.setAttribute("class", "hide");
    questions.setAttribute("class", "show");
    timerEl.setAttribute("class", "show");
    lineBreakEl.setAttribute("class", "show");
    updateQuestion();
    startTimer();
}

const updateQuestion =() => {
    choicesEl.innerHTML = " ";
    resultEl.innerHTML = " ";
    if (questionIndex === question.length) {
        setTimeout(endGame);
        return;
    }
    questionEl.textContent = question[questionIndex].question;

    for (let i = 0; i < question[questionIndex].choices.length; i++) {
        let element = document.createElement("li");
        element.textContent = question[questionIndex].choices[i];
        choicesEl.appendChild(element);
    }
};

const endQuiz = () => {
    questions.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");

    lineBreakEl.setAttribute("class", "show");
    inputFormEl.setAttribute("class", "show");
    highScoreSectionEl.setAttribute("class", "show");

    resultEl.textContent = `Oh Mr. Bond, your final score is ${score}.`;

}

choicesEl.addEventListener("click", function (event) {
        const target = event.target;

        if (target.matches("li")) {
            if (target.textContent = question[questionIndex].answer) {
                resultEl.textContent = "Right idea, Mr. Bond. For once..."
            } else {
                resultEl.textContent = "You amuse me, Mr. Bond. And time is running out...";
                timer = timer - 5;
            }
            questionIndex++;
            setTimeout(updateQuestion, 1000);
        }
    });

startGameEl.addEventListener("click", startQuiz);

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