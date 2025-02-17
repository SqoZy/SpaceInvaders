/** De ButtonLeft classe vertoon een specefieke image die kan worden ingedrukt
*   @author Jordy Teunis
*/
class ButtonLeft {
    constructor(buttonLeftX, buttonLeftY, width, height) {
        this.buttonLeftX = buttonLeftX;
        this.buttonLeftY = buttonLeftY;
        this.width = width;
        this.height = height;
        this.width = 76.5;
        this.height = 78;
        this.left = this.buttonLeftX - this.width / 2;
        this.right = this.buttonLeftX + this.width / 2;
        this.top = this.buttonLeftY - this.height / 2;
        this.bottom = this.buttonLeftY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if(!buttonLeftPressed){
        image(gameManager.getImage("buttonleft"), this.buttonLeftX, this.buttonLeftY, this.width, this.height);
        }
        if(buttonLeftPressed){
            image(gameManager.getImage("buttonleftpressed"), this.buttonLeftX, this.buttonLeftY, this.width, this.height);
        }

    }
}
