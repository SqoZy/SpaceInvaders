/**
 * De functie "TutorialScreen" laat een tutorial scherm zien met text en images om uit te leggen wat alles doet in de game.
 *
 */
function TutorialScreen() {
    
    clear();

    imageMode(CORNER)
    background(gameManager.getImage("treebackground"));

    textAlign(CENTER);
    textFont(font);
    textSize(100)
    fill(123, 158, 43)
    stroke(0);
    strokeWeight(7);
    text(`tutorial`, width / 2, 200)
    textAlign(LEFT)

    textSize(40)
    text(`This is a normal gem it gives`, 5, 340)
    text(`normal damage to the enemy.`, 5, 390)
    image(gameManager.getImage("diamond"), width - 200, 300, 100, 100)
    text(`This is a red gem it gives heavy`, 5, 540)
    text(`damage to the enemy.`, 5, 590)
    image(gameManager.getImage("ruby"), width - 200, 500, 100, 100)
    text(`This is a green gem it gives`, 5, 740)
    text(`light damage to the enemy and`, 5, 790)
    text(`heals the player.`, 5, 840)
    image(gameManager.getImage("emerald"), width - 200, 700, 100, 100)
    text(`This is a purple gem it gives`, 5, 940)
    text(`light damage to the enemy and`, 5, 990)
    text(`gives you 3 seconds extra time.`, 5, 1040)
    image(gameManager.getImage("saphire"), width - 200, 900, 100, 100)
    text(`This is Daren who is clearing the`, 5, 1140)
    text(`forest of monsters. Defeat`, 5, 1190)
    text(`them all and win the game.`, 5, 1240)
    image(gameManager.getImage("playeridle"), width - 300, 1050, 300, 222)
    text(`This is Darens health you get`, 5, 1340)
    text(`damage every 10 seconds`, 5, 1390)
    text(`because the forest is poisonous.`, 5, 1440)

    rectMode(CORNER)
    noStroke();
    fill(0, 150, 255)
    rect(width - 230, 1350, map(playerHealth, 0, playerMaxHealth, 0, 200), 17);
    stroke(0);
    strokeWeight(6);
    noFill();
    rect(width - 230, 1350, 200, 20);

    strokeWeight(7);
    fill(123, 158, 43)
    text(`This is a slime monster it is`, 5, 1540)
    text(`very slimy.`, 5, 1590)
    image(gameManager.getImage("Slime"), width - 200, 1450, 100, 150)
    text(`This is the enemies health`, 5, 1690)
    text(`when it is empty the enemy`, 5, 1740)
    text(`is defeated.`, 5, 1790)

    rectMode(CORNER)
    noStroke();
    fill(255, 0, 0)
    rect(width - 230, 1700, map(enemyHealth, 0, enemyMaxHealth, 100, 200), 17);
    stroke(0);
    strokeWeight(6);
    noFill();
    rect(width - 230, 1700, 200, 20);



    buttonTutorialStart = new ButtonStart(width / 2, height - 150);
    buttonTutorialStart.show();


}
