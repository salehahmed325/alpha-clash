//function for the game
function gameLoop() {
    //get the random alphabet
    const alphabet = getARandomAlphabet();

    //show the random alphabet
    const showAlphabet = document.getElementById('alphabet-to-show');
    showAlphabet.innerText = alphabet;
}

//function for the home screen play now button
function playNow() {

    //hide the home screen
    hideElementById('home');

    //show the game screen
    showElementById('play-ground');

    //start the game loop
    gameLoop();
}