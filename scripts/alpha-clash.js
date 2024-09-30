function gameLoop() {
    const alphabet = getARandomAlphabet();
    const showAlphabet = document.getElementById('alphabet');
    showAlphabet.innerText = alphabet;
}

function playNow() {
    hideElementById('home');
    showElementById('play-ground');
    gameLoop();
}