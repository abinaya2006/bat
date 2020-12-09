class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:0.1           
        }
        this.image=loadImage("rain drop.png")
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 10;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,1300), y:random(0,400)})
        }
    }

    showDrop(){
        
        imageMode(CENTER);
        image(this.image,this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}