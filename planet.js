class Planet{
    constructor(x, y, radius) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/planet.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, innerWidth/2, innerHeight/2, this.width, this.height);
        pop();
      }
}
