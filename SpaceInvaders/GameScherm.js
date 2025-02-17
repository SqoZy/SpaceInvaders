function gameScreen() {
    clear();

    imageMode(CORNER);
    background(starsBackground);
    imageMode(CENTER);

    textFont(bubleFont);
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(2);
    textAlign(CENTER);
    textSize(15)
    text(levens, 80, 13);
    textSize(15)
    text('lives:', 35, 13);
    textSize(15)
    text(punten, 783, 13);
    textSize(15)
    text('points:', 722, 13);

    player.move();
    player.draw();

    apear();

    for (let i = 0; i < bullets.length; i++) {
      bullets[i].show();
      bullets[i].move();
      bullets[i].checkCollision();
      if (bullets[i].toDelete) {
        bullets.splice(i, 1);
        shooting = false;
      }
      else if (bullets[i].bulletY === 0) {
        bullets[i].disepear();
      }
    }

    for (let i = 0; i < bulletsEnemy.length; i++) {
      bulletsEnemy[i].show();
      bulletsEnemy[i].move();
      bulletsEnemy[i].checkCollision();
    }

    for (let i = bulletsEnemy.length - 1; i >= 0; i--) {
      if (bulletsEnemy[i].toDelete) {
        bulletsEnemy.splice(i, 1);
      }
    }

    for (let i = 0; i < shields.length; i++) {
      shields[i].show();
      if (shields[i].toDelete) {
        shields.splice(i, 1);
      }
    }

    let ufoNaarRechts = false;
    for (let i = 0; i < ufos.length; i++) {
      ufos[i].show();
      ufos[i].move();
      if (ufos[i].toDelete) {
        ufos.splice(i, 1);
      }
      else if (ufos[i].ufoX > width + 150  || ufos[i].ufoX < - 150 ) {
      ufoNaarRechts = true;
      }
    }
    if (ufoNaarRechts) {
      for (let i = 0; i < ufos.length; i++) {
        ufos[i].otherDirection();
      }
    }

    let edge = false;
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].show();
      enemies[i].move();
      enemies[i].checkCollision();
      enemies[i].shoot();
      if (enemies[i].toDelete) {
        enemies.splice(i, 1);
      }
      else if (enemies[i].enemyX > width - 60 / 2 || enemies[i].enemyX < 60 / 2) {
        edge = true;
      }
      else if (enemies[i].enemyY > height - 50) {
        scherm = gameOverScherm;
      }
    }
    if (edge) {
      for (let i = 0; i < enemies.length; i++) {
        enemies[i].shiftDown();
      }
    }
}
