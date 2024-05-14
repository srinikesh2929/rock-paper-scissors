let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById('result-main');
const resultUlt_p = document.getElementById('result-ultimate');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "<sub style='font-size: 16px'>(user)</sub>";
const smallCompWord = "<sub style='font-size: 16px'>(comp)</sub>";

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const reandomNum = Math.floor(Math.random() * 3);
    return choices[reandomNum];
}

function returnSentence(userChoice,word,computerChoice) {
    return `${convertToWord(userChoice)}${smallUserWord} ${word} ${convertToWord(computerChoice)}${smallCompWord}`
}
function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
    const userChoice_div=document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = returnSentence(userChoice, 'beats', computerChoice)
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow'), 300);
    resultUlt_p.innerHTML = 'You WIN🔥';
}

function lose(userChoice, computerChoice) {
    const userChoice_div=document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = returnSentence(userChoice,'loses to',computerChoice)
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() =>userChoice_div.classList.remove('red-glow'), 300);
    resultUlt_p.innerHTML = 'You Lose😔';
}
function draw(userChoice,computerChoice) {
    const userChoice_div=document.getElementById(userChoice)
    result_p.innerHTML = returnSentence(userChoice,'draws',computerChoice)
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout( () =>userChoice_div.classList.remove('grey-glow'), 300);
    resultUlt_p.innerHTML = 'It\'s a draw🤝';
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
    // usr wins
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice,computerChoice);
            break;
        // usr loses
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'pp':
            draw(userChoice,computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', ()=> game('r'));
    paper_div.addEventListener('click', ()=>game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}
main()