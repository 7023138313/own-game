const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
function preload(){
    board=loadImage("board3.jpg")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
spinner= createSprite(windowWidth/2,windowHeight/2);
    spinner.addImage(board)
    
 

   
}

function draw(){
    background("blue");
    spinner.rotation=50
    spinner.rotationSpeed = 50
    Engine.update(engine);
    drawSprites();
}