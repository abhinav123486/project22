class Stone {
    constructor(x,y,width,height){
      var option = {
        'density':12,
        'friction':0.9,
        'restitution':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,option);
      this.width = width;
      this.height = height;

      world.add(world,this.body);
    }
    display(){
      var stonepos = this.body.position;
      push()
      translate(stonepos.x,stonepos.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      rect(300,350,this.width,this.height);
      pop()
    }
}