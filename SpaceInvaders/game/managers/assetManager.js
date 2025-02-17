class AssetManager {

    static #instance;
    #images;
    constructor() {
        this.#images = new Map();
        this.#loadImages();
        window.assetManager = this;
    }

    #loadImages() {
        this.#images.set("diamond", loadImage("assets/images/tiles/normal.png"));
        this.#images.set("ruby", loadImage("assets/images/tiles/red.png"));
        this.#images.set("emerald", loadImage("assets/images/tiles/green.png"));
        this.#images.set("saphire", loadImage("assets/images/tiles/blue.png"));

        this.#images.set("diamondexplosion", loadImage("assets/images/tiles/explosion/normalexplosion.gif"));
        this.#images.set("rubyexplosion", loadImage("assets/images/tiles/explosion/redexplosion.gif"));
        this.#images.set("emeraldexplosion", loadImage("assets/images/tiles/explosion/greenexplosion.gif"));
        this.#images.set("saphireexplosion", loadImage("assets/images/tiles/explosion/blueexplosion.gif"));

        this.#images.set("Slime", loadImage("assets/images/enemies/Spr_slimie.gif"))

        this.#images.set("shroomidle", loadImage("assets/images/enemies/shroom/paddestoelIlde.gif"))
        this.#images.set("shroomhurt", loadImage("assets/images/enemies/shroom/paddestoelhit.gif"))
        this.#images.set("shroomattack", loadImage("assets/images/enemies/shroom/paddestoelattack.gif"))
        this.#images.set("shroomattack2", loadImage("assets/images/enemies/shroom/paddestoelattack2.gif"))

        this.#images.set("nightborneidle", loadImage("assets/images/enemies/nightborne/NightBorne_idle.gif"))
        this.#images.set("nightbornehurt", loadImage("assets/images/enemies/nightborne/NightBorne_hurt.gif"))
        this.#images.set("nightborneattack", loadImage("assets/images/enemies/nightborne/NightBorne_attack.gif"))
        this.#images.set("nightbornedead", loadImage("assets/images/enemies/nightborne/NightBorne_death.gif"))

        this.#images.set("playeridle", loadImage("assets/images/player/adventurer/adventurerIdle.gif"))
        this.#images.set("playerhurt", loadImage("assets/images/player/adventurer/adventurerHurt.gif"))
        this.#images.set("playerattack1", loadImage("assets/images/player/adventurer/adventurerAttack1.gif"))
        this.#images.set("playerattack2", loadImage("assets/images/player/adventurer/adventurerAttack2.gif"))
        this.#images.set("playerattack3", loadImage("assets/images/player/adventurer/adventurerAttack3.gif"))

        this.#images.set("skeletonplayeridle", loadImage("assets/images/player/skeleton/SkeletonIdle.gif"))
        this.#images.set("skeletonplayeridleblack", loadImage("assets/images/player/skeleton/SkeletonIdleblack.gif"))
        this.#images.set("skeletonplayerhurt", loadImage("assets/images/player/skeleton/SkeletonHurt.gif"))
        this.#images.set("skeletonplayerattack1", loadImage("assets/images/player/skeleton/SkeletonAttack.gif"))
        this.#images.set("skeletonplayerattack2", loadImage("assets/images/player/skeleton/SkeletonAttack.gif"))
        this.#images.set("skeletonplayerattack3", loadImage("assets/images/player/skeleton/SkeletonAttack.gif"))
        this.#images.set("skeletonplayerdead", loadImage("assets/images/player/skeleton/SkeletonDead.gif"))

        this.#images.set("knightplayeridle", loadImage("assets/images/player/knight/KnightIdle.gif"))
        this.#images.set("knightplayeridleblack", loadImage("assets/images/player/knight/KnightIdleblack.gif"))
        this.#images.set("knightplayerhurt", loadImage("assets/images/player/knight/knightHit.png"))
        this.#images.set("knightplayerattack1", loadImage("assets/images/player/knight/knightAttack.gif"))
        this.#images.set("knightplayerattack2", loadImage("assets/images/player/knight/knightAttack2.gif"))
        this.#images.set("knightplayerattack3", loadImage("assets/images/player/knight/knightAttack2.gif"))
        this.#images.set("knightplayerdead", loadImage("assets/images/player/knight/KnightDeath.gif"))


        this.#images.set("buttonstart", loadImage("assets/images/buttons/buttonstart.png"))
        this.#images.set("buttonstartpressed", loadImage("assets/images/buttons/buttonstartpressed.png"))

        this.#images.set("buttonpauze", loadImage("assets/images/buttons/buttonpauze.png"))
        this.#images.set("buttonpauzepressed", loadImage("assets/images/buttons/buttonpauzepressed.png"))

        this.#images.set("buttonback", loadImage("assets/images/buttons/buttonback.png"))
        this.#images.set("buttonbackpressed", loadImage("assets/images/buttons/buttonbackpressed.png"))

        this.#images.set("buttonsetting", loadImage("assets/images/buttons/buttonsettings.png"))
        this.#images.set("buttonsettingpressed", loadImage("assets/images/buttons/buttonsettingspressed.png"))

        this.#images.set("buttonmusic", loadImage("assets/images/buttons/buttonPlay.png"))
        this.#images.set("buttonmusicpressed", loadImage("assets/images/buttons/buttonPlayPressed.png"))

        this.#images.set("buttonleft", loadImage("assets/images/buttons/buttonleft.png"))
        this.#images.set("buttonleftpressed", loadImage("assets/images/buttons/buttonleftpressed.png"))

        this.#images.set("buttonright", loadImage("assets/images/buttons/buttonright.png"))
        this.#images.set("buttonrightpressed", loadImage("assets/images/buttons/buttonrightpressed.png"))

        this.#images.set("buttonhome", loadImage("assets/images/buttons/buttonhome.png"))
        this.#images.set("buttonhomepressed", loadImage("assets/images/buttons/buttonhomepressed.png"))

        this.#images.set("buttonlevel1", loadImage("assets/images/buttons/buttonlevel1.png"))
        this.#images.set("buttonlevel2", loadImage("assets/images/buttons/buttonlevel2.png"))
        this.#images.set("buttonlevel3", loadImage("assets/images/buttons/buttonlevel3.png"))
        this.#images.set("buttonlocked", loadImage("assets/images/buttons/buttonlocked.png"))

        this.#images.set("treebackground", loadImage("assets/backgrounds/trees.jpg"))
        this.#images.set("levelselectorbackground", loadImage("assets/backgrounds/levelselector.png"))


    }

        getImage(assetname) {
        try {
            return this.#images.get(assetname);
        } catch (exc) {
            throw new Error("file does not exist!");
        }
    }
}
