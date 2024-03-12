// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
         checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop", called when the script
 * is first loaded and after the users answer has been processed
 */
function runGame() {
//creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1; 
    let num2 = Math.floor(Math.random()*25)+1; 

}
/**Check answer against the first element
 * in the returned calculateCorrectAnswer array.
 */
function checkAnswer() {
let userAnswer = parseInt(document.getElementById("answer-box").value);
let calculatedAnswer = calculateCorrectAnswer ()
let isCorrect = userAnswer === calculatedAnswer[0];

if (isCorrect) {
    alert ("Hey! You got it right! :D");
}else {
    alert (`Awww .... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
}
runGame(calculatedAnswer [1]);
}

/**
 * Gets the operands (the numbers) and the operators (plus, minus, multiply and devide)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer() {
let operand1 = parseInt(document.getElementById(operand1).interText);
let operand2 = parseInt(document.getElementById(operand2).interText);
let operator = document.getElementById(operator).innerText;
if (operator === "+") {
    return ["operand1" + "operand2", addition]
} else {
    alert (`unimplemented operator ${operator}`);
    throw `unimplemented operator ${operator}.Aborting!`
}
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}