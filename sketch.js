
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0;
var particle;
var turn=0;
var gameState="start";

var g1,g2,g3;
var d1,d2,d3,d4,d5,d6,d7,dg;
var p1,p2,p3,p4;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b0;
function preload()
{
	
}

var plinkos=[];
var particles=[];
function setup() {
	createCanvas(480,650);


	engine = Engine.create();
	world = engine.world;

	g1=new Ground(240,640,480,20);
	g2=new Ground(10,325,20,660);
	g3=new Ground(470,325,20,660);
	d1=new Division(25,515,10,230)
	d2=new Division(95,515,10,230);
	d3=new Division(165,515,10,230);
	d4=new Division(235,515,10,230);
	d5=new Division(305,515,10,230);
	d6=new Division(379,515,10,230);
	d7=new Division(454,515,10,230);
	dg=new Division(240,626,446,10);

    //b2=new Plinko()	

	
	


	
	for (var j = 40;j<480;j=j+50){
		plinkos.push(new Plinko(j,75,10))
	}

	for (var h = 60;h<460;h=h+50){
		plinkos.push(new Plinko(h,135,10))
	}

	for (var k = 40;k<480;k=k+50){
		plinkos.push(new Plinko(k,195,10))
	}

	for (var l = 60;l<460;l=l+50){
		plinkos.push(new Plinko(l,255,10))
	}

	



	Engine.run(engine);
  
}

// function keyPressed(){
// 	if(keyCode==32){
// 	if(gameState!=="end"){
// 		turn++;
// 		particle=new Particle(mouseX,10,10)
// 	}
// 	}	
// }


function draw() {
  rectMode(CENTER);
  background(0);
  g1.display();
  g2.display();
  g3.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  dg.display();
  

  fill("white")
	text("Score: "+score,20,20)

	text("500",50,400)
	text("300",120,400)
	text("100",190,400)
	text("100",260,400)
	text("300",330,400)
	text("500",400,400)


//   if(frameCount%20===0){
// 	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
// }

  for(var i=0;i<plinkos.length;i++){
	  plinkos[i].display();
  }

  for(var h=0;h<plinkos.length;h++){
	plinkos[h].display();
}

for(var k=0;k<plinkos.length;k++){
	plinkos[k].display();
}

for(var l=0;l<plinkos.length;l++){
	plinkos[l].display();
}

if(gameState=="end"){
	fill("red")
	textSize(30)
	text("GAME OVER",240,325)
}


if(particle!=null){
	particle.display();
	// console.log(particle)
	if(particle.body.position.y>425){

		if(particle.body.position.x<90 || particle.body.position.x>375){
			score=score+500;
			particle=null;
			if(turn>=5) gameState="end";
		}

		else if(particle.body.position.x<165 || particle.body.position.x>308){
			score=score+300;
			particle=null;
			if(turn>=5) gameState="end";
		}

		else if(particle.body.position.x>160 || particle.body.position.x<300){
			score=score+100;
			particle=null;
			if(turn>=5) gameState="end";
		}
		
	}
}
  
console.log(mouseX,mouseY)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode==32){
	if(gameState!=="end"){
		turn++;
		particle=new Particle(mouseX,10,10)
	}
	}	
}



