//hide the home screen
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

//show the playground screen
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//highlight the random alphabet
function highlightAlphabets(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('highlight-alphabet');
}

//remove the highlight from alphabet
function removeHighlightAlphabets(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('highlight-alphabet');
}

//generate random alphabet for playground
function getARandomAlphabet(){

    //create a array of all 16 alphabets
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');

    //generate random number from 0-25
    const randomNumber = Math.random() * 26;
    const randomIndex = Math.round(randomNumber);

    //return the random number as the index of the alphabets array
    return alphabets[randomIndex];
}