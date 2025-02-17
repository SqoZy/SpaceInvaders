class ButtonBack{

    constructor (buttonBackX, buttonBackY) {
        this.buttonBackX = buttonBackX;
        this.buttonBackY = buttonBackY;
        this.width = 88,5;
        this.height = 27,5;
        this.left = this.buttonBackX - this.width / 2;
        this.right = this.buttonBackX + this.width / 2;
        this.top = this.buttonBackY - this.height / 2;
        this.bottom = this.buttonBackY + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        image(buttonBackNotPressed, this.buttonBackX, this.buttonBackY, this.width, this.height);

    }

    hitbox(){
        this.left = this.buttonBackX - this.width / 2;
        this.right = this.buttonBackX + this.width / 2;
        this.top = this.buttonBackY - this.height / 2;
        this.bottom = this.buttonBackY + this.height / 2;
    }
}
