class BulletBossLinks{

    constructor (bulletBossX, bulletBossY) {
        this.bulletBossX = bulletBossX;
        this.bulletBossY = bulletBossY;
        this.width = 20;
        this.height = 25;
        this.speed = 4;
        this.toDelete = false;
        this.left = bulletBossX - this.width / 2;
        this.right = bulletBossX + this.width / 2;
        this.top = bulletBossY - this.height / 2;
        this.bottom = bulletBossY + this.height / 2;
    }

    show() {
        noStroke();
        image (greenBossBullet, this.bulletBossX, this.bulletBossY, this.width, this.height);
     }

    disepear(){
        this.toDelete = true;
    }

    move() {
        this.bulletBossY = this.bulletBossY += this.speed;
        this.bulletBossX = this.bulletBossX -= this.speed;
        this.hitbox();
    }

    hitbox(){
        this.left = this.bulletBossX - this.width / 2;
        this.right = this.bulletBossX + this.width / 2;
        this.top = this.bulletBossY - this.height / 2;
        this.bottom = this.bulletBossY + this.height / 2;
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
