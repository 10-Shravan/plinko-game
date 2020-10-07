const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var p,ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var p=new Plinko(400,200);
  var ground=new ground(200,300);
}

function draw() {
  background(255,0,255);  
  drawSprites();
}