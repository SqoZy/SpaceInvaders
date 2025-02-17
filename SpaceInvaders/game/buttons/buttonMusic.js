/** De ButtonMusic classe is een subclasse van ButtonHome die een specifieke image vertoont en die verandert
*   wanneer de muziek op pauze staat.
*   @author Jordy Teunis
*/
class ButtonMusic extends ButtonHome {
    constructor(buttonMusicX, buttonMusicY, width, height) {
        super(width, height)
        this.buttonMusicX = buttonMusicX;
        this.buttonMusicY = buttonMusicY;
        this.left = this.buttonMusicX - this.width / 2;
        this.right = this.buttonMusicX + this.width / 2;
        this.top = this.buttonMusicY - this.height / 2;
        this.bottom = this.buttonMusicY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if (!musicPauzed) {
            if (!buttonMusicPressed) {
                image(gameManager.getImage("buttonpauze"), this.buttonMusicX, this.buttonMusicY, this.width, this.height);
            }
            if (buttonMusicPressed) {
                image(gameManager.getImage("buttonpauzepressed"), this.buttonMusicX, this.buttonMusicY, this.width, this.height);
            }
        }
        if(musicPauzed){
            if (!buttonMusicPressed) {
                image(gameManager.getImage("buttonmusic"), this.buttonMusicX, this.buttonMusicY, this.width, this.height);
            }
            if (buttonMusicPressed) {
                image(gameManager.getImage("buttonmusicpressed"), this.buttonMusicX, this.buttonMusicY, this.width, this.height);
            }
        }

    }
}
