class Player {
    
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // dit is een verkorte vorm van een else if statement die je in de constructor kan gebruiken
        // hier nog docu voor schrijfen

        adventurerAsset ? this.width = 300
            : skeletonAsset ? this.width = 357
                : knightAsset ? this.width = 630
                    : this.width = 300;

        adventurerAsset ? this.height = 222
            : skeletonAsset ? this.height = 259
                : knightAsset ? this.height = 258
                    : this.height = 222;

        console.log(this.width);
        console.log(this.height)
    }


    /**
     * de functie "show" laat verschillende images zien op basis de player gekozen outfit
     * (adventurer, skeleton, or knight) en zijn acties (idle, hurt, or attacking).
     *
     * Gemaakt door: Jordy Teunis
     *
     */
    draw() {
        if (adventurerAsset) {
            imageMode(CENTER)
            if (!playerHurt) {
                if (!playerAttack) {
                    image(gameManager.getImage("playeridle"), this.x, this.y, this.width, this.height)
                }
            }
            if (playerHurt) {
                image(gameManager.getImage("playerhurt"), this.x, this.y, this.width, this.height)
            }
            if (!playerHurt) {
                if (playerAttack) {
                    switch (randomAttack) {
                        case 1:
                            image(gameManager.getImage("playerattack1"), this.x, this.y, this.width, this.height)
                            break;
                        case 2:
                            image(gameManager.getImage("playerattack2"), this.x, this.y, this.width, this.height)
                            break;
                        case 3:
                            image(gameManager.getImage("playerattack3"), this.x, this.y, this.width, this.height)
                            break;
                    }
                    playerAttackTimer--;
                }
            }
            if (playerAttackTimer == 0) {
                playerAttack = false;
                playerAttackTimer = 50;

            }
        }
        if (skeletonAsset) {
            imageMode(CENTER)

            if (!playerHurt) {
                if (!playerAttack) {
                    image(gameManager.getImage("skeletonplayeridle"), this.x, this.y, this.width, this.height)
                }
            }
            if (playerHurt) {
                image(gameManager.getImage("skeletonplayerhurt"), this.x, this.y, this.width, this.height)
            }
            if (playerAttack) {
                switch (randomAttack) {
                    case 1:
                        image(gameManager.getImage("skeletonplayerattack1"), this.x, this.y, this.width, this.height)
                        break;
                    case 2:
                        image(gameManager.getImage("skeletonplayerattack2"), this.x, this.y, this.width, this.height)
                        break;
                    case 3:
                        image(gameManager.getImage("skeletonplayerattack3"), this.x, this.y, this.width, this.height)
                        break;
                }
                playerAttackTimer--;
            }
            if (playerAttackTimer == 0) {
                playerAttack = false;
                playerAttackTimer = 150;

            }
        }
        if (knightAsset) {
            imageMode(CENTER)

            if (!playerHurt) {
                if (!playerAttack) {
                    image(gameManager.getImage("knightplayeridle"), this.x, this.y, this.width, this.height)
                }
            }
            if (playerHurt) {
                image(gameManager.getImage("knightplayerhurt"), this.x, this.y, this.width, this.height)
            }
            if (playerAttack) {
                switch (randomAttack) {
                    case 1:
                        image(gameManager.getImage("knightplayerattack1"), this.x, this.y, this.width, this.height)
                        break;
                    case 2:
                        image(gameManager.getImage("knightplayerattack2"), this.x, this.y, this.width, this.height)
                        break;
                    case 3:
                        image(gameManager.getImage("knightplayerattack3"), this.x, this.y, this.width, this.height)
                        break;
                }
                playerAttackTimer--;
            }
            if (playerAttackTimer == 0) {
                playerAttack = false;
                playerAttackTimer = 45;

            }
        }
    }

}
