const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine, world;

var object;
var ground, ball;

function setup() {
  var canvas = createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

var options = {
  isStatic: true
}

ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);
  console.log(ground);
  var ball_options = {
    restitution:1.0
  }
 ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

}

function draw() { 
  background(150);  
  Engine.update(engine);
rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}