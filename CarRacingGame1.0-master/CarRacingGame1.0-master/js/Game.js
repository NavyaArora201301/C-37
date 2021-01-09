class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    Car1=createSprite(100,200);
    Car2=createSprite(300,200);
    Car3=createSprite(500,200);
    Car4=createSprite(700,200);

    Cars=[Car1,Car2,Car3,Car4];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //var display_position = 130;

      var index=0 //holding the positions of the car
      var x=0; //x=xposition
      var y //y=yposition

      for(var plr in allPlayers){ 
        x=x+200;
        y=displayHeight-allPlayers[plr].distance //to move the car in forward direction
        index=index+1 //control the array
        Cars[index-1].x=x; //x position of all Cars 
        Cars[index-1].y=y; //y position of all Cars 
        
        if(index===player.index){ //will change color/highlight for the particular browser
          Cars[index-1].shapeColor="Red";
          camera.position.x=displayWidth/2; //storing the x psition of the cam with the width of the SCREEN
          camera.position.y=Cars[index-1].y //storing the y psition of the cam by the movement of the particular car

        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    drawSprites()
  }
}
