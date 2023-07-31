'use strict';

// Variable num equals to a random number from 0 to 100
var num = Math.floor(Math.random() * 101);
var score = 15;

// Variable highscore equals the value of highscore stored in local storage/cookie
var highscore = Number(localStorage.getItem('highscore'));

document.querySelector('.highscore').textContent = highscore;



// If check button is clicked, run the function
document.querySelector('.check').addEventListener('click', function() {

    // Setting the variable guess to the value of class guess(the value entered by the user).
    const guess = Number(document.querySelector('.guess').value);

    // Display the value of guess, the type of guess, and num
    // console.log(guess, typeof guess, num);

    // If haven't win
    if (document.querySelector('.message').textContent != '🥳 Correct Number!') {

        // If no number entered
        if (!guess) {

            document.querySelector('.message').textContent = '❌ No Number!';
        }
        
        else if (guess == num) {
            
            document.querySelector('.message').textContent = '🥳 Correct Number!';
            document.querySelector('.number').textContent = num;

            // Changing the look of the page
            document.querySelector('body').style.backgroundColor = '#379237';
            document.querySelector('.guess').style.color = '#F7C04A';
            document.querySelector('header').style.backgroundColor = '#54B435';
            document.querySelector('.number').style.color = 'black';
            document.querySelector('.number').style.width = '25rem';
        }

        else if (guess < num) {

            document.querySelector('.message').textContent = '👇 Too Low!';
        }

        else if (guess > num) {

            document.querySelector('.message').textContent = '👆 Too high!';
        }

        // If score is greater than 0 and guess has been entered and hasn't win
        if (score > 0 && document.querySelector('.message').textContent != '❌ No Number!' && document.querySelector('.message').textContent != '🥳 Correct Number!') {

            // Set value of score to text content of class score - 1
            score = document.querySelector('.score').textContent -= 1;

            // Display the value of score, highscore, and class message text content in console.
            // console.log('Score:', score);
            // console.log('High score:', highscore);
            // console.log('Message:', document.querySelector('.message').textContent);
        }

        // If score more than highscore and won
        if ((score > highscore) && (document.querySelector('.message').textContent == '🥳 Correct Number!')) {

            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

            // Storing the value of highscore to local storage/cookie
            localStorage.setItem('highscore', highscore)

            // To display value of updated highscore in console.
            // console.log('New high score:', highscore);
        }

        if (score == 0) {

            document.querySelector('.message').textContent = 'You lost!';
        }

    }

});

// If again button is clicked, run the function
document.querySelector('.again').addEventListener('click', function() {

    // Resetting the value of some variables
    num = Math.floor(Math.random() * 100);
    score = 15;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    // Resetting the look of the page
    document.querySelector('body').style.backgroundColor = 'rgb(0, 48, 138)';
    document.querySelector('.guess').style.color = 'inherit';
    document.querySelector('header').style.backgroundColor = 'rgb(72, 0, 100)';
    document.querySelector('.number').style.color = 'goldenrod';

});



