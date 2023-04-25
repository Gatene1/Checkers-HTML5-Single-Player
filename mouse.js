function MouseUpToggle(evt) {
	mouseUp = true;
	mouseDown = false;
	WhichPieceIsFloating();
	
	pieceArray.forEach(function(piece) {
		if (piece.mouseHas && squareArray[boardSquareOn].squareColor == '#303030' && !squareArray[boardSquareOn].hasPiece) {
			// Needs to check if the square can be moved to, based on who's turn it is, whether they are going forward/reverse, and kinged
			piece.begX = squareArray[boardSquareOn].begX;
			piece.begY = squareArray[boardSquareOn].begY;
			piece.onSquare = boardSquareOn;
			squareArray[boardSquareOn].hasPiece = true;
			squareArray[boardSquareOn].whichPiece = piece.id - 1;
		} else if (piece.mouseHas) {
			piece.begX = squareArray[piece.onSquare].begX;
			piece.begY = squareArray[piece.onSquare].begY;
			squareArray[piece.onSquare].hasPiece = true;
			squareArray[piece.onSquare].whichPiece = piece.id - 1;
		}
		
		// The difference between this if-statement and the one above is that this one isn't only
		// excecuted if the if-statement above is false. This if-statement will execute regardless.
		if (piece.mouseHas)
			piece.mouseHas = false;
			
			
		
	});
	
	/*
	// If mouse pointer is hovering over black square and the square isn't occupied.
			if (squareArray[boardSquareOn].squareColor == '#303030' && squareArray[boardSquareOn].hasPiece == false) {
				// Figure out how to tell which piece is being carried by the mouse.
				// Then set its begX and begY parameters, and fix the lines of code below.
				squareArray[boardSquareOn].hasPiece = true;
				squareArray[boardSquareOn].whichPiece = piece.id - 1;
			} else {
				squareArray[piece.onSquare].hasPiece = true;
				squareArray[piece.onSquare].whichPiece = piece.id - 1;
			}
    */
}

function MouseCalculations() {
	// Will set boardSquareOn equal to the board square the mouse pointer is hovering over.
	if (mouseX <= 691 && mouseX >= 100 && mouseY > 0 && mouseY <= 591)
		boardSquareOn = Math.floor(Math.ceil(mouseY / 74) * 8 - (8 - ((mouseX-100) / 74)));
	// Will draw wether the board square the mouse pointer is on has a piece where the mouse pointer is located.
	//DrawText(mouseX, mouseY, "yellow", "24pt", "Comic Sans MS", squareArray[boardSquareOn].hasPiece);
}

// This will draw a checker piece, if the mouse button is held down and the pieceArray has a piece 
// whose mouseHas property is true.
function DrawMouseCursor() {
	if (mouseDown) {
		pieceArray.forEach(function(piece) {
			if (piece.mouseHas) {
				FigureOutWhichImageToShow(piece.id - 1, mouseX, mouseY);
			}
		});
	}
}