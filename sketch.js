var canvas;
var music;
var box,surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite (0,580,360,30);
    surface1.shapeColor = rgb(0,0,255);
    music.play();

    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = rgb(255,128,0);
    music.stop();

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = rgb(153,0,76);
    music.play();

    surface4 = createSprite(740,580,220,30);
    surface4.shapeColor = rgb(0,100,0);
    music.play();


    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = rgb(255,255,255);
    box.velocityY = 9;
    box.velocityX = 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = ("blue");
        music.play();
        
    }
    
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor = ("yellow");
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        
    }
    
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = ("purple");
        music.play();
    }
    
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = ("green");
        music.play();
    }

   
    drawSprites();
} 

function isTouching(){

    if(box.x - surface1.x < surface1.width/2 - box.wdth/2  
        && surface1.x - box.x < surface1.width/2 + box.width/2
        && box.y - surface1.y < surface1.height/2 + box.height/2
        && surface1.y - box.y < surface1.height/2 + box.height/2){
            box.shapeColor = "blue";
            surface1.shapeColor = "blue";
    }
    else{
        box.shapeColor = "white";
        surface1.shapeColor = "white";
    }
  
    if(box.x - surface2.x < surface2.width/2 - box.wdth/2  
        && surface2.x - box.x < surface2.width/2 + box.width/2
        && box.y - surface2.y < surface2.height/2 + box.height/2
        && surface2.y - box.y < surface2.height/2 + box.height/2){
            box.shapeColor = "yellow";
            surface2.shapeColor = "yellow";
    }
    else{
        box.shapeColor = "white";
        surface2.shapeColor = "white";

    }

    if(box.x - surface3.x < surface3.width/2 - box.wdth/2  
        && surface3.x - box.x < surface3.width/2 + box.width/2
        && box.y - surface3.y < surface3.height/2 + box.height/2
        && surface3.y - box.y < surface3.height/2 + box.height/2){
            box.shapeColor = "purple";
            surface3.shapeColor = "purple";
    }
    else{
        box.shapeColor = "white";
        surface3.shapeColor = "white";

    }

    if(box.x - surface4.x < surface4.width/2 - box.wdth/2  
        && surface4.x - box.x < surface4.width/2 + box.width/2
        && box.y - surface4.y < surface4.height/2 + box.height/2
        && surface4.y - box.y < surface4.height/2 + box.height/2){
            box.shapeColor = "green";
            surface4.shapeColor = "green";
    }
    else{
        box.shapeColor = "white";
        surface4.shapeColor = "white";

    }

}


