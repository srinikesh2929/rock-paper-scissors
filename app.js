let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const rock_div=document.getElementById("rock")
const paper_div=document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const reandomNum = Math.floor(Math.random() * 3);
    return choices[reandomNum];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML=computerScore
}

function lose() {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML=computerScore
}
function draw() {
    console.log("draw");
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
    // usr wins
        case 'rs':
        case 'sp':
        case 'pr':
            win();
            break;
        // usr loses
        case 'rp':
        case 'sr':
        case 'ps':
            lose();
            break;
        case 'rr':
        case 'pp':
        case 'pp':
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    });
    paper_div.addEventListener('click', function () {
        game('p')
    });
    scissors_div.addEventListener('click', function () {
        game('s')
    });
}
main()