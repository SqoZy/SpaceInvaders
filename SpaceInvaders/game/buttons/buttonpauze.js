/** De ButtonPauze classe is een subclasse van ButtonHome die een specifieke image vertoont
*   die ingedrukt kan worden.
*   @author Jordy Teunis
*/
class ButtonPauze extends ButtonHome{
    constructor(buttonPauzeX, buttonPauzeY, width, height) {
        super(width, height)
        this.buttonPauzeX = buttonPauzeX;
        this.buttonPauzeY = buttonPauzeY;
        this.left = this.buttonPauzeX - this.width / 2;
        this.right = this.buttonPauzeX + this.width / 2;
        this.top = this.buttonPauzeY - this.height / 2;
        this.bottom = this.buttonPauzeY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if (!buttonPauzePressed) {
            image(gameManager.getImage("buttonpauze"), this.buttonPauzeX, this.buttonPauzeY, this.width, this.height);
        }
        if (buttonPauzePressed) {
            image(gameManager.getImage("buttonpauzepressed"), this.buttonPauzeX, this.buttonPauzeY, this.width, this.height);
        }

    }
}
