//Keyboard event function
function keyupEvent(event) {
    const keyPressed = event.key;
    const keyToPress = document.getElementById('alphabet-to-show');
    const keyToBePressed = keyToPress.innerText;
    
    //Point and life calculation
    if (keyPressed == keyToBePressed) {
        //Current score
        const score = getElementsValueById('score');
        //Increase score
        const newScore = score + 1;
        //Show new score
        setElementsValueById('score', newScore);

        //Start second round
        //Remove previous highlight
        removeHighlightAlphabets(keyToBePressed);
        //Continue game
        gameLoop();
    }
    else {
        //Current life
        const life = getElementsValueById('life');
        //Decrease life
        const newLife = life - 1;
        //Show current life
        setElementsValueById('life', newLife);
        
        //If life is zero, game over
        if (newLife === 0) {
            //Show the final score screen
            gameOver();
        }
    }

    //Press Esc to stop the game
    if (keyPressed == 'Escape') {
        gameOver();
    }
}

//Keyboard event
document.addEventListener('keyup', keyupEvent);

//Function for the game
function gameLoop() {
    //Get the random alphabet
    const alphabet = getARandomAlphabet();
    //Show the random alphabet
    setElementsValueById('alphabet-to-show', alphabet);
    //Highlight the random alphabet
    highlightAlphabets(alphabet);
}

//Function for the home screen play now button
function start() {
    //Hide the home screen
    hideElementById('home');
    //Hide the final score screen
    hideElementById('final-score');
    //Show the game screen
    showElementById('play-ground');
    //Reset life and score
    setElementsValueById('life', 5);
    setElementsValueById('score', 0);
    //Start the game loop
    gameLoop();
}

//Game over function
function gameOver() {
    //Hide the playground  screen
    hideElementById('play-ground');
    //Show the game over screen
    showElementById('final-score');
    //Show the total score
    const totalScore = getElementsValueById('score')
    setElementsValueById('total-score', totalScore);
    //Remove the last highlight from alphabet
    const lastAlphabet = getElementTextById('alphabet-to-show');
    removeHighlightAlphabets(lastAlphabet);
}