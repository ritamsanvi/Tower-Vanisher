const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,500,1200,20);

    block1 = new Block(710,40);
    block2 = new Block(700,40);

    block3 = new Block(760,40);
    block4 = new Block(760,40);
    block5 = new Block(700,50);
    block6 = new Block(720,40);

    stand = new Stand(800,240,490,10);
    stone= new Stone(500,300,10,10)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(stone.body,{x:290, y:50});


    Engine.run(engine);
}

function draw(){
    background("black")

    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    ground.display();
    stand.display();
    
    stone.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}

