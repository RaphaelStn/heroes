//Loading levels 
import {MAP_LEVEL_1} from './level_1.js';

//Loading DOM El
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
let menu = document.querySelector('#menu');
let gameover = document.querySelector('.gameover');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
cnv.width = 300;
cnv.height = 180;


//Variables init
let level = MAP_LEVEL_1;
let player;
let keys = [];
let gravity = 0.05;
let game = new Game(level) ;
let camX;
let camY;
let idle_index = true;
let run_index = 0;
let playerImg;
let AnimID;
let playerAnimID

//Arrays of tiles for each classes of tiles 
let plateforms =[];
let backgrounds = [];
let deathzones = [];

//Array of img for animations
let tileArray = [];
let PlayerArray =  [];

//Loading tiles
tileArray[0] = new Image();
tileArray[0].src = 'assets/tiles/tile045.png'
tileArray[1] = new Image();
tileArray[1].src = 'assets/tiles/tile028.png'
tileArray[2] = new Image();
tileArray[2].src = 'assets/tiles/tile097.png'
tileArray[3] = new Image();
tileArray[3].src = 'assets/tiles/tile114.png'
tileArray[4] = new Image();
tileArray[4].src = 'assets/tiles/tile044.png'
tileArray[5] = new Image();
tileArray[5].src = 'assets/tiles/tile060.png'
tileArray[6] = new Image();
tileArray[6].src = 'assets/tiles/tile061.png'
tileArray[7] = new Image();
tileArray[7].src = 'assets/tiles/tile063.png'
tileArray[8] = new Image();
tileArray[8].src = 'assets/tiles/tile093.png'
tileArray[9] = new Image();
tileArray[9].src = 'assets/tiles/tile098.png'
tileArray[10] = new Image();
tileArray[10].src = 'assets/tiles/tile096.png'
tileArray[11] = new Image();
tileArray[11].src = 'assets/tiles/tile113.png'
tileArray[12] = new Image();
tileArray[12].src = 'assets/tiles/tile115.png'
tileArray[13] = new Image();
tileArray[13].src = 'assets/tiles/tile099.png'
tileArray[14] = new Image();
tileArray[14].src = 'assets/tiles/tile082.png'
tileArray[15] = new Image();
tileArray[15].src = 'assets/tiles/tile047.png'
tileArray[16] = new Image();
tileArray[16].src = 'assets/tiles/tile064.png'
tileArray[17] = new Image();
tileArray[17].src = 'assets/tiles/tile101.png'
tileArray[18] = new Image();
tileArray[18].src = 'assets/tiles/tile048.png'
tileArray[19] = new Image();
tileArray[19].src = 'assets/tiles/tile049.png'
tileArray[20] = new Image();
tileArray[20].src = 'assets/tiles/tile050.png'
tileArray[21] = new Image();
tileArray[21].src = 'assets/tiles/tile001.png'
tileArray[22] = new Image();
tileArray[22].src = 'assets/tiles/tile000.png'
tileArray[23] = new Image();
tileArray[23].src = 'assets/tiles/tile041.png'
tileArray[24] = new Image();
tileArray[24].src = 'assets/tiles/tile084.png'


//Loading characters using flipped img to save performance on player drawing
PlayerArray[0] = new Image()
PlayerArray[0].src = 'assets/characters/tile023.png';
PlayerArray[1] = new Image()
PlayerArray[1].src = 'assets/characters/tile025.png';
PlayerArray[2] = new Image()
PlayerArray[2].src = 'assets/characters/tile037.png';
PlayerArray[3] = new Image()
PlayerArray[3].src = 'assets/characters/tile038.png';
PlayerArray[4] = new Image()
PlayerArray[4].src = 'assets/characters/tile039.png';
PlayerArray[5] = new Image()
PlayerArray[5].src = 'assets/characters/tile040.png';
PlayerArray[6] = new Image()
PlayerArray[6].src = 'assets/characters/tile023flip.png';
PlayerArray[7] = new Image()
PlayerArray[7].src = 'assets/characters/tile025flip.png';
PlayerArray[8] = new Image()
PlayerArray[8].src = 'assets/characters/tile037flip.png';
PlayerArray[9] = new Image()
PlayerArray[9].src = 'assets/characters/tile038flip.png';
PlayerArray[10] = new Image()
PlayerArray[10].src = 'assets/characters/tile039flip.png';
PlayerArray[11] = new Image()
PlayerArray[11].src = 'assets/characters/tile040flip.png';


