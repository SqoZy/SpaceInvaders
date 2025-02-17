class Enemy2 extends Enemy {
    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.height = height;
        this.height = 404
    }

    draw() {
        if (!enemyHurt) {
            if (!enemyAttack) {
                imageMode(CENTER)
                image(gameManager.getImage("shroomidle"), this.x, this.y, this.width, this.height)
                enemyHurtTimer = 40;
                enemyAttackTimer = 80;
            }
        }
        if (!enemyAttack) {
            if (enemyHurt) {
                imageMode(CENTER)
                image(gameManager.getImage("shroomhurt"), this.x, this.y, this.width, this.height)
                enemyHurtTimer--;
            }
        }
        if (enemyHurtTimer == 0) {
            enemyHurt = false;
        }
        if (enemyAttack) {
            imageMode(CENTER)
            image(gameManager.getImage("shroomattack"), this.x, this.y, this.width, this.height)
            enemyAttackTimer--;
        }
        if (enemyAttackTimer == 0) {
            enemyAttack = false;
        }
    }
}
