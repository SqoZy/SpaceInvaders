class Buttonlevel2 extends Buttonlevel1 {
    
    constructor(buttonLevel2X, buttonLevel2Y, width, height) {
        super(width, height)
        this.buttonLevel2X = buttonLevel2X;
        this.buttonLevel2Y = buttonLevel2Y;
        this.width = width;
        this.height = height;
        this.width = 170;
        this.height = 170;
        this.left = this.buttonLevel2X - this.width / 2;
        this.right = this.buttonLevel2X + this.width / 2;
        this.top = this.buttonLevel2Y - this.height / 2;
        this.bottom = this.buttonLevel2Y + this.height / 2;
    }

    show() {
        imageMode(CENTER)
       if(level_2Unlocked == true){
        image(gameManager.getImage("buttonlevel2"), this.buttonLevel2X, this.buttonLevel2Y, this.width, this.height);
        }
        if(level_2Unlocked == false){
        image(gameManager.getImage("buttonlocked"), this.buttonLevel2X, this.buttonLevel2Y, this.width, this.height);
        }
    }
}
