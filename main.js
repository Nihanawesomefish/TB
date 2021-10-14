canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="";
var last_position_x,last_position_y;
color="black";
linewidth=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseevent="mousedown";

}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;
color=document.getElementById("color").value;
linewidth=document.getElementById("width").value;


if(mouseevent=="mousedown"){
ctx.beginPath();

ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
function cleararea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width <992){
document.getElementById("myCanvas").width=newwidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
 
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
console.log("touchstart");
last_position_x=e.touches[0].clientX- canvas.offsetLeft;
last_position_y=e.touches[0].clientY- canvas.offsetTop;
        
    }

   

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("touchmove");
         current_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =linewidth;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_x + "y = " + last_position_y);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_touch_x + "y = " + current_position_touch_y);
        ctx.lineTo(current_position_touch_x, current_position_touch_y);
        ctx.stroke();
        

        last_position_x = current_position_touch_x; 
        last_position_y = current_position_touch_y;
    }

