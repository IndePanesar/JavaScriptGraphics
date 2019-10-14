// Javascript functions for the randomCircles page
// Function just calls the updateCanvas function every second
function initCircles(fn){
    setInterval(fn, 1000);
    fn();
}

// Function to setup the canvas
function updateCirclesCanvas(){
    let objCanvas = document.getElementById("randomCirclesCanvas");
    // Set the canvas size to be the window size and fill it with a random colour
    const width = window.innerWidth;
    const height = window.innerHeight;
    objCanvas.width = width;
    objCanvas.height = height;
    let context = objCanvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.fillStyle = getRandomColour();
    context.fillRect(0, 0, width, height);

    // Draw the circles of radius 10px
    const radius = 10;
    const gaps = radius * 2;    // This is the distance between the centers of the circles
    const wcount = parseInt(width/gaps);    // How many circles in the width of the window
    const hcount = parseInt(height/gaps);   // and height of window.

    // Draw the circles and fill them with a random colour
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

// Function to draw a circle centred in the canvas.
function colourTheCircle(){
    let objCanvas = document.getElementById("canvasCircle");
    // Set the canvas size to be the window size and fill it with a random colour
    let width = window.innerWidth;
    let height = window.innerHeight;
    objCanvas.width = width;
    objCanvas.height = height;
    let context = objCanvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.fillStyle = getRandomColour();
    context.fillRect(0, 0, width, height);

    context.fillStyle = getRandomColour();
    context.beginPath();
    context.arc(parseInt(width/2), parseInt(height/2), parseInt(Math.min(width,height)/3), 0, Math.PI *2, true);
    context.closePath();
    context.fill();
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
  