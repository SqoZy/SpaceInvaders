class Boss{
    constructor (bossX, bossY, bulletBossLeft, bulletBossRight) {
        this.bossX = bossX;
        this.bossY = bossY;
        this.width = 300;
        this.height = 300;
        this.speed = 2;
        this.toDelete = false;
        this.timeToFire = random(50, 300);
        this.fireTime = 0;
        this.left = bossX - this.width / 2;
        this.right = bossX + this.width / 2;
        this.top = bossY - this.height / 2;
        this.bottom = bossY + this.height / 2;
    }
    show() {
        image(greenBoss, this.bossX, this.bossY, this.width, this.height);
    }

    disepear() {
        this.toDelete = true;
    }

    move() {
        this.bossX = this.bossX += this.speed;
        this.hitbox();
        if (this.bossX > width - 135  || this.bossX < + 125 ) {
             this.speed *= -1;
        }
    }

    hitbox(){
        this.left = this.bossX - this.width / 2;
        this.right = this.bossX + this.width / 2;
        this.top = this.bossY - this.height / 2;
        this.bottom = this.bossY + this.height / 2;
     }

    shoot() {
        this.fireTime++;
        if (this.fireTime >= this.timeToFire) {
           let bulletBoss = new BulletBossRechts(this.bossX + 100, this.bossY + 75);
           bulletsBoss.push(bulletBoss);
        }
        if (this.fireTime >= this.timeToFire) {
            let bulletBoss = new BulletBossLinks(this.bossX + 100, this.bossY + 75);
            bulletsBoss.push(bulletBoss);
        }
        if (this.fireTime >= this.timeToFire) {
            let bulletBoss = new BulletBoss(this.bossX + 100, this.bossY + 75);
            bulletsBoss.push(bulletBoss);
        }
        if (this.fireTime >= this.timeToFire) {
            let bulletBoss = new BulletBossRechts(this.bossX - 100, this.bossY + 75);
            bulletsBoss.push(bulletBoss);
        }
        if (this.fireTime >= this.timeToFire) {
            let bulletBoss = new BulletBossLinks(this.bossX - 100, this.bossY + 75);
            bulletsBoss.push(bulletBoss);
        }
        if (this.fireTime >= this.timeToFire) {
            let bulletBoss = new BulletBoss(this.bossX - 100, this.bossY+ 75);
            bulletsBoss.push(bulletBoss);
            this.timeToFire = random(50, 300);
            this.fireTime = 0;
        }
    }
}
