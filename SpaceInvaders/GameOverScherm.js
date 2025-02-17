function gameOverScreen() {
    clear();

    imageMode(CORNER);
    background(starsBackground);
    gameSong.stop();
    if (playSong) {
      if (playGameOverSong) {
        gameOverSong.play();
        playGameOverSong = false;
      }
    }

    textFont(pixelFont);
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(80);
    text('Game over', width / 2, height - 450)
    textSize(55);
    text('Press enter to play again', width / 2, height / 2 - 50);
    textSize(40)
    text('score board', width / 2, height / 2 + 100);
    textSize(40)
    text(punten, width / 2, height / 2 + 150);
    textSize(25)
    text('Press Backspace to go back', 190, 20);
}
