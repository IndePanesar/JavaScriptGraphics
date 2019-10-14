// Javascript functions for the randomCircles page
// Function just calls the updateCanvas function
function initCircles(){
    setInterval(updateCanvas, 1000);
    updateCanvas();
}

// Function to setup the canvas
function updateCanvas(){
    let objCanvas = document.getElementById("randomCirclesCanvas");
    const width = window.innerWidth;
    const height = window.innerHeight;
    objCanvas.width = width;
    objCanvas.height = height;
    let context = objCanvas.getContext("2d");
    context.fillStyle = "#FCEAB1";
    context.fillRect(0, 0, width, height);

    const radius = 10;
    const gaps = radius + 10;
    const wcount = parseInt(width/gaps);
    const hcount = parseInt(height/gaps);
    // const acolours = ["#ff0000", "#00ff00", "0000ff"];
    // let colour = acolours[parseInt(Math.random() * acolours.length)];
    for(let x = 0; x < wcount; x++) {
        for(let y = 0; y < hcount; y++) {
            context.fillStyle = getRandomColour();
            context.beginPath();
            context.arc(radius+gaps*x, radius+gaps*y, radius, 0, Math.PI *2, true);
            context.closePath();
            context.fill();    
        }
    }
}

// Function to generate random colors
function getRandomColour() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  