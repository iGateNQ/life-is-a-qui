// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000100000000000300030300000000000000000000000000000000000000000000000000000000000000000000000301000000000103000000030300000000000000000000000000000000000000000000000000000000000000000000030303030300000000000003000000030300000000000000000000000000000000000000000000000000000000000000010101010101010000000000010101010101030303000000000000000000000000000000000000000000000000000000000000000000000303000003030300000003000000030300000000000000000000000000000000000000000000000000000000000000000000000000000003000303000300000003030300000000000000000000000000000000000000000000000000010000000000000000000103030100000303030300000300030300000000000000000000000000000000000000000000020001010000000000000001030000000100030300030303030303000300000000000000000000000000000000000000000000000101010000000000010103000000010100030300030303030303030303030303030300000000000000000000000000000101010101010101010101010100000101010101010101010000000000000303030000000000000000000000000000000000`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
.....2222222......................................
..................................................
..................................................
..2.........2.....................................
..22.......2......................................
..222...2.22.2....................................
2222222222222222..................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "classroom":
            case "tile1":return tile1;
            case "myTile":
            case "tile3":return tile3;
            case "myTile1":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
