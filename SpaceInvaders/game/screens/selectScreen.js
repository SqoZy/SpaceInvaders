function SelectScreen(){

    clear();

     imageMode(CORNER)
     background(gameManager.getImage("levelselectorbackground"));



     textAlign(CENTER);
     textFont(font);
     textSize(100)
     fill(123, 158, 63)
     stroke(0)
     strokeWeight(7);

     //text(`Level Select screen`, width / 2, 600)
     buttonLevel1.show();
     buttonLevel2.show();
     buttonLevel3.show();
     buttonHome.show();



 }
