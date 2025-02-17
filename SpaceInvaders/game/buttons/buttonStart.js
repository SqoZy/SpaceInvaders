/** De ButtonStart classe vertoont een specifieke image die ingedrukt kan worden.
*   @author Jordy Teunis
*/
class ButtonStart {

    constructor(buttonStartX, buttonStartY, width, height) {
        this.buttonStartX = buttonStartX;
        this.buttonStartY = buttonStartY;
        this.width = width;
        this.height = height;
        this.width = 333;
        this.height = 144;
        this.left = this.buttonStartX - this.width / 2;
        this.right = this.buttonStartX + this.width / 2;
        this.top = this.buttonStartY - this.height / 2;
        this.bottom = this.buttonStartY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if(!buttonStartPressed){
        image(gameManager.getImage("buttonstart"), this.buttonStartX, this.buttonStartY, this.width, this.height);
        }
       if(buttonStartPressed){
         image(gameManager.getImage("buttonstartpressed"), this.buttonStartX, this.buttonStartY, this.width, this.height);
        }

    }
}
