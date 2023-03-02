class CheckerPiece {
	constructor(id, begX, begY, color, onSquare, mouseHas, kinged) {
		this.id = id;
		this.begX = begX;
		this.begY = begY;
		this.color = color;
		this.onSquare = onSquare;
		this.mouseHas = mouseHas;
		this.kinged = kinged;
	}
}

let pieceArray = [
	new CheckerPiece(1, 176, 2, 'black', 1, false, false),
	new CheckerPiece(2, 324, 2, 'black', 3, false, false),
	new CheckerPiece(3, 472, 2, 'black', 5, false, false),
	new CheckerPiece(4, 620, 2, 'black', 7, false, false),
	new CheckerPiece(5, 102, 76, 'black', 8, false, false),
	new CheckerPiece(6, 250, 76, 'black', 10, false, false),
	new CheckerPiece(7, 398, 76, 'black', 12, false, false),
	new CheckerPiece(8, 546, 76, 'black', 14, false, false),
	new CheckerPiece(9, 176, 150, 'black', 17, false, false),
	new CheckerPiece(10, 324, 150, 'black', 19, false, false),
	new CheckerPiece(11, 472, 150, 'black', 21, false, false),
	new CheckerPiece(12, 620, 150, 'black', 23, false, false),
	new CheckerPiece(13, 102, 372, 'red', 40, false, false),
	new CheckerPiece(14, 250, 372, 'red', 42, false, false),
	new CheckerPiece(15, 398, 372, 'red', 44, false, false),
	new CheckerPiece(16, 546, 372, 'red', 46, false, false),
	new CheckerPiece(17, 176, 446, 'red', 49, false, false),
	new CheckerPiece(18, 324, 446, 'red', 51, false, false),
	new CheckerPiece(19, 472, 446, 'red', 53, false, false),
	new CheckerPiece(20, 620, 446, 'red', 55, false, false),
	new CheckerPiece(21, 102, 520, 'red', 56, false, false),
	new CheckerPiece(22, 250, 520, 'red', 58, false, false),
	new CheckerPiece(23, 398, 520, 'red', 60, false, false),
	new CheckerPiece(24, 546, 520, 'red', 62, false, false),
];

let piece1Black = new Image();
let piece2Black = new Image();
let piece3Black = new Image();
let piece4Black = new Image();
let piece5Black = new Image();
let piece6Black = new Image();
let piece7Black = new Image();
let piece8Black = new Image();
let piece9Black = new Image();
let piece10Black = new Image();
let piece11Black = new Image();
let piece12Black = new Image();
let piece13Red = new Image();
let piece14Red = new Image();
let piece15Red = new Image();
let piece16Red = new Image();
let piece17Red = new Image();
let piece18Red = new Image();
let piece19Red = new Image();
let piece20Red = new Image();
let piece21Red = new Image();
let piece22Red = new Image();
let piece23Red = new Image();
let piece24Red = new Image();

piece1Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece2Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece3Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece4Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece5Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece6Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece7Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece8Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece9Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece10Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece11Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece12Black.src = "https://agamedesigner.info/BlackCheckerHeads.png";
piece13Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece14Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece15Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece16Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece17Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece18Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece19Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece20Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece21Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece22Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece23Red.src = "https://agamedesigner.info/RedCheckerHeads.png";
piece24Red.src = "https://agamedesigner.info/RedCheckerHeads.png";


function DrawPiece() {
	// Goes through each element, like above forEach loop, and places appropriate piece on it.
	squareArray.forEach(function(square){
		// if the square has a piece on it, then get square.whichPiece, and grab that value from pieceArray
		if (square.hasPiece) {
			FigureOutWhichImageToShow(square.whichPiece, square.begX, square.begY);			
		}
	});
}

function FigureOutWhichImageToShow(whichImage, whereAtX, whereAtY) {
	//alert ("Showing Checker #" + whichImage + "  X = " + whereAtX + "  Y = " + whereAtY);
	switch (whichImage) {
		case 0:
			boardContext.drawImage(piece1Black, whereAtX, whereAtY);
			break;
		case 1:
			boardContext.drawImage(piece2Black, whereAtX, whereAtY);
			break;
		case 2:
			boardContext.drawImage(piece3Black, whereAtX, whereAtY);
			break;
		case 3:
			boardContext.drawImage(piece4Black, whereAtX, whereAtY);
			break;
		case 4:
			boardContext.drawImage(piece5Black, whereAtX, whereAtY);
			break;
		case 5:
			boardContext.drawImage(piece6Black, whereAtX, whereAtY);
			break;
		case 6:
			boardContext.drawImage(piece7Black, whereAtX, whereAtY);
			break;
		case 7:
			boardContext.drawImage(piece8Black, whereAtX, whereAtY);
			break;
		case 8:
			boardContext.drawImage(piece9Black, whereAtX, whereAtY);
			break;
		case 9:
			boardContext.drawImage(piece10Black, whereAtX, whereAtY);
			break;
		case 10:
			boardContext.drawImage(piece11Black, whereAtX, whereAtY);
			break;
		case 11:
			boardContext.drawImage(piece12Black, whereAtX, whereAtY);
			break;
		case 12:
			boardContext.drawImage(piece13Red, whereAtX, whereAtY);
			break;
		case 13:
			boardContext.drawImage(piece14Red, whereAtX, whereAtY);
			break;
		case 14:
			boardContext.drawImage(piece15Red, whereAtX, whereAtY);
			break;
		case 15:
			boardContext.drawImage(piece16Red, whereAtX, whereAtY);
			break;
		case 16:
			boardContext.drawImage(piece17Red, whereAtX, whereAtY);
			break;
		case 17:
			boardContext.drawImage(piece18Red, whereAtX, whereAtY);
			break;
		case 18:
			boardContext.drawImage(piece19Red, whereAtX, whereAtY);
			break;
		case 19:
			boardContext.drawImage(piece20Red, whereAtX, whereAtY);
			break;
		case 20:
			boardContext.drawImage(piece21Red, whereAtX, whereAtY);
			break;
		case 21:
			boardContext.drawImage(piece22Red, whereAtX, whereAtY);
			break;
		case 22:
			boardContext.drawImage(piece23Red, whereAtX, whereAtY);
			break;
		case 23:
			boardContext.drawImage(piece24Red, whereAtX, whereAtY);
			break;
	}
}

function CheckerPieceFloat(evt) {	
	mouseUp = false;
	mouseDown = true;
	// This checks to see if the mouse button is registered as pressed, and if so,
	// checks to see if the board square the mouse pointer is on has a piece, and if so,
	// the begX and begY of that specific piece is set to the mouse pointer coordinates.
	if (mouseDown == true) {
		if (squareArray[boardSquareOn].hasPiece) {
			pieceArray[squareArray[boardSquareOn].whichPiece].begX = mouseX;
			pieceArray[squareArray[boardSquareOn].whichPiece].begY = mouseY;
			pieceArray[squareArray[boardSquareOn].whichPiece].mouseHas = true;
			squareArray[boardSquareOn].hasPiece = false;
		}
	}
}

function WhichPieceIsFloating() {
	pieceArray.forEach(function(piece) {
		if (piece.mouseHas)
			return piece.id - 1;
	});
}