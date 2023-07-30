'use strict';

var num = Math.floor(Math.random() * 100);
var score = 15;
var highscore = Number(localStorage.getItem('highscore'));
document.querySelector('.highscore').textContent = highscore;




document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // console.log(guess, typeof guess, num);

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';
    }
    if (guess == num) {
        document.querySelector('.message').textContent = '🥳 Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess').style.color = 'gold';
    }

    if (guess < num) {
        document.querySelector('.message').textContent = '👇 Too Low!';
    }

    if (guess > num) {
        document.querySelector('.message').textContent = '👆 Too high!';
    }
        score = document.querySelector('.score').textContent -= 1
        console.log('Score:', score);
    console.log('High score:', highscore);
    console.log('Message:', document.querySelector('.message').textContent);
    if ((score > highscore) && (document.querySelector('.message').textContent == '🥳 Correct Number!')) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        localStorage.setItem('highscore', highscore)
        console.log('New high score:', highscore);
    }
;

});

document.querySelector('.again').addEventListener('click', function() {
    // Reset variables
    num = Math.floor(Math.random() * 100);
    score = 15;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    // Update UI
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('body').style.color = '#eee'

});



