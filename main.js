
var canvas= new fabric.Canvas('myCanvas');

ball_x= 10;
ball_y= 10;

hole_x= 400;
hole_y= 500;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf hole.jpg", function(Img) {
        player_object= Img;
         
    player_object.scaleToWidth(50);
        player_object.scaleToHeight(50);
        player_object.set({
       top:hole_y,
       left: hole_x
    });
        canvas.add(player_object);
       });  
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
        block_object= Img;
         
    block_object.scaleToWidth(50);
        block_object.scaleToHeight(50);
        block_object.set({
       top:ball_y,
       left: ball_x
    });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
    
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x)&&(ball_y == hole_y)){
        canvas.remove(player_object);
        console.log("Your have hit it");
        document.getElementById('hd3').innerHTML = "You have hit the goal";
       }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	
    function up(){
        if(ball_y >=0){
            ball_y = ball_y - block_image_height;
            console.log("block image height ="+ block_image_height);
            console.log(" when Up arrow key is pressed x="+ ball_x +" , Y ="+ ball_y);
            canvas.remove(block_object);
            new_image();
        }
    }
    
    function down(){
        if(ball_y <=600){
            ball_y = ball_y + block_image_height;
            console.log("block image height ="+ block_image_height);
            console.log(" when down arrow key is pressed x="+ ball_x +" , Y ="+ ball_y);
            canvas.remove(block_object);
            new_image();
        }
    }
    
    function left(){
        if(ball_x >=0){
            ball_x = ball_x - block_image_width;
            console.log("block image width ="+ block_image_width);
            console.log(" when left arrow key is pressed x="+ ball_x +" , Y ="+ ball_y);
            canvas.remove(block_object);
            new_image();
        }
    }
    function right(){
        if(ball_x <=880){
            ball_x = ball_x + block_image_width;
            console.log("block image width ="+ block_image_width);
            console.log(" when right arrow key is pressed x="+ ball_x +" , Y ="+ ball_y);
            canvas.remove(block_object);
            new_image();
        }
    }

