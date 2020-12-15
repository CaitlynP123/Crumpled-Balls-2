class Paper{
    constructor(x,y){
        var option = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.paper = Matter.Bodies.circle(x,y,15,option)
        this.image = loadImage("paper.png")
        World.add(world, this.paper)
            }
    display(){
        
        imageMode(CENTER)
        image(this.image,this.paper.position.x,this.paper.position.y,50,50)
       }
}