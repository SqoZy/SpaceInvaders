function Level_2(){


    clear();

    imageMode(CORNER)
    background(gameManager.getImage("treebackground"));

    textSize(50)
    fill(123, 158, 63)
    stroke(0)
    strokeWeight(7);
    textAlign(CENTER)
    text(`level 2`, 150, 130)
    textAlign(LEFT)

    noStroke();
    tileGrid.draw();
    enemy2.draw();
    player.draw();
    updatePlayerHealth(playerHealth, playerMaxHealth);
    updateEnemyHealth(enemyHealth,enemyMaxHealth);
    displaymoves();
    timergame();
    buttonPauze.show();
}
