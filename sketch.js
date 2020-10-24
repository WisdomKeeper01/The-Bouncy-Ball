const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world,ground,ball
var options = {
  isStatic:true
}
var ballOption ={
  restitution : 1
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  ground = Bodies.rectangle(400,375,800,25,options);
  ball = Bodies.circle(400,100,20,ballOption)
  World.add(world, ground)
  World.add(world,ball)

}

function draw() {
  background(0); 
  Engine.update(engine)
  var pos1 = ground.position
  var pos2 =  ball.position
  fill("brown")
  rectMode(CENTER)
  rect(pos1.x,pos1.y,800,15)
  fill("blue")
  ellipseMode(RADIUS)
  ellipse(pos2.x,pos2.y,20,20)
   

}