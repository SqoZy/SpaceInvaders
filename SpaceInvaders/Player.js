class Player {
    constructor(playerX, playerY) {
      this.playerX = playerX;
      this.playerY = playerY;
      this.width = 80;
      this.height = 40;
      this.speed = 10;
      this.left = playerX - this.width / 2;
      this.right = playerX + this.width / 2;
      this.top = playerY - this.height / 2;
      this.bottom = playerY + this.height / 2;
    }

    draw() {
      this.playerX = constrain(this.playerX, 80 / 2, width - 80 / 2);
      fill(0, 255, 0);
      image(playerImage, this.playerX, this.playerY, this.width, this.height);
    }

    move() {
      let mvmt = createVector(0, 0);
      if (keyIsDown(LEFT_ARROW)) {
        mvmt.x -= 1;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        mvmt.x += 1;
      }
      mvmt.setMag(this.speed);

      this.playerX += mvmt.x;
      this.playerY += mvmt.y;
      this.hitbox();
    }

    hitbox(){
      this.left = this.playerX - this.width / 2;
      this.right = this.playerX + this.width / 2;
      this.top = this.playerY - this.height / 2;
      this.bottom = this.playerY + this.height / 2;
    }
}
