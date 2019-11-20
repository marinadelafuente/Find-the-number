'use-strict';

const button = document.querySelector('.js-button');
const userNumber = document.querySelector('.js-userNumber');
const tipMessage = document.querySelector('.js-tipMessage');
const counter = document.querySelector('.js-counter');

const generateRandomNumber = function (max) {
    console.log('Generando número aleatorio');
    return Math.ceil(Math.random() * max);
}

const randomNumber = generateRandomNumber(100);

const compareNumber = function () {

    const userNumberValue = parseInt(userNumber.value);
    console.log(randomNumber);

    if (userNumberValue > 100) {
        console.log('El número debe estar entre 0 y 100.');
        return tipMessage.innerHTML = 'El número debe estar entre 0 y 100.';
    } else if (userNumberValue === randomNumber) {
        console.log('Has ganado');
        return tipMessage.innerHTML = 'Has ganado campeona!!!';
    } else if (userNumberValue < randomNumber) {
        console.log('Demasiado bajo.');
        return tipMessage.innerHTML = `Demasiado bajo.`;
    } else if (userNumberValue > randomNumber) {
        console.log('Demasiado alto.');
        return tipMessage.innerHTML = `Demasiado alto.`;
    }
}



const handleEvent = function (ev) {
    ev.preventDefault();
    console.log('Previene el evento');
    compareNumber();
};

button.addEventListener('click', handleEvent);