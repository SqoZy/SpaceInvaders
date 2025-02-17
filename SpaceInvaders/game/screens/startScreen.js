function StartScreen() {

    clear();

    imageMode(CORNER)
    background(gameManager.getImage("treebackground"));
    imageMode(CENTER)
    if (skeletonBlack == false) {
        if (knightBlack == false) {
            if (adventurerAsset == true) {
                image(gameManager.getImage("playeridle"), width / 2, height - 450, 300, 222)
            }
        }
    }
    if (knightBlack == false) {
        if (skeletonAsset == true) {
            image(gameManager.getImage("skeletonplayeridle"), width / 2 + 40, height - 470, 357, 259)
        }
    }
    if (skeletonBlack == true) {
        textFont(font);
        textSize(30)
        fill(123, 158, 43)
        stroke(0);
        strokeWeight(7);
        textAlign(CENTER)

        text(`If you complete level 1 you unlock Skel`, width / 2, 1440)
        image(gameManager.getImage("skeletonplayeridleblack"), width / 2 + 40, height - 470, 357, 259)
    }
    if (knightAsset == true) {
        image(gameManager.getImage("knightplayeridle"), width / 2 + 60, height - 465, 630, 258)
    }
    if (knightBlack == true) {
        textFont(font);
        textSize(30)
        fill(123, 158, 43)
        stroke(0);
        strokeWeight(7);
        textAlign(CENTER)

        text(`If you complete level 2 you unlock lance`, width / 2, 1440)
        image(gameManager.getImage("knightplayeridleblack"), width / 2 + 60, height - 465, 630, 258)
    }


    buttonStart.show();
    buttonSetting.show();
    buttonLeft.show();
    buttonRight.show();
}
