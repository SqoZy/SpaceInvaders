class Buttonlevel1 {
    constructor(buttonLevel1X, buttonLevel1Y, width, height) {
        this.buttonLevel1X = buttonLevel1X;
        this.buttonLevel1Y = buttonLevel1Y;
        this.width = width;
        this.height = height;
        this.width = 170;
        this.height = 170;
        this.left = this.buttonLevel1X - this.width / 2;
        this.right = this.buttonLevel1X + this.width / 2;
        this.top = this.buttonLevel1Y - this.height / 2;
        this.bottom = this.buttonLevel1Y + this.height / 2;
    }

    show() {
        imageMode(CENTER)
        image(gameManager.getImage("buttonlevel1"), this.buttonLevel1X, this.buttonLevel1Y, this.width, this.height);
    }
}
