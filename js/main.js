
const title = document.querySelector('.js-title');
const button = document.querySelector('.js-button');
const newGameButton = document.querySelector('.js-new-game-button');
const form = document.querySelector('.js-form');
const userNumber = document.querySelector('.js-userNumber');
const tipMessage = document.querySelector('.js-tipMessage');
const counter = document.querySelector('.js-counter');
const gameLost = document.querySelector('.js-lost-game');

const generateRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
}
const randomNumber = generateRandomNumber(100);

const compareNumber = () => {
    const userNumberValue = parseInt(userNumber.value);

    if (userNumberValue > 100 || userNumberValue < 0) {
        console.log('The number must be between 0 and 100.');
        tipMessage.innerHTML = 'The number must be between 0 and 100.';
    } else if (userNumberValue === randomNumber) {
        console.log('You win');
        tipMessage.innerHTML = 'Oh, yeah. YOU WIN!!!';
        count();
    } else if (userNumberValue < randomNumber) {
        console.log('Too low.');
        tipMessage.innerHTML = `Too low...`;
        count();
    } else if (userNumberValue > randomNumber) {
        console.log('Too high.');
        tipMessage.innerHTML = `Not that high, mate.`;
        count();
    }
}

let times = 0;

const count = () => {
    if (times === 3) {
        gameLost.classList.remove('hidden');
        title.classList.add('hidden');
        tipMessage.innerHTML = `Sorry, the number was ${randomNumber}`;
        counter.innerHTML = '';
        button.classList.add('hidden');
        newGameButton.classList.remove('hidden');
        form.classList.add('hidden');
    }
    else if (userNumber !== randomNumber & times < 2) {
        times++;
        return counter.innerHTML = `You've tried ${times} times`;
    }
    else if ((times === 2)) {
        times++;
        return counter.innerHTML = `Only 1 attempt left`;
    }
    else {
        counter.innerHTML = 'You have 4 attempts';
    }
}

const newGame = () => {
    times = 0;
    gameLost.classList.add('hidden');
    title.classList.remove('hidden');
    button.classList.remove('hidden');
    newGameButton.classList.add('hidden');
    form.classList.remove('hidden');
    userNumber.value = '';
    counter.innerHTML = 'You have 4 attempts';
    tipMessage.innerHTML = `Write a number between 0 and 100 <br> and hit the "try" button.`;
    compareNumber();
}

const handleEvent = ev => {
    ev.preventDefault();
    compareNumber();
};

const handleNewGame = ev => {
    ev.preventDefault();
    newGame();
}

button.addEventListener('click', handleEvent);

newGameButton.addEventListener('click', handleNewGame);