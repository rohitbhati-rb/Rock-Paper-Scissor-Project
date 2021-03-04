// console.log('hello');
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const resetScore_div = document.getElementById('rs');

resetScore_div.addEventListener('click', ()=>{
    userScore = computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'Select from below to Play!';
});

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    if(letter === 's') return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "You".fontsize(3).sub();
    const smallComp = "Bot".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(computerChoice)}${smallComp} . You win! 🔥`;
    document.getElementById(userChoice).classList.add('win');
    setTimeout(() => document.getElementById(userChoice).classList.remove('win'),350);
}
function lost(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "You".fontsize(3).sub();
    const smallComp = "Bot".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to ${convertToWord(computerChoice)}${smallComp} . You lose! 😐`;
    document.getElementById(userChoice).classList.add('lose');
    setTimeout(() => document.getElementById(userChoice).classList.remove('lose'),350);
}
function draw(userChoice, computerChoice){
    const smallUser = "You".fontsize(3).sub();
    const smallComp = "Bot".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} draws to ${convertToWord(computerChoice)}${smallComp} . It's a draw! 😏`;
    document.getElementById(userChoice).classList.add('draw');
    setTimeout(() => document.getElementById(userChoice).classList.remove('draw'),350);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
        default : lost(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click',()=>game('r'))
    paper_div.addEventListener('click',()=>game('p'))
    scissors_div.addEventListener('click',()=>game('s'))
}
main();