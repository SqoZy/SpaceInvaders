class Bullet{

    constructor (bulletX, bulletY) {
        this.bulletX = bulletX;
        this.bulletY = bulletY;
        this.width = 10;
        this.height = 20;
        this.speed = 10;
        this.toDelete = false;
        this.left = bulletX - this.width / 2;
        this.right = bulletX + this.width / 2;
        this.top = bulletY - this.height / 2;
        this.bottom = bulletY + this.height / 2;
    }

    show() {
        noStroke();
        image(playerBullet, this.bulletX, this.bulletY, this.width, this.height);
    }

    disepear(){
        this.toDelete = true;
    }

    move() {
        this.bulletY = this.bulletY -= this.speed;
        this.hitbox();
    }

    hitbox(){
        this.left = this.bulletX - this.width / 2;
        this.right = this.bulletX + this.width / 2;
        this.top = this.bulletY - this.height / 2;
        this.bottom = this.bulletY + this.height / 2;
    }

    checkCollision(){
        if (scherm == bossScherm)
        if (this.right > boss.left && this.left < boss.right && this.bottom > boss.top && this.top < boss.bottom) {
            this.disepear();
            bosslevens -= 1
        }
        for (let i = 0; i < enemies.length; i++) {
            if (this.right > enemies[i].left && this.left < enemies[i].right && this.bottom > enemies[i].top && this.top < enemies[i].bottom) {
                this.disepear();
                enemies[i].disepear();
                if (enemies[i].punten == 10) {
                    punten += 10;

                }
                if (enemies[i].punten == 5) {
                    punten += 5;
                }
            }
        }
        for (let i = 0; i < shields.length; i++) {
            if (this.right > shields[i].left && this.left < shields[i].right && this.bottom > shields[i].top && this.top < shields[i].bottom) {
                this.disepear();
                shields[i].damage();
                shields[i].disepear();
            }
        }
        for (let i = 0; i < bulletsEnemy.length; i++) {
            if (this.right > bulletsEnemy[i].left && this.left < bulletsEnemy[i].right && this.bottom > bulletsEnemy[i].top && this.top < bulletsEnemy[i].bottom) {
                this.disepear();
                bulletsEnemy[i].disepear();
                punten += 1;
            }
        }
        for (let i = 0; i < ufos.length; i++) {
            if (this.right > ufos[i].left && this.left < ufos[i].right && this.bottom > ufos[i].top && this.top < ufos[i].bottom) {
                this.disepear();
                ufos[i].disepear();
                if(ufos[i].puntenUfo == 60) {
                    punten += 60;
                }
            }
        }

    }
}
