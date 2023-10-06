var mouseEvent = "empty";
var lastPositionOf_x, lastPositionOf_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "purple";
width_of_line = 2;
canvas.addEventListener("mousedown", md);
function md(e)
{
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", mu);
function mu(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", ml);
function ml(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", mm);
function mm(e)
{
    currentPositionOf_x = e.clientX - canvas.offsetLeft;
    currentPositionOf_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(currentPositionOf_x, currentPositionOf_y, 30, 0, 2*Math.PI);
        ctx.stroke();
    }
    lastPositionOf_x = currentPositionOf_x;
    lastPositionOf_y = currentPositionOf_y;
}