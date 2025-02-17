class BulletEnemy{

    constructor (bulletEnemyX, bulletEnemyY) {
        this.bulletEnemyX = bulletEnemyX;
        this.bulletEnemyY = bulletEnemyY;
        this.width = 10;
        this.height = 20;
        this.speed = 8;
        this.toDelete = false;
        this.left = bulletEnemyX - this.width / 2;
        this.right = bulletEnemyX + this.width / 2;
        this.top = bulletEnemyY - this.height / 2;
        this.bottom = bulletEnemyY + this.height / 2;
    }

    show() {
        noStroke();
        image(enemyBullet, this.bulletEnemyX, this.bulletEnemyY, this.width, this.height);
     }

    disepear(){
        this.toDelete = true;
    }

    move() {
        this.bulletEnemyY = this.bulletEnemyY += this.speed;
        this.hitbox();
    }

    hitbox(){
        this.left = this.bulletEnemyX - this.width / 2;
        this.right = this.bulletEnemyX + this.width / 2;
        this.top = this.bulletEnemyY - this.height / 2;
        this.bottom = this.bulletEnemyY + this.height / 2;
    }

    checkCollision(){
        if (this.right > player.left && this.left < player.right && this.bottom > player.top && this.top < player.bottom) {
            this.disepear();
            levens -= 1;
        }
        for (let i = 0; i < shields.length; i++) {
            if (this.right > shields[i].left && this.left < shields[i].right && this.bottom > shields[i].top && this.top < shields[i].bottom) {
                this.disepear();
                shields[i].damage();
                shields[i].disepear();
            }
        }


    }
}
