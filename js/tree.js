class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=450;
		this.Height=600;
		this.Thickness=10;
		
		this.image=loadImage("images/tree.png");
		this.body=Bodies.rectangle(this.x, this.y, this.Width, this.Thickness, {isStatic:true})
		
		World.add(world, this.body);
		

	}
	display()
	{
			var pos=this.body.position;

		
		
			imageMode(CENTER);
			image(this.image, this.x,this.y,this.Width, this.Height)

			
	}

}