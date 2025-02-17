const postUserUrl = "https://oege.ie.hva.nl/~teunisj10/blok2/analytics/user.php";
const postgetPlayerUrl = "https://oege.ie.hva.nl/~teunisj10/blok2/analytics/user.php?code="
const createPlayerPostParameters = {
    "createPlayer": true
}
let playerDataRecievedAsJSON;
const localStorageDataKey = '3WayFighterGamePlayerUniqeCodeKey';

/** De classe 'AnalyticsTrackerManager' is verantwoordelijk voor het beheren van het bijhouden van analyses en
*   het creëren en ophalen van spelergegevens, het opslaan van spelergegevens.
*   
*/
class AnalyticsTrackerManager {

    constructor() {
        //get a unique id and store it in the localstorage.
        //retrieve from localStorage if available, otherwise create a new one.
        //this.#initialize();
    }

    async #createPlayer() {
        const playerDataRecieved = await httpPost(postUserUrl, createPlayerPostParameters)
        playerDataRecievedAsJSON = JSON.parse(playerDataRecieved);
        console.log(playerDataRecievedAsJSON);
        localStorage.setItem(localStorageDataKey, playerDataRecievedAsJSON.uniqueCode);
    }

    async getPlayerData() {
        const playerUniquCode = localStorage.getItem(localStorageDataKey);

        if (playerUniquCode == undefined || playerUniquCode == null) {
            await this.#createPlayer();
            await getPlayerData();
        }
        else {
            this.#vindSpeler(playerUniquCode);
        }

    }

    #storePlayerData() {

    }

    async #vindSpeler(playerUniquCode) {
        try {
            const playerDataRecieved = await httpGet(`${postgetPlayerUrl}${playerUniquCode}`);
            playerDataRecievedAsJSON = JSON.parse(playerDataRecieved);

            if (playerDataRecievedAsJSON.responseType == 'NOT_FOUND') {
                localStorage.removeItem(localStorageDataKey);
                getPlayerData();
            }
            else {
                console.log(`playerfound!${playerUniquCode}`)
                return


            }

        }
        catch (error) {
            console.log(`error cannot find player: ${error}`);
        }
    }


    customEvent(name, dataObject) {
        //track a custom event. Make sure to include the playerGUID.

    }

}
