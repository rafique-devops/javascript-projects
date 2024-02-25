let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(`Random Number: ${randomNumber}`);

const submit = document.querySelector('#subm')
const userGuessed = document.querySelector('#guessField')
const guessedSlot = document.querySelector('.previous_guesses')
const availableLimit = document.querySelector('.last_result')
const lowOrHi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuess = [];
let guessCount = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e)=> {
        e.preventDefault()
        const guess = parseInt(userGuessed.value)
        console.log(`User Guessed: ${guess}`);
        validateGuess(guess);
    })
}
function validateGuess(guess)
{
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else
    {
        previousGuess.push(guess)
        if(guessCount === 11)
        {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number : ${randomNumber}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if (guess === randomNumber) {
        displayMessage(`You Guessed It Right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is Too Low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is Too High`)
    }

}

function displayGuess(guess)
{
    userGuessed.value = '';
    guessedSlot.innerHTML += `${guess}, `
    guessCount++;
    availableLimit.innerHTML = `${11 - guessCount}`
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
    userGuessed.value = ''
    userGuessed.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        console.log(`Random Number: ${randomNumber}`);
        previousGuess = [];
        guessCount = 1;
        guessedSlot.innerHTML = ''
        availableLimit.innerHTML = `${11 - guessCount}`;
        userGuessed.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}

