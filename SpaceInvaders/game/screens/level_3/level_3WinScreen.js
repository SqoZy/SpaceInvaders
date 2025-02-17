function Level_3WinScreen(){
    
    clear();

     imageMode(CORNER)
     background(gameManager.getImage("treebackground"));

     textAlign(CENTER);
     textFont(font);
     textSize(50)
     fill(123, 158, 63)
     stroke(0)
     strokeWeight(7);
     text(`you completed the game!`, width / 2, 600)

     textAlign(CENTER);
     textFont(font);
     textSize(40)
     fill(123, 158, 63)
     stroke(0)
     strokeWeight(7);
     text(`Thanks for playing!`, width / 2, 800)

     //player.draw();
     buttonHome.show();
 }
