/** De ButtonSetting classe is een subclasse van ButtonStart die een specifieke image vertoont
*   die ingedrukt kan worden.
*   @author Jordy Teunis
*/
class ButtonSetting extends ButtonStart{
    constructor(buttonSettingX, buttonSettingY, width, height){
        super(width, height)
        this.buttonSettingX = buttonSettingX
        this.buttonSettingY = buttonSettingY
        this.left = this.buttonSettingX - this.width / 2;
        this.right = this.buttonSettingX + this.width / 2;
        this.top = this.buttonSettingY - this.height / 2;
        this.bottom = this.buttonSettingY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if(!buttonSettingPressed){
        image(gameManager.getImage("buttonsetting"), this.buttonSettingX, this.buttonSettingY, this.width, this.height);
        }
        if(buttonSettingPressed){
            image(gameManager.getImage("buttonsettingpressed"), this.buttonSettingX, this.buttonSettingY, this.width, this.height);
        }

    }
}
