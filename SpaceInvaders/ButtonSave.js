class ButtonSave{

    constructor (buttonSaveX, buttonSaveY) {
        this.buttonSaveX = buttonSaveX;
        this.buttonSaveY = buttonSaveY;
        this.width = 88,5;
        this.height = 27,5;
        this.left = this.buttonSaveX - this.width / 2;
        this.right = this.buttonSaveX + this.width / 2;
        this.top = this.buttonSaveY - this.height / 2;
        this.bottom = this.buttonSaveY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        if (!buttonSavePressed) {
        image(buttonSaveNotPressed, this.buttonSaveX, this.buttonSaveY, this.width, this.height);
        }
        if (buttonSavePressed) {
        image(buttonSavepr, this.buttonSaveX, this.buttonSaveY, this.width, this.height);
        }
    }

    hitbox(){
        this.left = this.buttonSaveX - this.width / 2;
        this.right = this.buttonSaveX + this.width / 2;
        this.top = this.buttonSaveY - this.height / 2;
        this.bottom = this.buttonSaveY + this.height / 2;
    }
}
