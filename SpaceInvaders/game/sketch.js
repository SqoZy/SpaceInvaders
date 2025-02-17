let tileGrid;
let tileWidth = 10, tileHeight = 16, tileSize = 80;

let buttonStart;
let buttonTutorialStart
let buttonStartPressed = false;
let buttonSetting;
let buttonSettingPressed = false;
let buttonBack;
let buttonBackPressed = false;
let buttonPauze;
let buttonPauzePressed = false;
let buttonMusic;
let buttonMusicPressed = false;
let buttonLevel1;
let buttonLevel2;
let buttonLevel3;
let buttonselector;
let buttonLeft;
let buttonLeftPressed = false;
let buttonRight;
let buttonRightPressed = false;
let buttonHome;
let buttonHomePressed = false;

let outsideGrid = false;




let checkMatch3While = true;
let further = false;
let leftFurther = false;
let rightFurther = false;
let middleXFurther = false;
let upFurther = false;
let downFurther = false;
let middleYFurther = false;

let level_1selected = false;
let level_2selected = false;
let level_3selected = false;

let level_2Unlocked = false;
let level_3Unlocked = false;


let musicPauzed = false;
let musicPauzedpressed = false;
let slider

let enemy;
let enemy2;
let enemy3
let enemyHurt = false;
let enemyAttack = false;
let enemyAttackTimer = 84;
let enemyHurtTimer = 35;

let player;
let playerHurt = false;
let playerAttack = false;
let playerAttackTimer = 50;
let playerDamage = false
let adventurerAsset = true;

let skeletonAsset = false;
let skeletonUnlocked = false;
let skeletonBlack = false;
let skeletonselected = false;

let knightAsset = false;
let knightUnlocked = false;
let knightBlack = false;
let randomAttack = Math.floor(Math.random() * 3) + 1;

let playerTimeHeal;
let playerHealth = 100;
let playerMaxHealth = 100;
let playerHealth2 = 100;
let playerMaxHealth2 = 100;
let enemyHealth = 100;
let enemyMaxHealth = 100;
let moves = 25;

let whileTimer = 10;

let tileA;
let tileopslaanX = [];
let tileopslaanY = [];
let tileB;
let clearer = 0;

let screen;
const startScreen = 0;
const pauzeScreen = 1;
const settingScreen = 2;
const tutorialScreen = 3;
const selectScreen = 4;
const level_1 = 5;
const level_1WinScreen = 6;
const level_1LoseScreen = 7;
const level_2 = 8;
const level_2WinScreen = 9;
const level_2LoseScreen = 10;
const level_3 = 11;
const level_3WinScreen = 12;
const level_3LoseScreen = 13;
const saveScreen = 14;
const levelscreen = 15;

function preload() {
    new GameManager();
    font = loadFont('assets/fonts/Crang.ttf');
    gameSong = loadSound("assets/music/GAMEmusic.mp3");
    row3Pling = loadSound("assets/music/pling.mp3");
    gameManager.getPlayer();
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    screen = startScreen;
    tileGrid = new TileGrid(tileWidth, tileHeight, tileSize);
    enemy = new Enemy(700, height - 240);
    enemy2 = new Enemy2(700, height - 240);
    enemy3 = new Enemy3(700, height - 240);
    player = new Player(300, height - 200);
    buttonStart = new ButtonStart(width / 2, height / 2 + 150);
    buttonHome = new ButtonHome(width - 100, 100);
    buttonselector = new ButtonSelector(width / 2, height / 2 + 150);
    buttonSetting = new ButtonSetting(width / 2, height / 4 + 150);
    buttonBack = new ButtonBack(190, 100);
    buttonLevel1 = new Buttonlevel1(525, 220);
    buttonLevel2 = new Buttonlevel2(395, 685, 200, 200);
    buttonLevel3 = new Buttonlevel3(485, 1160, 200, 200);
    buttonLeft = new ButtonLeft(width / 2 - 150, height - 450);
    buttonRight = new ButtonRight(width / 2 + 150, height - 450);

    playerTimeHeal = false;


    gameSong.loop();
}

