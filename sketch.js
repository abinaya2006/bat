const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    t1=loadImage("1.png")
    t2=loadImage("2.png")
    t3=loadImage("3.png")
    t4=loadImage("4.png") 
 
 
 }

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(1365,820)
    
    umbrella = new Umbrella(700,510);
 
    //creating drops
    if(frameCount % 125 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1300), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background("#00143E")

    //creating thunder
    rand = Math.round(random(1,4));

    if(frameCount % 60 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,1370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break; 
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
            default: break;
        }
         thunder.scale = random(0.3,0.6)
        //thunder.scale = Math.round(random(0.5,0.8))
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

