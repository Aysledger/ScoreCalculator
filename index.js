let homeScore = document.getElementById("home-score-value");
let guestScore = document.getElementById("guest-score-value");
function add1home() {
    let currentScore = parseInt(homeScore.textContent, 10);
    homeScore.textContent = currentScore + 1;
}

function add2home() {
    let currentScore = parseInt(homeScore.textContent, 10);
    homeScore.textContent = currentScore + 2
}

function add3home() {
    let currentScore = parseInt(homeScore.textContent, 10);
    homeScore.textContent = currentScore + 3
}

function add1guest() {
    let currentScore = parseInt(guestScore.textContent, 10);
    guestScore.textContent = currentScore + 1
}

function add2guest() {
    let currentScore = parseInt(guestScore.textContent, 10);
    guestScore.textContent = currentScore + 2
}

function add3guest() {
    let currentScore = parseInt(guestScore.textContent, 10);
    guestScore.textContent = currentScore + 3
}

function newGame() {
  homeScore.textContent = 0
  guestScore.textContent = 0
}