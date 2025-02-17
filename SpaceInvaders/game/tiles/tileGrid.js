class TileGrid {
    

    #tileSize;
    tiles;
    #width;
    #height;

    constructor(width, height, tileSize) {
        this.#tileSize = tileSize;
        this.#width = width;
        this.#height = height;
        this.#generateTileGrid();
    }

    #generateTileGrid() {
        //tiles is a 2D array, meaning that it is an array of arrays.
        //see https://www.freecodecamp.org/news/javascript-2d-arrays/ for more information about 2D arrays.
        this.tiles = new Array();
        let greenTileCount;
        let NormalTileCount;
        let redTileCount;
        let BlueTileCount;

        //generate tile grid here and place tiles in the 2D #tile array.
        for (let x = 0; x < this.#width; x++) {
            for (let y = 0; y < this.#height; y++) {
                //  window.innerWidth / 2 = y;
                //  window.innerHeight / 2 = x;

                let rand = Math.floor(Math.random() * 4) + 1;

                if (!this.tiles[x]) {
                    this.tiles[x] = new Array();
                }
                if (y => 8) {
                    if (x => 2) {
                        switch (rand) {
                            case 1:
                                greenTileCount += 1;
                                if (greenTileCount === 3) {
                                    this.tiles[x][y] = new BlueTile(gameManager.getImage("saphire"), this.#tileSize, x, y)
                                    BlueTileCount += 1;
                                    greenTileCount = 0;
                                    break;
                                }
                                NormalTileCount = 0;
                                redTileCount = 0;
                                BlueTileCount = 0;
                                this.tiles[x][y] = new GreenTile(gameManager.getImage("emerald"), this.#tileSize, x, y);
                                break;
                            case 2:
                                NormalTileCount += 1;
                                if (NormalTileCount === 3) {
                                    this.tiles[x][y] = new GreenTile(gameManager.getImage("emerald"), this.#tileSize, x, y)
                                    NormalTileCount = 0;
                                    greenTileCount += 1;
                                    break;
                                }
                                greenTileCount = 0;
                                redTileCount = 0;
                                BlueTileCount = 0;
                                this.tiles[x][y] = new NormalTile(gameManager.getImage("diamond"), this.#tileSize, x, y);
                                break;
                            case 3:
                                BlueTileCount += 1;
                                if (BlueTileCount === 3) {
                                    this.tiles[x][y] = new RedTile(gameManager.getImage("ruby"), this.#tileSize, x, y)
                                    redTileCount += 1;
                                    BlueTileCount = 0;
                                    break;
                                }
                                greenTileCount = 0;
                                NormalTileCount = 0;
                                redTileCount = 0;
                                this.tiles[x][y] = new BlueTile(gameManager.getImage("saphire"), this.#tileSize, x, y);

                                break;
                            case 4:
                                redTileCount += 1;
                                if (redTileCount === 3) {
                                    this.tiles[x][y] = new NormalTile(gameManager.getImage("diamond"), this.#tileSize, x, y)
                                    redTileCount = 0;
                                    NormalTileCount += 1;
                                    break;
                                }
                                BlueTileCount = 0;
                                greenTileCount = 0;
                                NormalTileCount = 0;
                                this.tiles[x][y] = new RedTile(gameManager.getImage("ruby"), this.#tileSize, x, y);
                                break;
                        }
                    }
                }
                else {
                    this.tiles[x][y] = new EmptyTile
                }


                if (x - 1 >= 2 && x - 2 >= 2) {
                    if (this.tiles[x - 1][y].type == this.tiles[x - 2][y].type && this.tiles[x - 1][y].type == this.tiles[x][y].type) {

                        if (this.tiles[x][y].type === 'green') {
                            this.tiles[x][y] = new NormalTile(gameManager.getImage("diamond"), this.#tileSize, x, y);
                        }
                        else if (this.tiles[x][y].type === 'normal') {
                            this.tiles[x][y] = new RedTile(gameManager.getImage("ruby"), this.#tileSize, x, y);
                        }
                        else if (this.tiles[x][y].type === 'blue') {
                            this.tiles[x][y] = new GreenTile(gameManager.getImage("emerald"), this.#tileSize, x, y);
                        }
                        else if (this.tiles[x][y].type === 'red') {
                            this.tiles[x][y] = new BlueTile(gameManager.getImage("saphire"), this.#tileSize, x, y);

                        }
                    }
                }
                if (y - 1 >= 8 && y - 2 >= 8) {
                    if (this.tiles[x][y - 1].type == this.tiles[x][y - 2].type && this.tiles[x][y - 1].type == this.tiles[x][y].type) {

                        if (this.tiles[x][y].type === 'green') {
                            this.tiles[x][y] = new NormalTile(gameManager.getImage("diamond"), this.#tileSize, x, y);
                        }
                        else if (this.tiles[x][y].type === 'normal') {
                            this.tiles[x][y] = new RedTile(gameManager.getImage("ruby"), this.#tileSize, x, y);
                        }
                        else if (this.tiles[x][y].type === 'blue') {
                            this.tiles[x][y] = new GreenTile(gameManager.getImage("emerald"), this.#tileSize, x, y);
                        }
                        else if (this.tiles[x][y].type === 'red') {
                            this.tiles[x][y] = new BlueTile(gameManager.getImage("saphire"), this.#tileSize, x, y);

                        }
                    }
                }


            }
        }

        console.log(this.tiles)
    }

    update(deltaTime) {
        //handle results from player input here...
    }

    draw() {
        for (let x = 2; x < this.#width; x++) {
            for (let y = 8; y < this.#height; y++) {
                this.tiles[x][y].draw();
            }
        }
    }

    getTileAtPosition(position) {
        const gridXPosition = Math.floor(position.x / this.#tileSize);
        const gridYPosition = Math.floor(position.y / this.#tileSize);

        return this.getTileAtGridIndex(gridXPosition, gridYPosition);
    }

    getTileAtGridIndex(x, y) {
        if (x < 0 || x >= this.#width || y < 0 || y >= this.#height) {
            outsideGrid = true;
        } else {
            outsideGrid = false;
            return this.tiles[x][y];
        }

    }
}
