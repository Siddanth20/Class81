canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");

color="Blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(100,100,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;

    console.log("X = " + x + " ,Y = " + y);
    circle(x,y);

}

function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();

}