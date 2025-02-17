/**
* De Enemy3 class is een subclass van de Enemy class die een slime image heeft met een specifieke
* width en height.
* @author ramon en jordy
*/
class Enemy3 extends Enemy {
    constructor(x, y, width, height) {
        super(x, y)
        this.width = width;
        this.height = height;
        this.width = 200;
        this.height = 300;

    }

    draw() {
        imageMode(CENTER)
        image(gameManager.getImage("Slime"), this.x, this.y, this.width, this.height)
    }
}
