class Ufo{

    constructor (ufoX, ufoY) {
        this.ufoX = ufoX;
        this.ufoY = ufoY;
        this.width = 88,5;
        this.height = 27,5;
        this.toDelete = false;
        this.puntenUfo;
        this.left = this.ufoX - this.width / 2;
        this.right = this.ufoX + this.width / 2;
        this.top = this.ufoY - this.height / 2;
        this.bottom = this.ufoY + this.height / 2;
    }

    show() {
        if (!ufoRichting) {
        image(ufoLeft, this.ufoX, this.ufoY, this.width, this.height);
        this.puntenUfo = 60;
        }
        if (ufoRichting) {
        image(ufoRight, this.ufoX, this.ufoY, this.width, this.height);
        this.puntenUfo = 60;
        }
    }

    disepear(){
        this.toDelete = true;
    }

    move() {
        this.ufoX = this.ufoX += ufoSpeed;
        this.hitbox();
    }

    hitbox(){
        this.left = this.ufoX - this.width / 2;
        this.right = this.ufoX + this.width / 2;
        this.top = this.ufoY - this.height / 2;
        this.bottom = this.ufoY + this.height / 2;
    }

    otherDirection(){
        if(ufoRichting){
            ufoRichting = false;
            ufoSpawn += 1000;
            ufoSpeed *= -1;
        }
        else{
            ufoRichting = true;
            ufoSpawn -= 1000;
            ufoSpeed *= -1;
        }
        this.disepear();
    }
}
