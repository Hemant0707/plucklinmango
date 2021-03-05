class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			'restitution' :0.5,
            'friction' :1.0,
			}
			
			this.body=Bodies.circle(this.x, this.y, this.r, options)
			this.diameter=diameter;
		    this.image=loadImage("images/mango.png")
		    World.add(world, this.body);
	}

	display()
	{
		
		push()
		translate(this.body.position.x,this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.diameter)
		pop();
 }
}