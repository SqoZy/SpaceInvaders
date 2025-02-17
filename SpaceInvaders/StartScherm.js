function startScreen(){
    clear();

    imageMode(CORNER);
    background(starsBackground);

    textFont(pixelFont);
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(5);
    textAlign(CENTER);
    textSize(80);
    text('Space Invaders', width / 2, height - 450)
    textSize(55);
    text('Press enter to start', width / 2, height / 2 - 50);
    textSize(40);
    text('Press S to go to settings', width / 2, height / 2 + 50);
}
