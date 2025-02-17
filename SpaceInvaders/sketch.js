let bullets = [];
let bulletsEnemy = [];
let pressedKeys = {};
let enemies = [];
let shields = [];

let buttonSave;
let buttonBack;

let ufoRichting = false;
let ufoSpawn = 900;
let ufoSpeed = -6;
let ufos = [];

let player;
let shooting = false;
let levens;
let aantalLevens = 3;

let boss;
let bulletsBoss = [];
let bulletBossLeft = false;
let bulletBossRight = false;
let bosslevens = 50;
const maxBossLevens = 50;

let pixelFont;
let bubleFont;
let slider;

let punten = 0;
let bosspunten = false;
let saved = false;

let aantalEnemies = 15;
let deadenemies = 0;

const startScherm = 0;
const gameScherm = 1;
const settingScherm = 2;
const gameOverScherm = 3;
const winScherm = 4;
const bossScherm = 5;
const saveScherm = 6;
const endScherm = 7;

let eindScherm = false;
let settingGameScherm = false;

//let playing = false;
let playSong = false;
let playGameOverSong = true;

let buttonSavePressed = false;
let saveGeclickt = false;
let usernameInput;

const saveDataUrl = "https://oege.ie.hva.nl/~hofem/blok1/highscore/save.php";
const loadDataUrl = "https://oege.ie.hva.nl/~hofem/blok1/highscore/load.php";
const gameId = 774639672;
let saveDataJson;


function preload() {
  // images en muziek wordt geladen
  playerImage = loadImage("image/grugru.png");
  beholderImage = loadImage("image/beholder.png");
  blueSquidImage = loadImage("image/blueSquid.png");
  starsBackground = loadImage("image/stars.png");
  playerBullet = loadImage("image/kogel.png");
  enemyBullet = loadImage("image/waterbullet.png");
  shield = loadImage("image/bshield.png")
  shieldDamaged = loadImage("image/bshielddamaged.png")
  shieldBroken = loadImage("image/bshielddamagedmore.png")
  shieldDestroyed = loadImage("image/bshielddestroyd.png")
  ufoRight = loadImage("image/starDestroyerRight.png")
  ufoLeft = loadImage("image/starDestroyerLeft.png")

  buttonSavepr = loadImage("image/button.png")
  buttonSaveNotPressed = loadImage("image/buttonnietpressed.png")
  buttonBackpr = loadImage("image/backPressedButton.png")
  buttonBackNotPressed = loadImage("image/backButton.png")



  greenBoss = loadImage("image/pixel-pixelart.gif")
  greenBossBullet = loadImage("image/bossBullets.png")

  pixelFont = loadFont('fonts/upheavtt.ttf');
  bubleFont = loadFont('fonts/04B_30__.TTF');

  gameSong = loadSound("music/kim-lightyear-leave-the-world-tonight-chiptune-edit-loop-132102.mp3");
  gameOverSong = loadSound("music/kl-peach-game-over-ii-135684.mp3");
}

function setup() {
  // bullets en ufos worden opnieuw ingespawnt
  bullets = [];
  bulletsEnemy = [];
  ufos = [];
  saved = false;

  scherm = startScherm;
  // wanneer er is gesaved voor de boss worden je punten afgenomen
  if (!bosspunten) {
    punten = 0;
  }
  levens = aantalLevens;
  deadenemies = 0;
  shooting = false;
  saveGeclickt = false;
  timeToShow = random(50, 300);
  showTime = 0;
  // hierdoor kan de muziek niet loopen en kan de muziek uit
  if (playSong) {
    gameSong.loop();
  }
  // canvas wordt getekent
  createCanvas(800, 600);
  rectMode(CENTER);
  // schield worden gemaakt
  for (let i = 0; i < 4; i++) {
    shields[i] = new Shield(i * 175 + 137, height - 100, 4);
  }
  // player word gemaakt
  player = new Player(width - 400, height - 50);
  // hierdoor worden de highscores opgehaald
  onHighScoreSaved();
  randomMath();
}

