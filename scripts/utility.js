//Hide the screen
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

//Show the screen
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//Get the elements value
function getElementsValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

//Set the elements value
function setElementsValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

//Get element text
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
}

//Highlight the random alphabet
function highlightAlphabets(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('highlight-alphabet');
}

//Remove the highlight from alphabet
function removeHighlightAlphabets(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('highlight-alphabet');
}

//Generate random alphabet for playground
function getARandomAlphabet() {
    //Create a array of all 16 alphabets
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');
    //Generate random number from 0-25
    const randomNumber = Math.random() * 26;
    const randomIndex = Math.round(randomNumber);
    //Return the random number as the index of the alphabets array
    return alphabets[randomIndex];
}