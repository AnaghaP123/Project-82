var mouseEvent = "empty";
var last_x, last_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var radius = 10;
canvas.addEventListener("mousedown", md);
function md(e)
{
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
};
canvas.addEventListener("mousemove", mm);
function mm(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 10;
        ctx.arc(current_x, current_y, radius, 0, 360);
        ctx.stroke()
    }
    last_x = current_x;
    last_y = current_y;
}
canvas.addEventListener("mouseup", mu);
function mu(e)
{
    mouseEvent = "mouseUp";
};
canvas.addEventListener("mouseleave", ml);
function ml(e)
{
    mouseEvent = "mouseLeave";
};
function ClearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}