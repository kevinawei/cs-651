let mySVG = document.getElementById("board");
var numCircles = 0;
var maxSize = 40,
    maxX = 1060,
    maxY=350;

function newCircle(){
    var svgns = "http://www.w3.org/2000/svg";

    let x = Math.random()*(maxX - maxSize);
    let y = Math.random()*(maxY - maxSize);
    let radius = Math.random()*maxSize;

    let circle = document.createElementNS(svgns, "circle");

    console.log("new circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);

    let colorStr = `rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`;
    circle.setAttribute("fill", colorStr);

    return circle;
}
function drawCircle(){
    mySVG.appendChild(newCircle());
    numCircles++;
}
function clearSVG(){
    console.log("clear button pressed");
    for (let i =0; i<numCircles; i++) {
        mySVG.removeChild(mySVG.lastChild);
    }
    numCircles = 0;
    return mySVG;
}



document.getElementById("add").addEventListener("click", drawCircle);
document.getElementById("clear").addEventListener("click", clearSVG);