class Buttonlevel3 extends Buttonlevel1 {
    
    constructor(buttonLevel3X, buttonLevel3Y, width, height) {
        super(width, height)
        this.buttonLevel3X = buttonLevel3X;
        this.buttonLevel3Y = buttonLevel3Y;
        this.width = width;
        this.height = height;
        this.width = 170;
        this.height = 170;
        this.left = this.buttonLevel3X - this.width / 2;
        this.right = this.buttonLevel3X + this.width / 2;
        this.top = this.buttonLevel3Y - this.height / 2;
        this.bottom = this.buttonLevel3Y + this.height / 2;
    }

    show() {
        imageMode(CENTER)
       if(level_3Unlocked == true){
        image(gameManager.getImage("buttonlevel3"), this.buttonLevel3X, this.buttonLevel3Y, this.width, this.height);
        }
        if(level_3Unlocked == false){
        image(gameManager.getImage("buttonlocked"), this.buttonLevel3X, this.buttonLevel3Y, this.width, this.height);
        }
    }
}
