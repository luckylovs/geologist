const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10; 
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
stone1 = new Stone(200,200,10,10);
rubber =  new Rubber(900,450,70)
stone2 = new Stone(230,200,10,10) 
stone3 = new Stone(250,200,10,10) 
stone4 = new Stone(270,200,10,10) 
stone5 = new Stone(290,200,10,10) 
stone6 = new Stone(310,200,10,10) 
stone7 = new Stone(330,200,10,10) 
stone8 = new Stone(350,200,10,10) 
stone9 = new Stone(370,200,10,10) 
stone10 = new Stone(390,200,10,10)
iron = new Iron(300,300,50,50)
box = new Box(600,400,60,60)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    rubber.display();
    stone1.display();
    plane.display();
    hammer.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone10.display(); 
    iron.display();
    box.display();
}