function draw() {
    if (screen == startScreen) {
        StartScreen();
    }
    if (screen == pauzeScreen) {
        PauzeScreen();
    }
    if (screen == settingScreen) {
        SettingScreen();
    }
    if (screen == tutorialScreen) {
        TutorialScreen();
    }
    if (screen == level_1) {
        Level_1();
        if (enemyHealth <= 0) {
            screen = level_1WinScreen;
        }
        if (moves <= 0) {
            screen = level_1LoseScreen
        }
    }
    if (screen == level_1WinScreen) {
        Level_1WinScreen();
    }
    if (screen == level_1LoseScreen) {
        Level_1LoseScreen();
    }
    if (screen == level_2) {
        Level_2();
        if (enemyHealth <= 0) {
            screen = level_2WinScreen;
        }
        if (moves <= 0) {
            screen = level_2LoseScreen
        }
    }
    if (screen == level_2WinScreen) {
        Level_2WinScreen();
    }
    if (screen == level_2LoseScreen) {
        Level_2LoseScreen();
    }
    if (screen == level_3) {
        Level_3();
        if (enemyHealth <= 0) {
            screen = level_3WinScreen;
        }
        if (moves <= 0) {
            screen = level_3LoseScreen
        }
    }
    if (screen == level_3WinScreen) {
        Level_3WinScreen();
    }
    if (screen == level_3LoseScreen) {
        Level_3LoseScreen();
    }
    if (screen == selectScreen) {
        SelectScreen();
    }
    if (screen == selectScreen) {
        level_1selected = false;
        level_2selected = false;
        level_3selected = false;
        enemyHealth = 100;
        playerHealth = 100;
        moves = 25;
        secondsOfGame = minute;
        minutesOfGame = startingMinutesOfGame;
        playerTimeHeal = true;
    }
    if (skeletonUnlocked) {
        skeletonBlack = false;
    }
    if (skeletonUnlocked) {
        skeletonBlack = false;
    }
}

function touchStarted(event) {
    if (!('targetTouches' in event)) {
        return;
    }
    else if (screen == startScreen) {
        const touch = event.targetTouches[0];
        if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
            buttonStartPressed = true;
        }
        if (buttonSetting.right > touch.clientX && buttonSetting.left < touch.clientX && buttonSetting.bottom > touch.clientY && buttonSetting.top < touch.clientY) {
            buttonSettingPressed = true;
        }
        if (buttonLeft.right > touch.clientX && buttonLeft.left < touch.clientX && buttonLeft.bottom > touch.clientY && buttonLeft.top < touch.clientY) {
            buttonLeftPressed = true;
        }
        if (buttonRight.right > touch.clientX && buttonRight.left < touch.clientX && buttonRight.bottom > touch.clientY && buttonRight.top < touch.clientY) {
            buttonRightPressed = true;
        }
    }
    else if (screen == settingScreen) {
        const touch = event.targetTouches[0];
        if (buttonMusic.right > touch.clientX && buttonMusic.left < touch.clientX && buttonMusic.bottom > touch.clientY && buttonMusic.top < touch.clientY) {
            buttonMusicPressed = true;
        }
        if (buttonBack.right > touch.clientX && buttonBack.left < touch.clientX && buttonBack.bottom > touch.clientY && buttonBack.top < touch.clientY) {
            buttonBackPressed = true;
        }
    }
    else if (screen == pauzeScreen) {
        const touch = event.targetTouches[0];
        if (buttonMusic.right > touch.clientX && buttonMusic.left < touch.clientX && buttonMusic.bottom > touch.clientY && buttonMusic.top < touch.clientY) {
            buttonMusicPressed = true;
        }
        if (buttonBack.right > touch.clientX && buttonBack.left < touch.clientX && buttonBack.bottom > touch.clientY && buttonBack.top < touch.clientY) {
            buttonBackPressed = true;
        }
        if (buttonHome.right > touch.clientX && buttonHome.left < touch.clientX && buttonHome.bottom > touch.clientY && buttonHome.top < touch.clientY) {
            buttonHomePressed = true;
        }
    }
    else if (screen == tutorialScreen) {
        const touch = event.targetTouches[0];
        if (buttonTutorialStart.right > touch.clientX && buttonTutorialStart.left < touch.clientX && buttonTutorialStart.bottom > touch.clientY && buttonTutorialStart.top < touch.clientY) {
            buttonStartPressed = true;
        }
    }
    else if (screen == level_1WinScreen || screen == level_1WinScreen) {
        const touch = event.targetTouches[0];
        if (buttonselector.right > touch.clientX && buttonselector.left < touch.clientX && buttonselector.bottom > touch.clientY && buttonselector.top < touch.clientY) {
            buttonStartPressed = true;
        }
    }
    else if (screen == selectScreen) {
        const touch = event.targetTouches[0];
        if (buttonHome.right > touch.clientX && buttonHome.left < touch.clientX && buttonHome.bottom > touch.clientY && buttonHome.top < touch.clientY) {
            buttonHomePressed = true;
        }
    }
    else if (screen == level_3WinScreen) {
        const touch = event.targetTouches[0];
        if (buttonHome.right > touch.clientX && buttonHome.left < touch.clientX && buttonHome.bottom > touch.clientY && buttonHome.top < touch.clientY) {
            buttonHomePressed = true;
        }
    }
    else if (screen == level_1LoseScreen) {
        const touch = event.targetTouches[0];
        if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
            buttonStartPressed = true;
        }
    }
    else if (screen == level_2LoseScreen) {
        const touch = event.targetTouches[0];
        if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
            buttonStartPressed = true;
        }
    }
    else if (screen == level_3LoseScreen) {
        const touch = event.targetTouches[0];
        if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
            buttonStartPressed = true;
        }
    }
    else if (screen == level_1 || screen == level_2 || screen == level_3) {
        const touch = event.targetTouches[0];
        if (buttonPauze.right > touch.clientX && buttonPauze.left < touch.clientX && buttonPauze.bottom > touch.clientY && buttonPauze.top < touch.clientY) {
            buttonPauzePressed = true;
            return;
        }

        tileA = tileGrid.getTileAtPosition(createVector(touch.clientX, touch.clientY));

        if (tileA.type == 'empty') {
            tileA = null;
            return;
        }

        tileopslaanX.push(tileA.x);
        tileopslaanY.push(tileA.y);
    }
}

