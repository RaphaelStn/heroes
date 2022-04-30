class Game {
    constructor(GAME_MAP){
        this.GAME_MAP = GAME_MAP;
    }
    initialiseMap(imgArray, plateforms, backgrounds, deathzones){
        let y = null;
        let x = null;

        for(y=0; y<this.GAME_MAP.length; y++) {

            for(x=0; x<this.GAME_MAP[y].length; x++) {

                //plateforms
                if(this.GAME_MAP[y].charAt(x) == '0') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[0]));
                }
                //BG bot
                if(this.GAME_MAP[y].charAt(x) == 'B') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[1]));
                }
                //BG Top
                if(this.GAME_MAP[y].charAt(x) == 'A') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[2]));
                }
                //Deco down
                if(this.GAME_MAP[y].charAt(x) == 'T') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[3]));
                }
                //Corner L
                if(this.GAME_MAP[y].charAt(x) == 'C') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[4]));
                }
                //Corner R
                if(this.GAME_MAP[y].charAt(x) == 'V') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[5]));
                }
                //Side L
                if(this.GAME_MAP[y].charAt(x) == 'Q') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[6]));
                }
                //SideR
                if(this.GAME_MAP[y].charAt(x) == 'D') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[7]));
                }
                //Water
                if(this.GAME_MAP[y].charAt(x) == 'E') {
                    deathzones.push(new Deathzone(x*16, y*16, 16, 16, imgArray[8]));
                }
                //DecoL
                if(this.GAME_MAP[y].charAt(x) == 'L') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[9]));
                }
                //DecoR
                if(this.GAME_MAP[y].charAt(x) == 'R') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[10]));
                }
                //deco corner L
                if(this.GAME_MAP[y].charAt(x) == 'M') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[11]));
                }
                //deco corner R
                if(this.GAME_MAP[y].charAt(x) == 'N') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[12]));
                }
                //Fleur
                if(this.GAME_MAP[y].charAt(x) == 'F') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[13]));
                }
                //cHEST
                if(this.GAME_MAP[y].charAt(x) == '1') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[14]));
                }
                //single Plateform
                if(this.GAME_MAP[y].charAt(x) == 'I') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[15]));
                }
                //Single platform holder
                if(this.GAME_MAP[y].charAt(x) == 'J') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[16]));
                }
                //rock 
                if(this.GAME_MAP[y].charAt(x) == '7') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[17]));
                }
                //barrier L
                if(this.GAME_MAP[y].charAt(x) == '4') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[18]));
                }
                //barrier center
                if(this.GAME_MAP[y].charAt(x) == '5') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[19]));
                }
                //barrier R
                if(this.GAME_MAP[y].charAt(x) == '6') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[20]));
                }
                //plants
                 if(this.GAME_MAP[y].charAt(x) == 'W') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[21]));
                }
                //plants
                if(this.GAME_MAP[y].charAt(x) == 'X') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[22]));
                }
                if(this.GAME_MAP[y].charAt(x) == '+') {
                    plateforms.push(new Plateform(x*16, y*16, 16, 16, imgArray[23]));
                }
                if(this.GAME_MAP[y].charAt(x) == '2') {
                    backgrounds.push(new Background(x*16, y*16, 16, 16, imgArray[24]));
                }
            }
        }
    }
}