class Shield{

    constructor (shieldX, shieldY, shieldlevens) {
        this.shieldX = shieldX;
        this.shieldY = shieldY;
        this.width = 80;
        this.height = 16;
        this.toDelete = false;
        this.shieldlevens = shieldlevens;
        this.left = shieldX - this.width / 2;
        this.right = shieldX + this.width / 2;
        this.top = shieldY - this.height / 2;
        this.bottom = shieldY + this.height / 2;
    }

    show() {
        if (this.shieldlevens == 4){
            image(shield, this.shieldX, this.shieldY, this.width, this.height);
        }
        else if (this.shieldlevens == 3){
            image(shieldDamaged, this.shieldX, this.shieldY, this.width, this.height);
        }
        else if (this.shieldlevens == 2){
            image(shieldBroken, this.shieldX, this.shieldY, this.width, this.height);
        }
        else if (this.shieldlevens == 1){
            image(shieldDestroyed, this.shieldX, this.shieldY, this.width, this.height);
        }
        // this.hitbox();
    }

    disepear(){
        if (this.shieldlevens == 0) {
        this.toDelete = true;
        }
    }

    damage(){
        this.shieldlevens --;
    }

    // hitbox(){
    //     this.left = this.shieldX - this.width / 2;
    //     this.right = this.shieldX + this.width / 2;
    //     this.top = this.shieldY - this.height / 2;
    //     this.bottom = this.shieldY + this.height / 2;

    // }
}
