class Enemy {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.width = 660;
        this.height = 660;

    }

    /**
     * de draw functie tekent een image zien van een monster.
     */
    draw() {
        if (!enemyHurt) {
            if (!enemyAttack) {
                imageMode(CENTER)
                image(gameManager.getImage("nightborneidle"), this.x, this.y, this.width, this.height)
                enemyHurtTimer = 35;
                enemyAttackTimer = 84;
            }
        }
        if (!enemyAttack) {
            if (enemyHurt) {
                imageMode(CENTER)
                image(gameManager.getImage("nightbornehurt"), this.x, this.y, this.width, this.height)
                enemyHurtTimer--;
            }
        }
        if (enemyHurtTimer == 0) {
            enemyHurt = false;
        }
        if (enemyAttack) {
            imageMode(CENTER)
            image(gameManager.getImage("nightborneattack"), this.x, this.y, this.width, this.height)
            enemyAttackTimer--;
        }
        if (enemyAttackTimer == 0) {
            enemyAttack = false;
        }
    }
}
