
var backgroundImg
var mario1
var marioImg
function preload() {
    backgroundImg = loadImage("Background.jpg");
 //   mario1 =  loadAnimation("Marion_run.png","Mario_walk.png");  //correction in the names of the pic files
   mario1=loadImage("Marion_run.png");
}


function setup(){
    var canvas = createCanvas(displayWidth - 30, displayHeight-150); //created the size according to screen size
   marioImg= createSprite(80, 540); //sprite was not created
   marioImg.addAnimation("run", mario1);
   marioImg.scale=0.2;
}

function draw(){
   background(backgroundImg);
  //  if (ground.x < 0){
  //      ground.x = ground.width/2;
//}

drawSprites();
}
