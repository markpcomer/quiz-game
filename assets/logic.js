
let currentQuestionIndex = 0;
let time = questionsArray.length * 15;
let timerId;

const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

function startQuiz() {
    const startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class');

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();
};

function getQuestion() {
    let currentQuestion = questionsArray[currentQuestionIndex];

    const titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let choice = currentQuestion.choices[i];
        let choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        choicesEl.appendChild(choiceNode);
    }
};

function questionClick(event) {
    const buttonEl = event.target;
    if (!buttonEl.matches('.choice')) {
        return;
    }
    if (buttonEl.value !== questionsArray[currentQuestionIndex].answer) {
        time -= 15;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;

        feedbackEl.textContent = 'Tsk, tsk, Mr. Bond. Incorrect...';
    } else {
        feedbackEl.textContent = 'You are correct, Mr. Bond. For once...';
    }
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function() {
        feedbackEl.setAttribute('class', 'feedback hide');
    }, 1000);
    currentQuestionIndex++;
    if (time <= 0 || currentQuestionIndex === questionsArray.length) {
        endQuiz();
    } else {
        getQuestion();
    }
};

function endQuiz() {
    clearInterval(timerId);
    const endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
    const finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;
    questionsEl.setAttribute('class', 'hide');
};

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
};

function saveHighscore() {
    let initials = initialsEl.value.trim();
    if (initials !== '') {
        const highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

        let newScore = {
            score: time,
            initials: initials,
        };
        highscores.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify(highscores));
        window.location.href('highscores.html');
    }
};

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveHighscore();
    }
};

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;

choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;

