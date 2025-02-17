function SettingScreen(){

    clear();

     imageMode(CORNER)
     background(gameManager.getImage("treebackground"));

     textAlign(CENTER);
     textFont(font);
     textSize(80)
     fill(123, 158, 63)
     stroke(0)
     strokeWeight(7);
     text(`settings screen`, width / 2, 600)

     buttonBack.show();
     buttonMusic.show();

     slider.position(width / 2 - 100, height / 2 + 210);
     slider.style('width', '200px');
     gameSong.setVolume(slider.value());

 }
