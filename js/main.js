'use-strict';

const button = document.querySelector('.js-button');
const userNumber = document.querySelector('.js-userNumber');
const tipMessage = document.querySelector('.js-tipMessage');
const counter = document.querySelector('.js-counter');

const generateRandomNumber = function (max) {
    console.log('Generating random number');
    return Math.ceil(Math.random() * max);
}

const randomNumber = generateRandomNumber(100);

const compareNumber = function () {

    const userNumberValue = parseInt(userNumber.value);
    console.log(randomNumber);

    if (userNumberValue > 100) {
        console.log('The number must be between 0 and 100.');
        return tipMessage.innerHTML = 'The number must be between 0 and 100.';
    } else if (userNumberValue === randomNumber) {
        console.log('You win');
        return tipMessage.innerHTML = 'Oh, yeah. YOU WIN!!!';
    } else if (userNumberValue < randomNumber) {
        console.log('Too low.');
        return tipMessage.innerHTML = `Too low...`;
    } else if (userNumberValue > randomNumber) {
        console.log('Too high.');
        return tipMessage.innerHTML = `Not that high, mate.`;
    }
}

const handleEvent = function (ev) {
    ev.preventDefault();
    console.log('Prevents the event');
    compareNumber();
};

button.addEventListener('click', handleEvent);