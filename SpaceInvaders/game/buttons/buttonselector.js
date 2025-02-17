/** De ButtonSelector classe is een subclasse van ButtonStart die een specifieke image vertoont
*   die ingedrukt kan worden.
*   @author Jordy Teunis
*/
class ButtonSelector extends ButtonStart{

    constructor(buttonSelectorX, buttonSelectorY, width, height) {
        super(width, height)
        this.buttonSelectorX = buttonSelectorX;
        this.buttonSelectorY = buttonSelectorY;
        this.left = this.buttonSelectorX - this.width / 2;
        this.right = this.buttonSelectorX + this.width / 2;
        this.top = this.buttonSelectorY - this.height / 2;
        this.bottom = this.buttonSelectorY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if(!buttonStartPressed){
        image(gameManager.getImage("buttonstart"), this.buttonSelectorX, this.buttonSelectorY, this.width, this.height);
        }
       if(buttonStartPressed){
         image(gameManager.getImage("buttonstartpressed"), this.buttonSelectorX, this.buttonSelectorY, this.width, this.height);
        }

    }
}
