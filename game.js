'use strict';

var num = Math.floor(Math.random() * 100);
var score = 15;
var highscore = Number(localStorage.getItem('highscore'));
document.querySelector('.highscore').textContent = highscore;




document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // console.log(guess, typeof guess, num);

    if (!guess) {
        document.querySelector('.message').textContent = '❌ No Number!';
    }
    if (guess == num) {
        document.querySelector('.message').textContent = '🥳 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#379237';
        document.querySelector('.guess').style.color = '#F7C04A';
        document.querySelector('header').style.backgroundColor = '#54B435';
        document.querySelector('.number').style.color = 'black';
    }

    if (guess < num && guess != 0) {
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
    document.querySelector('body').style.backgroundColor = '#6A2C70';
    document.querySelector('.guess').style.color = 'inherit';
    document.querySelector('header').style.backgroundColor = '#B83B5E';
    document.querySelector('.number').style.color = 'goldenrod';

});



