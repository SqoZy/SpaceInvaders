
const startingMinutesOfGame = 1;
const minute = 60;
let timeOfGame = 60 * 60 * 60;

let secondsOfGame = minute;
let minutesOfGame = startingMinutesOfGame;
setInterval(timergame, 10000);

function timergame() {

    if (timeOfGame % 60 == 0) {
        secondsOfGame--;
    }
    if (secondsOfGame == 0) {
        secondsOfGame = minute;
        minutesOfGame -= 1;
    }

    if (secondsOfGame == 60 || secondsOfGame == 50 || secondsOfGame == 40 || secondsOfGame == 30 || secondsOfGame == 20 || secondsOfGame == 10) {
        if (playerDamage == false) {
            playerHealth -= 10;
            playerHurt = true
            if (!playerTimeHeal) {
                playerHealth += 10;
            }
            playerDamage = true;
            if (playerTimeHeal){
            enemyAttack = true;
            }
        }
    }
    playerTimeHeal = true;
    if (secondsOfGame == 59 || secondsOfGame == 49 || secondsOfGame == 39 || secondsOfGame == 29 || secondsOfGame == 19 || secondsOfGame == 9) {
        playerHurt = false;
        playerDamage = false;
    }
    textFont(font);
    textSize(50)
    fill(123, 158, 63)
    stroke(0)
    strokeWeight(7);
    text(`time ${minutesOfGame}: ${secondsOfGame}`, 130, 400)
    timeOfGame--;
}
