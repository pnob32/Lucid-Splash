const SPLASH_IMG_1 = "assets/yosemite1.jpg";
const SPLASH_IMG_2 = "assets/yosemite2.jpg";

var fade_rate = 1;
var loader;

var canvas;
var stage;

$(function() {
	// initialization
	console.log("Starting splash page...");
  
  initCanvas();

	preloadImages();
});

function initCanvas() {
  // 
	canvas = document.getElementById("splash-canvas");
  stage = new createjs.Stage(canvas);
  
  
  //canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;
  
  canvas.addEventListener("click",fullscreen)
  
	var messageField = new createjs.Text("Loading", "bold 50px Arial", "#000000");
	messageField.maxWidth = canvas.width;
	messageField.textAlign = "center";
	messageField.textBaseline = "middle";
	messageField.x = canvas.width / 2;
	messageField.y = canvas.height / 2;
	stage.addChild(messageField);
	stage.update();
  
}

function preloadImages() {
	// create image manifest for preloadjs
	var manifest = [
		{src: SPLASH_IMG_1, id: "image1"},
		{src: SPLASH_IMG_2, id: "image2"},
	];

	// initialize preloader queue and pass manifest
	loader = new createjs.LoadQueue();
	loader.on("complete", handleComplete, this);
	loader.loadManifest(manifest);
}

function handleComplete() {
	// fetch loaded images from preloader
	var image1 = loader.getResult("image1");
	var image2 = loader.getResult("image2");

	// create easeljs objects from images
	var banner1 = new createjs.Bitmap(image1);
	var banner2 = new createjs.Bitmap(image2);

	// setup size and position

	// setup opacity animation

	// cleanup splash page to transition to underlying web page
}
 
function fullscreen(event){
 // canvas.removeEventListener("click", fullscreen);
  
  if(canvas.webkitRequestFullScreen) {
    canvas.webkitRequestFullScreen();
  }
  else {
    canvas.mozRequestFullScreen();
  }
  //canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;
  //canvas.addEventListener("click", unFullscreen);
}
