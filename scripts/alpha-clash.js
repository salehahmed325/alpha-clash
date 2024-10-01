//keyboard event function
function keyupEvent(event) {
    const keyPressed = event.key;
    const keyToPress = document.getElementById('alphabet-to-show');
    const keyToBePressed = keyToPress.innerText;
    //point and life calculation
    if (keyPressed == keyToBePressed) {
        //current score
        const score = document.getElementById('score');
        const scoreValue = parseInt(score.innerText);
        const newScore = scoreValue + 1;
        //show current score
        score.innerText = newScore;
        //start second round
        removeHighlightAlphabets(keyToBePressed);
        gameLoop();
    }
    else {
        console.log("no point");
        //current life
        const life = document.getElementById('life');
        const lifeValue = parseInt(life.innerText);
        const newLife = lifeValue - 1;
        //show current life
        life.innerText = newLife;
    }
}

//keyboard event
document.addEventListener('keyup', keyupEvent);

//function for the game
function gameLoop() {
    //get the random alphabet
    const alphabet = getARandomAlphabet();
    //show the random alphabet
    const showAlphabet = document.getElementById('alphabet-to-show');
    showAlphabet.innerText = alphabet;
    //highlight the random alphabet
    highlightAlphabets(alphabet);
}

//function for the home screen play now button
function start() {
    //hide the home screen
    hideElementById('home');
    //show the game screen
    showElementById('play-ground');
    //start the game loop
    gameLoop();
}