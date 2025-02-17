function Level_2LoseScreen(){

    clear();

     imageMode(CORNER)
     background(gameManager.getImage("treebackground"));

     textAlign(CENTER);
     textFont(font);
     textSize(80)
     fill(123, 158, 63)
     stroke(0)
     strokeWeight(7);
     text(`you lose level 2 `, width / 2, 600)

     if (buttonStart.right > mouseX && buttonStart.left < mouseX && buttonStart.bottom > mouseY && buttonStart.top < mouseY && mouseIsPressed == true) {
     }
     buttonStart.show();
}
