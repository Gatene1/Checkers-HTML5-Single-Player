const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const SQUARE_DIMENSIONS = 71;

let gameBoard, boardContext;
let mouseX, mouseY;
let mouseUp = true;
let mouseDown = false;
let boardSquareOn;
let turn = 0; // 0 = black, 1 = red
let turnTitle;
let turnId;

let blackScore = 0;
let redScore = 0;

let pieceFloating;


function UpdateMousePos(evt) {
	// Position of mouse on page.
	let rect = gameBoard.getBoundingClientRect();
	let root = document.documentElement;
	
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

// This code runs when the Web page first loads.
window.onload = function() {
	gameBoard = document.getElementById('board');
	boardContext = gameBoard.getContext('2d');
	
	let framesPerSecond = 30;
	// 30 times a second, the DrawBoard function is called
	setInterval(CallAllFunctions, 1000/framesPerSecond);
	
	gameBoard.addEventListener('mousemove', UpdateMousePos);
	gameBoard.addEventListener('mousedown', CheckerPieceFloat);
	gameBoard.addEventListener('mouseup', MouseUpToggle)
}

function DrawTitle() {
	turnId = document.getElementById("turn");
	if (turn == 0)
		turnTitle = "-- Black's Turn --";
	if (turn == 1)
		turnTitle = "Red's Turn";
	turnId.textContent = turnTitle;
}

function CallAllFunctions() {
	DrawBoard();
	DrawPiece();
	MouseCalculations();
	DrawMouseCursor();
	DrawTitle();
	// This will display the xy coordinates where the mouse pointer is at, and will display at the pointer.
	//DrawText(mouseX, mouseY, "yellow", "24px", "sans-serif", Math.floor(mouseX) + ", " + Math.floor(mouseY)); 
	// This will display which board square the mouse pointer is pointing, and will display at the pointer.
	//DrawText(mouseX, mouseY, "yellow", "24px", "sans-serif", Math.floor(Math.ceil(mouseY / 74) * 8 - (8 - ((mouseX-100) / 74)))); 
	
	// This will check to see if the mouse cursor is out of bounds, if not, it will display the board square
	// the mouse is hovering over.
	/*if (mouseDown == true && mouseX <= 691 && mouseX >= 100 && mouseY > 0 && mouseY <= 591) {
		DrawText(mouseX, mouseY, "yellow", "24px", "Comic Sans MS", Math.floor(Math.ceil(mouseY / 74) * 8 - (8 - ((mouseX-100) / 74)))); 
	} else {
		mouseUp = true;
		mouseDown = false;
	} */
}
// A function that allow squares and rectangles to be one line pieces of code.
function ColorRect(x, y, width, height, fillColor) {
	boardContext.fillStyle = fillColor;
	boardContext.fillRect(x, y, width, height);
}

function ColorRectOpacity(x, y, width, height, fillColorOpacity) {
	boardContext.fillStyle = "rgba(" + fillColorOpacity + ")";
	boardContext.fillRect(x, y, width, height);
}

function DrawText(x, y, fillColor, fontSize, fontFace, whatToSay) {
	boardContext.font = fontSize + " " + fontFace;
	boardContext.fillStyle = fillColor;
	boardContext.fillText(whatToSay, x, y);
}