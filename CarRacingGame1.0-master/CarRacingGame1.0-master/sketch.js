var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Car1, Car2, Car3, Car4, Cars //"cars" is an array

function setup(){
  canvas = createCanvas(displayWidth-10,displayHeight-20); //to change the size of the screen acc. to the width of the device.
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
