function Level_1WinScreen(){
    
    clear();

     imageMode(CORNER)
     background(gameManager.getImage("treebackground"));

     textAlign(CENTER);
     textFont(font);
     textSize(150)
     fill(123, 158, 63)
     stroke(0)
     strokeWeight(7);
     text(`you won`, width / 2, 600)

     if (buttonStart.right > mouseX && buttonStart.left < mouseX && buttonStart.bottom > mouseY && buttonStart.top < mouseY && mouseIsPressed == true) {
     }
     buttonselector.show();
 }
