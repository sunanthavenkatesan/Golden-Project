class Planet {
    constructor(x, y, radius){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }


        this.body = Bodies.circle(x, y, radius, options);

        // this.x = 30
        // this.y = 30
        this.radius = radius

        this.image = loadImage("images/planet.png");
        
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 30, 30, this.radius);
        pop();
    }
 
}