/** De ButtonBack classe is een subclasse van ButtonStart die een specifieke image vertoont
*   die ingedrukt kan worden.
*   @author Jordy Teunis
*/
class ButtonBack extends ButtonStart{
    constructor(buttonBackX, buttonBackY, width, height) {
        super(width, height)
        this.buttonBackX = buttonBackX;
        this.buttonBackY = buttonBackY;
        this.left = this.buttonBackX - this.width / 2;
        this.right = this.buttonBackX + this.width / 2;
        this.top = this.buttonBackY - this.height / 2;
        this.bottom = this.buttonBackY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if (!buttonBackPressed) {
            image(gameManager.getImage("buttonback"), this.buttonBackX, this.buttonBackY, this.width, this.height);
        }
        if (buttonBackPressed) {
            image(gameManager.getImage("buttonbackpressed"), this.buttonBackX, this.buttonBackY, this.width, this.height);
        }

    }
}
