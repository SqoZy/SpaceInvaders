function updatePlayerHealth(playerHealth, playerMaxHealth) {

    rectMode(CORNER)
    noStroke();
    fill(0, 150, 255)
    rect(player.x - 100, player.y - 200 - 40, map(playerHealth, 0, playerMaxHealth, 0, 200), 17);
    stroke(0);
    strokeWeight(6);
    noFill();
    rect(player.x - 100, player.y - 200 - 40, 200, 20);

}
