let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const hint = document.querySelector('.hint');
const lastGuess = document.querySelector('.last-guess');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if(guess === winningNum) {
        hint.textContent = '';
        lastGuess.textContent = '';
        gameOver(true, `${winningNum} is correct! You Won!`);
    } else {
        guessesLeft -= 1;
        if(guessesLeft == 0) {
            gameOver(false, `Game Over! Correct number was ${winningNum}!`);
        } else {
            getHint(guess, winningNum);
            lastGuess.textContent = `Your last guess number was: ${guess}`;
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`Wrong Number! ${guessesLeft} guesses left`, 'red');
        }
    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;

    setMessage(msg, color);

    //* Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min  + 1) + min));
}

function getHint(guessNum, correctNum) {
    if(guessNum < correctNum) {
        setHint('low');
    } else {
        setHint('high');
    }
}

function setHint(level) {
    let different;
    level === 'low' ? different = 'low' : different= 'high';
    hint.textContent = `Too ${different} !`;
}