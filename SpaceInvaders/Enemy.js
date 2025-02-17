class Enemy {

  constructor(enemyX, enemyY, canShoot, displayImage) {
    this.enemyX = enemyX;
    this.enemyY = enemyY;
    this.canShoot = canShoot;
    this.displayImage = displayImage;
    this.speed = 0.5;
    this.width = 60;
    this.height = 60;
    this.m = 30;
    this.toDelete = false;
    this.punten;
    this.timeToFire = random(50, 300);
    this.fireTime = 0;
    this.left = enemyX - this.width / 2;
    this.right = enemyX + this.width / 2;
    this.top = enemyY - this.height / 2;
    this.bottom = enemyY + this.height / 2;
  }

  show() {
    image(this.displayImage, this.enemyX, this.enemyY, this.width, this.height);
  }

  disepear() {
    deadenemies += 1;
    this.toDelete = true;
  }

  move() {
    this.enemyX = this.enemyX + this.speed;
    this.hitbox();
  }

  hitbox(){
    this.left = this.enemyX - this.width / 2;
    this.right = this.enemyX + this.width / 2;
    this.top = this.enemyY - this.height / 2;
    this.bottom = this.enemyY + this.height / 2;
  }

  checkCollision(){
    for (let i = 0; i < shields.length; i++) {
        if (this.right > shields[i].left && this.left < shields[i].right && this.bottom > shields[i].top && this.top < shields[i].bottom) {
            this.disepear();
            shields[i].damage();
            shields[i].disepear();
        }
    }
  }

  shiftDown() {
    this.speed *= -1;
    this.enemyY += this.m;
  }

  shoot() {
    if (this.canShoot) {
      this.fireTime++;
      if (this.fireTime >= this.timeToFire) {
        let bulletEnemy = new BulletEnemy(this.enemyX, this.enemyY);
        bulletsEnemy.push(bulletEnemy);
        this.timeToFire = random(50, 300);
        this.fireTime = 0;
      }
      this.punten = 10;
    }
    else {
      this.punten = 5;
    }
  }
}
