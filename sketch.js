var START = 0
var PLAY = 1 
var END = 2
var gameState = START
function preload(){
    back1Img = loadImage("Images/Back1.jpg")
    back2Img = loadImage("Images/back2.png")
    harryfImg = loadImage("Images/harryf.png")
    playbuttonIMG = loadImage("Images/playbutton.png")
    voldemortfImg = loadImage("Images/voldemortf.png")
    restartImg = loadImage("Images/Restart.png")
    harrybImg = loadImage("Images/harryb.png")
    }
    function setup(){
      createCanvas(windowWidth,windowHeight)
      back1 = createSprite(width/2,height/2)
      back1.addImage(back1Img)
      back2 = createSprite(width/2,height/2)
      back2.addImage(back2Img)
      back2.visible = false
      back1.scale = 0.7
      playbutton = createSprite(width/2,height/2 + 100)
      playbutton.addImage(playbuttonIMG)
      playbutton.scale = 0.5
      restart = createSprite(width/2,height/2 + 100)
      restart.addImage(restartImg)
      restart.visible = false
      harryf = createSprite(width/3-225,height/2 +150)
      harryf.addImage(harryfImg)
      voldemortf = createSprite(width/2+375,height/2 +150)
      voldemortf.addImage(voldemortfImg)
      harryb = createSprite(width/3-175,height/2+275)
      harryb.addImage(harrybImg)
      harryb.visible = false
      harryb.scale = 0.6
      harryb.rotation = 360
    }
    function draw(){
      background(0)
      drawSprites()
      if(gameState === START){
        restart.visible = false
          if(mousePressedOver(playbutton)){
            gameState = PLAY
          }
      }
      if(gameState === PLAY){
          back1.visible = false
          harryf.visible = false
          playbutton.visible = false
          back2.visible = true
          voldemortf.visible = true
          voldemortf.y = height/2 + 275
          voldemortf.x = width/2+425
          harryb.visible = true
      }
    }