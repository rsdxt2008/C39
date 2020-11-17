
var database;
 var gameState = 0;
 var playerCount;
 var form, player, game;
 var allPlayers;
 var distance = 0;
var car1, car2, car3, car4, cars;
var track, car2img, car1img, car3img, car4img;

function preload(){
 track = loadImage("images/images/track.jpg");
 car1img = loadImage("images/images/car1.png");
 car2img = loadImage("images/images/car2.png");
 car3img = loadImage("images/images/car3.png");
 car4img = loadImage("images/images/car4.png");
}
function setup(){
    createCanvas(displayWidth- 200, displayHeight- 300);
    
    database = firebase.database(); 
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if (playerCount === 4){
        game.update(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    drawSprites();
}

