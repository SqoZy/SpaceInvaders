function endScreen() {
    clear();

    bosslevens = 1;

    imageMode(CORNER);
    background(starsBackground);

    textFont(pixelFont);
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(80);
    text('Game completed', width / 2, height - 450)
    textSize(50);
    text('Press enter to play again', width / 2, height / 2 - 50);
    textSize(40)
    text('Press esc to go to the settings', width / 2, height / 2 + 50);
    textSize(40)
    text('score board', width / 2, height / 2 + 100);
    textSize(40)
    text(punten, width / 2, height / 2 + 150);
    textSize(40)
    text('press S to save your score', width / 2, height / 2 + 200);
    textSize(25)
    text('Press Backspace to go back', 190, 20)
}
