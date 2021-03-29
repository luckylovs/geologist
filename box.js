class Box{
	constructor(x,y,width,height)
	{
        var options = {
            'restitution':0.9,
            'friction':0.3,
            'density':20
        }
		this.body=Bodies.rectangle(x,y,width,height ,options)
		this.width = width;
		this.height = height;
		World.add(world, this.body);

	}
	display()
	{
			var Boxpos=this.body.position;
			var angle = this.body.angle		
			push()

			translate(Boxpos.x, Boxpos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
             rect(0,0,this.width,this.height)
			pop()
	}

}