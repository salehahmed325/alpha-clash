//keyboard event function
function keyupEvent(event) {
    const keyPressed = event.key;
    const keyToPress = document.getElementById('alphabet-to-show');
    const keyToBePressed = keyToPress.innerText;
    //point and life calculation
    if (keyPressed == keyToBePressed) {
        //current score
        const score = getElementsValueById('score');
        //increase score
        const newScore = score + 1;
        //show new score
        setElementsValueById('score', newScore);
        //start second round
        removeHighlightAlphabets(keyToBePressed);
        gameLoop();
    }
    else {
        //current life
        const life = getElementsValueById('life');
        //decrease life
        const newLife = life - 1;
        //show current life
        setElementsValueById('life', newLife);
        if (newLife === 0) {
            //show the final score screen
            gameOver();
        }
    }

    //press Esc to stop the game
    if (keyPressed == 'Escape') {
        gameOver();
    }
}

//keyboard event
document.addEventListener('keyup', keyupEvent);

//function for the game
function gameLoop() {
    //get the random alphabet
    const alphabet = getARandomAlphabet();
    //show the random alphabet
    setElementsValueById('alphabet-to-show', alphabet);
    //highlight the random alphabet
    highlightAlphabets(alphabet);
}

//function for the home screen play now button
function start() {
    //hide the home screen
    hideElementById('home');
    //hide the final score screen
    hideElementById('final-score');
    //show the game screen
    showElementById('play-ground');
    //reset life and score
    setElementsValueById('life', 5);
    setElementsValueById('score', 0);
    //start the game loop
    gameLoop();
}

//game over function
function gameOver() {
    //hide the playground  screen
    hideElementById('play-ground');
    //show the game over screen
    showElementById('final-score');
    //show the total score
    const totalScore = getElementsValueById('score')
    setElementsValueById('total-score', totalScore);
    //remove the last highlight from alphabet
    const lastAlphabet = getElementTextById('alphabet-to-show');
    removeHighlightAlphabets(lastAlphabet);
}