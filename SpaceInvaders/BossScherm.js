function bossScreen(){
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
    updatebosshealth(bosslevens, maxBossLevens);

    boss.show();
    boss.shoot();
    boss.move();  

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

    for (let i = 0; i < shields.length; i++) {
      shields[i].show();
      if (shields[i].toDelete) {
        shields.splice(i, 1);
      }
    }

    for (let i = 0; i < bulletsBoss.length; i++) {
      bulletsBoss[i].show();
      bulletsBoss[i].move();
      bulletsBoss[i].checkCollision();
      if (bulletsBoss[i].toDelete) {
        bulletsBoss.splice(i, 1);
      }
    }
}
