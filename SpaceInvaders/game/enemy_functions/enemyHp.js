function updateEnemyHealth(enemyHealth, enemyMaxHealth) {
    rectMode(CORNER)
    noStroke();
    fill(255, 0, 0)
    rect(enemy.x - 100, enemy.y - 200, map(enemyHealth, 0, enemyMaxHealth, 0, 200), 17);
    stroke(0);
    strokeWeight(6);
    noFill();
    rect(enemy.x - 100, enemy.y - 200, 200, 20);
}
