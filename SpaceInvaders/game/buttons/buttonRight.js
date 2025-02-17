/** De ButtonRight classe is een subclasse van ButtonLeft die een specifieke image vertoont
*   die ingedrukt kan worden.
*   @author Jordy Teunis
*/
class ButtonRight extends ButtonLeft{
    constructor(buttonRightX, buttonRightY, width, height) {
        super(width, height)
        this.buttonRightX = buttonRightX;
        this.buttonRightY = buttonRightY;
        this.left = this.buttonRightX - this.width / 2;
        this.right = this.buttonRightX + this.width / 2;
        this.top = this.buttonRightY - this.height / 2;
        this.bottom = this.buttonRightY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if(!buttonRightPressed){
        image(gameManager.getImage("buttonright"), this.buttonRightX, this.buttonRightY, this.width, this.height);
        }
        if(buttonRightPressed){
            image(gameManager.getImage("buttonrightpressed"), this.buttonRightX, this.buttonRightY, this.width, this.height);
        }

    }
}
