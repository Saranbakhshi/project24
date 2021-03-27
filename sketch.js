const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var Rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(10,100);
    stone= new Stone(600,550,70,70)
    iron= new Iron(400,550,60,60)
    Rubber= new rubber(200,550,80,20)
    plane = new Plane(600,height,1200,20)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   
    hammer.display();
    stone.display();
    iron.display();
    Rubber.display();
    plane.display();
 
}