function touchMoved(event) {

    if (screen == level_1 || screen == level_2 || screen == level_3) {
        tileA.x = mouseX / tileA.size;

        tileA.y = mouseY / tileA.size;
    }


}

function touchEnded(event) {
    if (!('changedTouches' in event)) {
        return;
    }
    else if (screen == startScreen) {
        const touch = event.changedTouches[0];
        if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
            buttonStartPressed = false;
            screen = tutorialScreen;
        }
        if (buttonSetting.right > touch.clientX && buttonSetting.left < touch.clientX && buttonSetting.bottom > touch.clientY && buttonSetting.top < touch.clientY) {
            buttonSettingPressed = false;
            buttonMusic = new ButtonMusic(width / 2, height / 2);
            slider = createSlider(0, 1, 1, 0.001)

            screen = settingScreen;
        }
        if (buttonLeft.right > touch.clientX && buttonLeft.left < touch.clientX && buttonLeft.bottom > touch.clientY && buttonLeft.top < touch.clientY) {
            buttonLeftPressed = false;
            if (skeletonselected == false) {
                if (skeletonUnlocked) {
                    skeletonAsset = false;
                    adventurerAsset = true;
                }
                if (!skeletonUnlocked) {
                    skeletonBlack = false;
                    adventurerAsset = true;
                    return
                }
            }
            if (skeletonselected == true) {
                if (knightUnlocked) {
                    knightAsset = false;
                    skeletonAsset = true;
                    skeletonselected = false;
                }
                if (!knightUnlocked) {
                    knightBlack = false;
                    skeletonBlack = true;
                    skeletonselected = false;
                    return
                }
            }
            player = new Player(300, height - 200);
        }
        if (buttonRight.right > touch.clientX && buttonRight.left < touch.clientX && buttonRight.bottom > touch.clientY && buttonRight.top < touch.clientY) {
            buttonRightPressed = false;

            if (skeletonselected == true) {
                if (knightUnlocked) {
                    skeletonAsset = false;
                    knightAsset = true;
                }
                if (!knightUnlocked) {
                    console.log(45345);
                    skeletonBlack = false;
                    knightBlack = true;
                    return
                }
            }
            if (skeletonselected == false) {
                if (skeletonUnlocked) {
                    adventurerAsset = false;
                    skeletonAsset = true;
                    skeletonselected = true;
                }
                if (!skeletonUnlocked) {
                    knightBlack = false;
                    skeletonBlack = true;
                    skeletonselected = true;
                    return
                }
            }
            player = new Player(300, height - 200);
        }
    }
    else if (screen == settingScreen) {
        const touch = event.changedTouches[0];
        if (buttonMusic.right > touch.clientX && buttonMusic.left < touch.clientX && buttonMusic.bottom > touch.clientY && buttonMusic.top < touch.clientY) {
            if (!musicPauzed) {
                gameSong.pause();
                musicPauzed = true;
                buttonMusicPressed = false
                return
            }
            if (musicPauzed) {
                gameSong.loop()
                musicPauzed = false;
                buttonMusicPressed = false
                return
            }
        }
        if (buttonBack.right > touch.clientX && buttonBack.left < touch.clientX && buttonBack.bottom > touch.clientY && buttonBack.top < touch.clientY) {
            buttonBackPressed = false;
            slider.remove();
            screen = startScreen
        }
    }
    else if (screen == pauzeScreen) {
        const touch = event.changedTouches[0];
        if (buttonMusic.right > touch.clientX && buttonMusic.left < touch.clientX && buttonMusic.bottom > touch.clientY && buttonMusic.top < touch.clientY) {
            if (!musicPauzed) {
                gameSong.pause();
                musicPauzed = true;
                buttonMusicPressed = false
                return
            }
            if (musicPauzed) {
                gameSong.loop()
                musicPauzed = false;
                buttonMusicPressed = false
                return
            }
        }
        if (buttonBack.right > touch.clientX && buttonBack.left < touch.clientX && buttonBack.bottom > touch.clientY && buttonBack.top < touch.clientY) {
            buttonBackPressed = false;
            slider.remove();
            if(level_1selected){
            screen = level_1
            }
            if(level_2selected){
                screen = level_2
            }
            if(level_3selected){
                screen = level_3
            }
        }
        if (buttonHome.right > touch.clientX && buttonHome.left < touch.clientX && buttonHome.bottom > touch.clientY && buttonHome.top < touch.clientY) {
            buttonHomePressed = false;
            slider.remove();
            screen = startScreen;
        }
    }
    else if (screen == tutorialScreen) {
        const touch = event.changedTouches[0];
        if (buttonTutorialStart.right > touch.clientX && buttonTutorialStart.left < touch.clientX && buttonTutorialStart.bottom > touch.clientY && buttonTutorialStart.top < touch.clientY) {
            buttonStartPressed = false;
            screen = selectScreen;
            buttonPauze = new ButtonPauze(width - 100, 100);
        }
    }
    else if (screen == level_1WinScreen || screen == level_2WinScreen) {
        const touch = event.changedTouches[0];
        if (buttonselector.right > touch.clientX && buttonselector.left < touch.clientX && buttonselector.bottom > touch.clientY && buttonselector.top < touch.clientY) {
            buttonStartPressed = false;

            screen = selectScreen;
            if (!level_2Unlocked) {
                level_2Unlocked = true;
                skeletonUnlocked = true;
                return
            }
            if (level_2Unlocked) {
                level_3Unlocked = true;
                knightUnlocked = true;
                return
            }

        }
    }
    else if (screen == selectScreen) {
        const touch = event.changedTouches[0];
        if (buttonLevel1.right > touch.clientX && buttonLevel1.left < touch.clientX && buttonLevel1.bottom > touch.clientY && buttonLevel1.top < touch.clientY) {
            screen = level_1;
            moves = 15;
            level_1selected = true;
        }
        if (buttonLevel2.right > touch.clientX && buttonLevel2.left < touch.clientX && buttonLevel2.bottom > touch.clientY && buttonLevel2.top < touch.clientY) {
            if (level_2Unlocked) {
                screen = level_2;
                level_2selected = true;
                moves = 20;
                enemyHealth = 200;
                enemyMaxHealth = 200;
            }
        }
        if (buttonLevel3.right > touch.clientX && buttonLevel3.left < touch.clientX && buttonLevel3.bottom > touch.clientY && buttonLevel3.top < touch.clientY) {
            if (level_3Unlocked) {
                screen = level_3;
                level_3selected = true;
                moves = 25;
                enemyHealth = 300;
                enemyMaxHealth = 300;
            }
        }
        if (buttonHome.right > touch.clientX && buttonHome.left < touch.clientX && buttonHome.bottom > touch.clientY && buttonHome.top < touch.clientY) {
            buttonHomePressed = false;
            screen = startScreen;
        }
    }
        else if (screen == level_3WinScreen) {
           const touch = event.changedTouches[0];
           if (buttonHome.right > touch.clientX && buttonHome.left < touch.clientX && buttonHome.bottom > touch.clientY && buttonHome.top < touch.clientY) {
            buttonHomePressed = false;
            screen = startScreen;
           }
        }
        else if (screen == level_1LoseScreen) {
            const touch = event.changedTouches[0];
            if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
                buttonStartPressed = false;
                screen = startScreen;
            }
        }
        else if (screen == level_2LoseScreen) {
            const touch = event.changedTouches[0];
            if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
                buttonStartPressed = false;
                screen = startScreen;
            }
        }
        else if (screen == level_3LoseScreen) {
            const touch = event.changedTouches[0];
            if (buttonStart.right > touch.clientX && buttonStart.left < touch.clientX && buttonStart.bottom > touch.clientY && buttonStart.top < touch.clientY) {
                buttonStartPressed = false;
                screen = startScreen;
            }
        }
    else if (screen == level_1 || screen == level_2 || screen == level_3) {
        const touch = event.changedTouches[0];
        if (buttonPauze.right > touch.clientX && buttonPauze.left < touch.clientX && buttonPauze.bottom > touch.clientY && buttonPauze.top < touch.clientY) {
            buttonPauzePressed = false;
            screen = pauzeScreen;
            buttonMusic = new ButtonMusic(width / 2, height / 2);
            slider = createSlider(0, 1, 1, 0.001)
            return;
        }

        tileB = tileGrid.getTileAtPosition(createVector(touch.clientX, touch.clientY));


        if (outsideGrid == true) {
            tileA.x = tileopslaanX[clearer];
            tileA.y = tileopslaanY[clearer];
            clearer += 1;
            tileA = null;
            tileB = null;
            return;
        }

        if (tileB.type == 'empty') {
            tileA.x = tileopslaanX[clearer];
            tileA.y = tileopslaanY[clearer];
            clearer += 1;
            tileA = null;
            tileB = null;
            return;
        }

        if (tileA == tileB) {
            tileA.x = tileopslaanX[clearer];
            tileA.y = tileopslaanY[clearer];
            clearer += 1;
            tileA = null;
            tileB = null;
            return;
        }

        tileopslaanX.push(tileB.x);
        tileopslaanY.push(tileB.y);

        tileB.x = tileopslaanX[clearer];
        tileB.y = tileopslaanY[clearer];
        tileGrid.tiles[tileopslaanX[clearer]][tileopslaanY[clearer]] = tileB;

        clearer += 1;

        tileA.x = tileopslaanX[clearer];
        tileA.y = tileopslaanY[clearer];
        tileGrid.tiles[tileopslaanX[clearer]][tileopslaanY[clearer]] = tileA;

        clearer += 1;


        tileA.checkMatch3();
        tileB.checkMatch3();

        further = true;

        while (checkMatch3While) {
            checkMatch3While = false;
            if (tileA.x - 1 >= 2) {
                tileGrid.tiles[tileA.x - 1][tileA.y].checkMatch3();
            }
            if (tileA.x - 2 >= 2) {
                tileGrid.tiles[tileA.x - 2][tileA.y].checkMatch3();
            }
            if (tileA.x + 1 <= 9) {
                tileGrid.tiles[tileA.x + 1][tileA.y].checkMatch3();
            }
            if (tileA.x + 2 <= 9) {
                tileGrid.tiles[tileA.x + 2][tileA.y].checkMatch3();
            }
            if (tileA.y - 1 >= 8) {
                tileGrid.tiles[tileA.x][tileA.y - 1].checkMatch3();
            }
            if (tileA.y - 2 >= 8) {
                tileGrid.tiles[tileA.x][tileA.y - 2].checkMatch3();
            }
            if (tileA.y + 1 <= 15) {
                tileGrid.tiles[tileA.x][tileA.y + 1].checkMatch3();
            }
            if (tileA.y + 2 <= 15) {
                tileGrid.tiles[tileA.x][tileA.y + 2].checkMatch3();
            }
            if (checkMatch3While) {
                if (leftFurther) {
                    tileA.tileSpawnLeft();
                    console.log('tilAleftverandert')
                }
                if (rightFurther) {
                    tileA.tileSpawnRight();
                    console.log('tilArighttverandert')
                }
                if (middleXFurther) {
                    tileA.tileSpawnMiddleX();
                    console.log('tilAmiddlexverandert')
                }
                if (upFurther) {
                    tileA.tileSpawnUp();
                    console.log('tilAupverandert')
                }
                if (downFurther) {
                    tileA.tileSpawnDown();
                    console.log('tilAdownverandert')
                }
                if (middleYFurther) {
                    tileA.tileSpawnMiddleY();
                    console.log('tilAmiddleyverandert')
                }
            }
            whileTimer--;
            if (whileTimer == 0) {
                console.log('whiletimer')
                checkMatch3While = true;
                further = false;
                leftFurther = false;
                rightFurther = false;
                middleXFurther = false;
                upFurther = false;
                downFurther = false;
                middleYFurther = false;

                tileA = null;
                tileB = null;

                moves -= 1;
                whileTimer = 10;
                return
            }
            console.log('while')
        }
        whileTimer = 10;
        checkMatch3While = true;
        while (checkMatch3While) {
            checkMatch3While = false;
            if (tileB.x - 1 >= 2) {
                tileGrid.tiles[tileB.x - 1][tileB.y].checkMatch3();
            }
            if (tileB.x - 2 >= 2) {
                tileGrid.tiles[tileB.x - 2][tileB.y].checkMatch3();
            }
            if (tileB.x + 1 <= 9) {
                tileGrid.tiles[tileB.x + 1][tileB.y].checkMatch3();
            }
            if (tileB.x + 2 <= 9) {
                tileGrid.tiles[tileB.x + 2][tileB.y].checkMatch3();
            }
            if (tileB.y - 1 >= 8) {
                tileGrid.tiles[tileB.x][tileB.y - 1].checkMatch3();
            }
            if (tileB.y - 2 >= 8) {
                tileGrid.tiles[tileB.x][tileB.y - 2].checkMatch3();
            }
            if (tileB.y + 1 <= 15) {
                tileGrid.tiles[tileB.x][tileB.y + 1].checkMatch3();
            }
            if (tileB.y + 2 <= 15) {
                tileGrid.tiles[tileB.x][tileB.y + 2].checkMatch3();
            }
            if (checkMatch3While) {
                if (leftFurther) {
                    console.log('tilBleftverandert')
                    tileB.tileSpawnLeft();
                }
                if (rightFurther) {
                    console.log('tilBrighttverandert')
                    tileB.tileSpawnRight();
                }
                if (middleXFurther) {
                    console.log('tilBmiddlexverandert')
                    tileB.tileSpawnMiddleX();
                }
                if (upFurther) {
                    console.log('tilBupverandert')
                    tileB.tileSpawnUp();
                }
                if (downFurther) {
                    console.log('tilBdownverandert')
                    tileB.tileSpawnDown();
                }
                if (middleYFurther) {
                    console.log('tilBmiddleyverandert')
                    tileB.tileSpawnMiddleY();
                }
            }
            whileTimer--;
            if (whileTimer == 0) {
                console.log('whiletimer')
                checkMatch3While = true;
                further = false;
                leftFurther = false;
                rightFurther = false;
                middleXFurther = false;
                upFurther = false;
                downFurther = false;
                middleYFurther = false;

                tileA = null;
                tileB = null;

                moves -= 1;
                whileTimer = 10;
                return
            }
        }
        whileTimer = 10;
        checkMatch3While = true;
        further = false;
        leftFurther = false;
        rightFurther = false;
        middleXFurther = false;
        upFurther = false;
        downFurther = false;
        middleYFurther = false;

        tileA = null;
        tileB = null;

        moves -= 1;

        console.log(tileGrid.tiles)
    }
}
function displaymoves() {
    textFont(font);
    textSize(50)
    fill(123, 158, 63)
    stroke(0)
    strokeWeight(7);
    text(`moves ${moves}`, 630, 400)
}
