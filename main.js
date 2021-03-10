canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var radius = document.getElementById("circle_radius").value;
var lineWidth = document.getElementById("circle_lineWidth").value;
var color = document.getElementById("circle_color").value;
var mouseEvent = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
  radius = document.getElementById("circle_radius").value;
  lineWidth = document.getElementById("circle_lineWidth").value;
  color = document.getElementById("circle_color").value;
  mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
  radius = document.getElementById("circle_radius").value;
  lineWidth = document.getElementById("circle_lineWidth").value;
  color = document.getElementById("circle_color").value;
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
  radius = document.getElementById("circle_radius").value;
  lineWidth = document.getElementById("circle_lineWidth").value;
  color = document.getElementById("circle_color").value;
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  radius = document.getElementById("circle_radius").value;
  lineWidth = document.getElementById("circle_lineWidth").value;
  color = document.getElementById("circle_color").value;
  var last_mouse_X="";
  var last_mouse_Y="";
  
  var current_mouse_X = e.clientX - canvas.offsetLeft;
  var current_mouse_Y = e.clientY - canvas.offsetTop;
     if(mouseEvent =="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.arc(current_mouse_X, current_mouse_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
     }
     last_mouse_X = current_mouse_X;
     last_mouse_Y = current_mouse_Y;
}