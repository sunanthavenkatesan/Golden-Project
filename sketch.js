const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var planet;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,0,255); 
  Engine.update(engine);
  
  planet = new Planet(30, 30, 50)
  

  planet.display();
} 