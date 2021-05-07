const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;

var rubber;
var iron;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer1 = new Hammer(10,100);

    rubber = new Rubber(600,200,40,40);

   iron = new Iron(450,150,70,60);

    stone = new Stone(750,180,50,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer1.display();
    
    rubber.display();
    iron.display();
   stone.display();
}