'use strict';


// Generate the secret number that the user has to guess
let secretNumber = Math.trunc(Math.random()*20)+1;

// Make a variable to store the score to easily decrease it when the player guess a wrong number
let score = 20 ;

// Make a variable to store the high score in it
let highScore = 0;

// Making function to display messages depend on the current stage
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Make an event handler to handle the clicking on check button by the player
document.querySelector('.check').addEventListener('click',function (){
    // Make a variable to store the guess of the player to use it in the conditions and convert it to a number
    // because it is a string
    let guess = Number(document.querySelector('.guess').value);

    // If there is no number condition
    if(!guess){
        displayMessage('✖️ No Number');
    }

    // If the player win the game
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#27af00';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // When the guess is wrong
    else if (guess !== secretNumber) {
        // If the score is still above zero and the player can continue
        if (score > 1){
            guess > secretNumber ? displayMessage('Too High') : displayMessage('Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        // If the score is become zero and game over
        else {
            displayMessage('💥 GAME OVER');
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});

// Make an event handler to handle the clicking on again button by the player
document.querySelector('.again').addEventListener('click',function (){

    // Reset the score to 20
    score = 20;
    document.querySelector('.score').textContent = score;

    // Reset the secret number
    secretNumber = Math.trunc(Math.random()*20)+1;

    // Reset the message
    displayMessage('Start Guessing...');

    // reset the '?' over the secret number
    document.querySelector('.number').textContent = '?';

    // Restore the original background color
    document.querySelector('body').style.backgroundColor = '#222';

    // Reset the number width to the original width
    document.querySelector('.number').style.width = '15rem';

    // Reset the guess value
    document.querySelector('.guess').value = '';
})