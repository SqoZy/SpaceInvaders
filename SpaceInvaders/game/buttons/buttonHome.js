/** De ButtonHome classe vertoon een specefieke image die kan worden ingedrukt
*   @author Jordy Teunis
*/
class ButtonHome {
    constructor(buttonHomeX, buttonHomeY) {
        this.buttonHomeX = buttonHomeX;
        this.buttonHomeY = buttonHomeY;
        this.width = 102;
        this.height = 104;
        this.left = this.buttonHomeX - this.width / 2;
        this.right = this.buttonHomeX + this.width / 2;
        this.top = this.buttonHomeY - this.height / 2;
        this.bottom = this.buttonHomeY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if (!buttonHomePressed) {
            image(gameManager.getImage("buttonhome"), this.buttonHomeX, this.buttonHomeY, this.width, this.height);
        }
        if (buttonHomePressed) {
            image(gameManager.getImage("buttonhomepressed"), this.buttonHomeX, this.buttonHomeY, this.width, this.height);
        }

    }
}
