function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){

    //create a array of all 16 alphabets
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //generate random numbers from 0-25
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);
    return alphabets[randomIndex];
}