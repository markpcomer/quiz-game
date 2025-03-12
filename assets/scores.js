// 1. Print Highscores Function
function printHighscores() {
    //    - Retrieve the saved high scores from localStorage (if available), or use an empty array if not.

    const highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    highscores.sort(function (a,b) {
        return b.score - a.score;
    })

    for (let i = 0; i < highscores.length; i++) {
        let liScore = document.createElement("li");
        liScore.textContent = highscores[i].initials + ' - ' + highscores[i].score;

        let scoresList = document.getElementById("high-score");
        scoresList.appendChild(liScore);
    }
    console.log(highscores);
};

function clearHighscores() {
    window.localStorage.removeItem("high-scores");
    window.location.reload();
};

document.getElementById('clear').onclick = clearHighscores;

printHighscores();






//    - Sort the high scores array by the "score" property in descending order.
//    - Loop through each high score:
//      - Create a new list item (`li`) element.
//      - Set the text of the list item to include the user's initials and score.
//      - Find the ordered list (`ol`) element with the ID 'highscores' on the page.
//      - Append the created list item to the ordered list.

// 2. Clear Highscores Function
//    - Remove the high scores from localStorage.
//    - Reload the page to update the view.

// 3. Event Listener for Clear Button
//    - When the "clear" button is clicked, call the clearHighscores function.

// 4. Print Highscores on Page Load
//    - Call the printHighscores function when the page loads to display the high scores.
