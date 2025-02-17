function saveScreen() {
    clear();

    imageMode(CORNER);
    background(starsBackground);

    // onHighScoreRetrieved();

    if (buttonSave.right > mouseX && buttonSave.left < mouseX && buttonSave.bottom > mouseY && buttonSave.top < mouseY && mouseIsPressed == true) {
        if (!saveGeclickt){
        console.log('hit')
        // https://oege.ie.hva.nl/~hofem/blok1/highscore/save.php?game=774639672&name=testman1&score=300

        httpGet(`${saveDataUrl}?game=${gameId}&name=${usernameInput.value()}&score=${punten}`, onHighScoreSaved)
        saveGeclickt = true;
        buttonSavePressed = true;
            if (!eindScherm){
                saved = true;
            }
        }
    }
    buttonSave.show();

    if (buttonBack.right > mouseX && buttonBack.left < mouseX && buttonBack.bottom > mouseY && buttonBack.top < mouseY && mouseIsPressed == true) {
        if (!eindScherm){
        scherm = winScherm;
        }
        if (eindScherm){
        scherm = endScherm;
        }
        usernameInput.remove();
        eindScherm= false;
    }
    buttonBack.show();

    usernameInput.position(width / 4 -80, height / 2 + 50);

    line(width / 2, height - 500, width / 2, height - 50)

    textFont(pixelFont);
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(60);
    text('Leaderbord', width / 2 + 200, height / 2 - 150)
    textSize(60);
    text('your score', width / 4, height / 2 - 150);
    textSize(50)
    text(punten, width / 4, height / 2 - 70);
    textSize(25)
    text("Enter username", width / 4, height / 2);
    textSize(25)
    saveDataJson.forEach((t, index) => {text(t.score,   width / 2 + 300,(index * 50 + 200))})
    textSize(25)
    saveDataJson.forEach((t, index) => {text(t.name,   width / 2 + 100,(index * 50 + 200))})
}