//ANIMATIONS
function playerAnim() {
    if(player.flip == false) {
        if (Math.abs(player.velocity.x) < 0.1) {
            if(idle_index) {
                playerImg = PlayerArray[0]
                idle_index = false;
            } else {
                playerImg = PlayerArray[1]
                idle_index = true;
            }
        }
        else if (Math.abs(player.velocity.x) > 0.1) {
            if(run_index == 0) {
                playerImg = PlayerArray[2]
                run_index = 1
            } else if(run_index == 1) {
                playerImg = PlayerArray[3]
                run_index = 2;
            } else if(run_index == 2) {
                playerImg = PlayerArray[4]
                run_index = 3;
            } else if(run_index == 3) {
                playerImg = PlayerArray[5]
                run_index = 0
            }
        }
    }
    else if (player.flip == true) {
        if (Math.abs(player.velocity.x) < 0.1) {
            if(idle_index) {
                playerImg = PlayerArray[6]
                idle_index = false;
            } else {
                playerImg = PlayerArray[7]
                idle_index = true;
            }
        }
        else if (Math.abs(player.velocity.x) > 0.1) {
            if(run_index == 0) {
                playerImg = PlayerArray[8]
                run_index = 1
            } else if(run_index == 1) {
                playerImg = PlayerArray[9]
                run_index = 2;
            } else if(run_index == 2) {
                playerImg = PlayerArray[10]
                run_index = 3;
            } else if(run_index == 3) {
                playerImg = PlayerArray[11]
                run_index = 0
            }
        }
    }
}


//MAIN LOGIC AND CANVAS LOOP
function main() {
    AnimID = requestAnimationFrame(main)
    let x = player.x
    let y = player.y
    camX = -x + cnv.width / 2 -20;
    camY = -y + cnv.height / 2;  
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = '#314D79';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.translate(Math.round(camX), Math.round(camY));

    //Draw the platerforms + collisions with player + collisions with monster
    plateforms.forEach((plateform) => {
        plateform.draw(ctx);
        plateform.collision(player);
    });

    //Draw deathzones
    deathzones.forEach((deathzone) => {
        deathzone.draw(ctx);
        deathzone.collision(player);
        if(player.death == true) {
            stop()
        }
    });


    //Draw the background props (no collisions)
    backgrounds.forEach((background) => {
        background.draw(ctx);
    })

    //draw the player in last so he renders in front
    player.update(ctx, playerImg);

}

function start() {
    cnv.style.display = 'flex';
    menu.style.display= 'none';
    gameover.style.display = 'none';

    //Load player
    playerImg = PlayerArray[0];
    player = new Player(256, 150, 32, 32, gravity, keys);

    //Load map, camera settings, and launch interval for main logic
    game.initialiseMap(tileArray, plateforms, backgrounds, deathzones);
    AnimID = requestAnimationFrame(main)
    playerAnimID = window.setInterval(playerAnim, 300)
};
function stop() {
    gameover.style.display = 'block';
    window.cancelAnimationFrame(AnimID)
    window.clearInterval(playerAnimID)
}

//Event listeners
btn.addEventListener('click', _ => {
    start();
})
btn2.addEventListener('click', _ => {
    start();
})
document.body.addEventListener("keydown", k => {
    keys[k.keyCode] = true;
});
document.body.addEventListener("keyup", k => {
    keys[k.keyCode] = false;
});
