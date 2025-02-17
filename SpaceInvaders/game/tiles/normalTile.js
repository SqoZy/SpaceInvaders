/**
* De normalTile classe is een subclasse van de Tile class die een specefieke type heeft.
* @author Jordy Teunis
*/
class NormalTile extends Tile {

    constructor(image, size, x, y, type) {
        super(image, size, x, y, type);
        type = this.type;
        this.type = 'normal';
    }
}
