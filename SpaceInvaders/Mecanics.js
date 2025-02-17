function randomMath() {
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
}


function apear() {
    showTime++;
    if (showTime >= timeToShow) {
      ufo = new Ufo(ufoSpawn , height - 550);
      ufos.push(ufo);
      timeToShow = random(500, 700);
      showTime = 0;
    }
}
function updatebosshealth(bosslevens, maxBossLevens){
  rectMode(CORNER)
  stroke(0);
  strokeWeight(4)
  noFill();
  rect(boss.bossX - 100, 20, 200, 15);
  noStroke();
  fill(255,0,0)
  rect(boss.bossX - 100, 20, map(bosslevens, 0, maxBossLevens, 0, 200), 15)
}

function onHighScoreSaved(){
  loadJSON(`${loadDataUrl}?game=${gameId}`, onHighScoreRetrieved)
}

function onHighScoreRetrieved(dataAsJson){
  saveDataJson = dataAsJson;
  saveDataJson = saveDataJson.sort(function (a, b) { return b.score - a.score;});
  saveDataJson.length = 7;
}

function enemySpawn(){
  possisiony = 50;
  index = 0;
  enemyCanShoot = false;
  displayImage = beholderImage;
    for (let i = 0; i < aantalEnemies; i++) {

      if (i % 5 === 0 && i !== 0) {

        index = 0;
        possisiony += 100;
        if (i % 10 === 0) {

          enemyCanShoot = false;
          displayImage = beholderImage;
        }
        else {

          enemyCanShoot = true;
          displayImage = blueSquidImage;
        }
      }
      enemies[i] = new Enemy(index * 150 + 100, possisiony, enemyCanShoot, displayImage);
      index++;
    }
  }