function draw() {
  // verschillende schermen
  if (scherm == startScherm) {
    startScreen();
  }
  if (scherm == settingScherm) {
    settingsScreen();
  }
  if (scherm == gameOverScherm) {
    gameOverScreen();
  }
  if (scherm == winScherm) {
    winScreen();
  }
  if (scherm == saveScherm) {
    saveScreen();
  }
  if (scherm == gameScherm) {
    gameScreen();
  }
  if (scherm == bossScherm) {
    bossScreen();
  }
  if (scherm == endScherm) {
    endScreen();
  }
  // als je dood bent verander het scherm
  if (levens == 0) {
    scherm = gameOverScherm;
  }
  // als de boss dood is verandert het scherm + 100 punten
  if (bosslevens == 0) {
    punten += 100;
    scherm = endScherm;
  }
  // als je alle enemies hebt gekilt verandert het scherm
  if (deadenemies == 15) {
    scherm = winScherm;
  }
}
// de button in savescherm krijgt een animatie
function mouseReleased() {
  buttonSavePressed = false;
}

function keyPressed() {
  // met arrowUp kan de player schieten
  if (key == "ArrowUp") {
    if (!shooting) {
      bullet = new Bullet(player.playerX, player.playerY);
      bullets.push(bullet);
      shooting = true;
    }
  }
  // key bindings voor scherm verandering
  else if (scherm == startScherm) {
    if (key == "Enter") {
      gameSong.pause();
      enemySpawn();
      setup();
      scherm = gameScherm;
    }
    if (keyCode == "83") {
      scherm = settingScherm;
      slider = createSlider(0, 1, 1, 0.001);
    }
  }
  else if (scherm == settingScherm) {
    if (keyCode == "76") {
      if (gameSong.isPlaying()) {
        gameSong.stop();
      }
      playSong = false;
    }
    if (keyCode == "80") {
      if (!gameSong.isPlaying()) {
        gameSong.loop();
      }
      playSong = true;
    }
    if (key == "Backspace") {
      if (!eindScherm) {
        if (!settingGameScherm) {
          scherm = startScherm;
        }
      }
      if (eindScherm) {
        scherm = endScherm;
      }
      if (settingGameScherm) {
        scherm = gameScherm;
        settingGameScherm = false;
      }
      slider.remove();
    }
  }
  else if (scherm == gameScherm) {
    if (keyCode == "27") {
      settingGameScherm = true;
      scherm = settingScherm;
      slider = createSlider(0, 1, 1, 0.001);
    }
  }
  else if (scherm == gameOverScherm) {
    if (key == "Enter") {
      gameOverSong.stop();
      enemySpawn();
      setup();
      playGameOverSong = true;
      scherm = gameScherm;
    }
    if (key == "Backspace") {
      gameOverSong.stop();
      setup();
      playGameOverSong = true;
      scherm = startScherm;
    }
  }
  else if (scherm == winScherm) {
    if (key == "Enter") {
      gameSong.pause();
      enemySpawn();
      setup();
      scherm = gameScherm;
    }
    if (key == "Backspace") {
      gameSong.pause();
      setup();
      scherm = startScherm;
    }
    if (keyCode == "78") {
      gameSong.pause();
      if (!saved) {
        bosspunten = true;
      }
      setup();
      boss = new Boss(width - 400, height - 450);
      scherm = bossScherm;
    }
    if (keyCode == "83") {
      deadenemies = 1;
      buttonSave = new ButtonSave(width / 4, height / 2 + 150);
      buttonBack = new ButtonBack(50, 20);
      usernameInput = createInput('Your name');
      bosspunten = false;
      scherm = saveScherm;
    }
  }
  else if (scherm == endScherm) {
    if (key == "Enter") {
      gameSong.pause();
      enemySpawn();
      bosspunten = false;
      setup();
      scherm = gameScherm;
    }
    if (key == "Backspace") {
      gameSong.pause();
      bosspunten = false;
      setup();
      scherm = startScherm;
    }
    if (keyCode == "27") {
      eindScherm = true;
      scherm = settingScherm;
      slider = createSlider(0, 1, 1, 0.001);
    }
    if (keyCode == "83") {
      eindScherm = true;
      buttonSave = new ButtonSave(width / 4, height / 2 + 150);
      buttonBack = new ButtonBack(50, 20);
      usernameInput = createInput('Your name');
      scherm = saveScherm;
    }
  }
}
