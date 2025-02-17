/**
 * De Tile classe heeft een x, y, size image en een type. Er staan ook
 * functies in die kijken op de tileGrid naar de tiles naast zich, zodat wanneer er 3 op een rij staan er een rij verdwijnt.
 *
 * @author Jordy Teunis
 */

class Tile {

    #x;
    #y;
    #size;
    #image;
    #visible;
    type

    get x() {
        return this.#x;
    }

    set x(value) {
        this.#x = value;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
    }

    get position() {
        return createVector(this.#x, this.#y).mult(this.#size);
    }

    get visible() {
        return this.#visible;
    }

    set visible(value) {
        this.#visible = value;
    }

    get size() {
        return this.#size;
    }

    draw() {
        if (this.#visible) {
            image(this.#image, this.position.x, this.position.y, this.#size, this.#size);
        }
    }

    /**
     * De functie "checkMatch3" checkt voor matches in 6 verschillende richtingen.
     *
     * @author Jordy Teunis
     *
     */

    checkMatch3() {
        this.checkMatch3left();
        this.checkMatch3Right();
        this.checkMatch3MiddleX();
        this.checkMatch3Down();
        this.checkMatch3Up();
        this.checkMatch3MiddleY();
    }

    /**
     * De functie "checkMatch3Left" checkt of er 2 matchende tiles links van de huidige tile staant en
     * als dat zo is verwijst hij ze door naar andere functies.
     * Deze functie wordt hieronder herhaald voor rechts, boven, onder, en het midden.
     *
     * @author Jordy Teunis
     *
     */

    checkMatch3left() {
        if (this.x - 1 >= 2 && this.x - 2 >= 2) {
            if (tileGrid.getTileAtPosition(createVector((this.x - 1) * this.size, this.y * this.size)).type ==
                tileGrid.getTileAtPosition(createVector((this.x - 2) * this.size, this.y * this.size)).type &&
                this.type ==
                tileGrid.getTileAtPosition(createVector((this.x - 1) * this.size, this.y * this.size)).type) {
                console.log('left');
                if (!further) {
                    this.checkTileType();
                    this.tileSpawnLeft();
                    leftFurther = true;
                }
                checkMatch3While = true;
            }
        }
    }

    checkMatch3Right() {
        if (this.x + 1 <= 9 && this.x + 2 <= 9) {
            if (tileGrid.getTileAtPosition(createVector((this.x + 1) * this.size, this.y * this.size)).type ==
                tileGrid.getTileAtPosition(createVector((this.x + 2) * this.size, this.y * this.size)).type &&
                this.type ==
                tileGrid.getTileAtPosition(createVector((this.x + 1) * this.size, this.y * this.size)).type) {
                console.log('right');
                if (!further) {
                    this.checkTileType();
                    this.tileSpawnRight();
                    rightFurther = true;
                }
                checkMatch3While = true;
            }
        }
    }

    checkMatch3MiddleX() {
        if (this.x - 1 >= 2 && this.x + 1 <= 9) {
            if (this.type ==
                tileGrid.getTileAtPosition(createVector((this.x - 1) * this.size, this.y * this.size)).type &&
                this.type ==
                tileGrid.getTileAtPosition(createVector((this.x + 1) * this.size, this.y * this.size)).type) {
                console.log('middleX');
                if (!further) {
                    this.checkTileType();
                    this.tileSpawnMiddleX();
                    middleXFurther = true;
                }
                checkMatch3While = true;
            }
        }
    }

    checkMatch3Up() {
        if (this.y - 1 >= 8 && this.y - 2 >= 8) {
            if (tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y - 1) * this.size)).type ==
                tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y - 2) * this.size)).type &&
                this.type ==
                tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y - 1) * this.size)).type) {
                console.log('up');
                if (!further) {
                    this.checkTileType();
                    this.tileSpawnUp();
                    upFurther = true;
                }
                checkMatch3While = true;
            }
        }
    }

    checkMatch3Down() {
        if (this.y + 1 <= 15 && this.y + 2 <= 15) {
            if (tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y + 1) * this.size)).type ==
                tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y + 2) * this.size)).type &&
                this.type ==
                tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y + 1) * this.size)).type) {
                console.log('down');
                if (!further) {
                    this.checkTileType();
                    this.tileSpawnDown();
                    downFurther = true;
                }
                checkMatch3While = true;
            }
        }
    }


    checkMatch3MiddleY() {
        if (this.y - 1 >= 8 && this.y + 1 <= 15) {
            if (this.type ==
                tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y - 1) * this.size)).type &&
                this.type ==
                tileGrid.getTileAtPosition(createVector(this.x * this.size, (this.y + 1) * this.size)).type) {
                console.log('middleY');
                if (!further) {
                    this.checkTileType();
                    this.tileSpawnMiddleY();
                    middleYFurther = true;
                }
                checkMatch3While = true;
            }
        }
    }


    /**
     * de functie "checkTileType" updates de enemies health and player's health op basis van de type tile
     * en hij zet de player's attack timer op basis van de player zijn image.
     *
     * @author Jordy Teunis
     *
     */
    checkTileType() {
        if (this.type == 'green') {
            enemyHealth -= 10;
            if (playerHealth <= 90 && playerHealth > 80) {
                playerHealth += 10;
            }
            if (playerHealth <= 80) {
                playerHealth += 20;
            }
        }
        if (this.type == 'normal') {
            enemyHealth -= 10;
        }
        if (this.type == 'red') {
            enemyHealth -= 15;
        }
        if (this.type == 'blue') {
            enemyHealth -= 5;
            secondsOfGame += 5;
            console.log('blue')
        }
        if (!playerHurt) {
            playerAttack = true;
        }
        if (!enemyAttack) {
            enemyHurt = true;
        }

        randomAttack = Math.floor(Math.random() * 3) + 1;
        if (adventurerAsset) {
            playerAttackTimer = 50;
        }
        if (skeletonAsset) {
            playerAttackTimer = 150;
        }
        if (knightAsset) {
            playerAttackTimer = 45;
        }
        row3Pling.play();
    }

    /**
     * De functie "tileSpawnLeft" spawnt drie random verschillende types van tiles links van de huidige tile
     * op het grid en checkt daarna meteen weer voor matches van 3.
     * deze functie herhaald hij ook voor rechts, boven, onder en in het midden.
     *
     * @author Jordy Teunis
     *
     */

    tileSpawnLeft() {
        let randomCheckTile1 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile2 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile3 = Math.floor(Math.random() * 4) + 1;

        switch (randomCheckTile1) {
            case 1:
                tileGrid.tiles[this.x][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y)
                break;
        }
        switch (randomCheckTile2) {
            case 1:
                tileGrid.tiles[this.x - 1][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x - 1, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x - 1][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x - 1, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x - 1][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x - 1, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x - 1][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x - 1, this.y)
                break;
        }
        switch (randomCheckTile3) {
            case 1:
                tileGrid.tiles[this.x - 2][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x - 2, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x - 2][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x - 2, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x - 2][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x - 2, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x - 2][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x - 2, this.y)
                break;
        }
        this.checkMatch3();
    }
    tileSpawnRight() {
        let randomCheckTile1 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile2 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile3 = Math.floor(Math.random() * 4) + 1;

        switch (randomCheckTile1) {
            case 1:
                tileGrid.tiles[this.x][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y)
                break;
        }
        switch (randomCheckTile2) {
            case 1:
                tileGrid.tiles[this.x + 1][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x + 1, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x + 1][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x + 1, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x + 1][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x + 1, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x + 1][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x + 1, this.y)
                break;
        }
        switch (randomCheckTile3) {
            case 1:
                tileGrid.tiles[this.x + 2][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x + 2, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x + 2][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x + 2, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x + 2][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x + 2, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x + 2][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x + 2, this.y)
                break;
        }
        this.checkMatch3();
    }
    tileSpawnMiddleX() {
        let randomCheckTile1 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile2 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile3 = Math.floor(Math.random() * 4) + 1;

        switch (randomCheckTile1) {
            case 1:
                tileGrid.tiles[this.x][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y)
                break;
        }
        switch (randomCheckTile2) {
            case 1:
                tileGrid.tiles[this.x - 1][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x - 1, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x - 1][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x - 1, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x - 1][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x - 1, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x - 1][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x - 1, this.y)
                break;
        }
        switch (randomCheckTile3) {
            case 1:
                tileGrid.tiles[this.x + 1][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x + 1, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x + 1][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x + 1, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x + 1][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x + 1, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x + 1][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x + 1, this.y)
                break;
        }
        this.checkMatch3();
    }
    tileSpawnUp() {
        let randomCheckTile1 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile2 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile3 = Math.floor(Math.random() * 4) + 1;

        switch (randomCheckTile1) {
            case 1:
                tileGrid.tiles[this.x][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y)
                break;
        }
        switch (randomCheckTile2) {
            case 1:
                tileGrid.tiles[this.x][this.y - 1] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y - 1)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y - 1] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y - 1)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y - 1] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y - 1)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y - 1] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y - 1)
                break;
        }
        switch (randomCheckTile3) {
            case 1:
                tileGrid.tiles[this.x][this.y - 2] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y - 2)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y - 2] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y - 2)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y - 2] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y - 2)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y - 2] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y - 2)
                break;
        }
        this.checkMatch3();
    }
    tileSpawnDown() {
        let randomCheckTile1 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile2 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile3 = Math.floor(Math.random() * 4) + 1;

        switch (randomCheckTile1) {
            case 1:
                tileGrid.tiles[this.x][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y)
                break;
        }
        switch (randomCheckTile2) {
            case 1:
                tileGrid.tiles[this.x][this.y + 1] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y + 1)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y + 1] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y + 1)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y + 1] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y + 1)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y + 1] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y + 1)
                break;
        }
        switch (randomCheckTile3) {
            case 1:
                tileGrid.tiles[this.x][this.y + 2] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y + 2)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y + 2] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y + 2)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y + 2] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y + 2)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y + 2] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y + 2)
                break;
        }
        this.checkMatch3();
    }
    tileSpawnMiddleY() {
        let randomCheckTile1 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile2 = Math.floor(Math.random() * 4) + 1;
        let randomCheckTile3 = Math.floor(Math.random() * 4) + 1;

        switch (randomCheckTile1) {
            case 1:
                tileGrid.tiles[this.x][this.y] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y)
                break;
        }
        switch (randomCheckTile2) {
            case 1:
                tileGrid.tiles[this.x][this.y - 1] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y - 1)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y - 1] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y - 1)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y - 1] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y - 1)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y - 1] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y - 1)
                break;
        }
        switch (randomCheckTile3) {
            case 1:
                tileGrid.tiles[this.x][this.y + 1] = new BlueTile(gameManager.getImage("saphire"), this.size, this.x, this.y + 1)
                break;
            case 2:
                tileGrid.tiles[this.x][this.y + 1] = new GreenTile(gameManager.getImage("emerald"), this.size, this.x, this.y + 1)
                break;
            case 3:
                tileGrid.tiles[this.x][this.y + 1] = new RedTile(gameManager.getImage("ruby"), this.size, this.x, this.y + 1)
                break;
            case 4:
                tileGrid.tiles[this.x][this.y + 1] = new NormalTile(gameManager.getImage("diamond"), this.size, this.x, this.y + 1)
                break;
        }
        this.checkMatch3();
    }

    constructor(image, size, x, y, type) {
        this.#image = image;
        this.#size = size;
        this.#x = x;
        this.#y = y;
        this.#visible = true;
        this.type = type
    }
}
