class Paper{
	constructor(x,y,r)
	{ var options={
		restruction:0.3,
		  friction:0,
		  density:1.2,
      isStatic:false
	
	}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
    this.image = loadImage("paper.png")


		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            //ellipse(0,0,this.r, this.r);
           imageMode(CENTER)
           image(this.image,0,0,this.r, this.r)  

			pop()
	}

}












