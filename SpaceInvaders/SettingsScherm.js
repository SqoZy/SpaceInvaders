function settingsScreen(){
    clear();

    imageMode(CORNER);
    background(starsBackground);

    textFont(pixelFont);
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(5);
    textSize(80);
    textAlign(CENTER);
    text('Space Invaders', width / 2, height - 450)
    textSize(55);
    text('Settings', width / 2, height / 2 - 50);
    textSize(40)
    text('Press L to turn off the music', width / 2, height / 2);
    textSize(40)
    text('Press P to turn on the music', width / 2, height / 2 + 50);
    textSize(35)
    text('Use the slider to control the volume', width / 2, height / 2 + 100);
    textSize(25)
    text('Press Backspace to go back', 190, 20);

    slider.position(width / 2 - 100, height / 2 + 110);
    slider.style('width', '200px');
    gameSong.setVolume(slider.value());
    gameOverSong.setVolume(slider.value());
}
