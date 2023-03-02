const PADDING_SIDES = 2;
const PADDING_ALL = 4;

let numOfSquaresOccupied = 0;

class BoardSquare{
	constructor(begX, begY, squareColor, hasPiece, whichPiece) {
		this.begX = begX;
		this.begY = begY;
		this.squareColor = squareColor;
		this.hasPiece = hasPiece;
		this.whichPiece = whichPiece;
	}
}
// Creates each square on the board of class BoardSquare
// and places it in squareArray for convenience.
let squareArray = [
	new BoardSquare(102, 2, '#cf0000', false, null),
	new BoardSquare(176, 2, '#303030', true, 0),
	new BoardSquare(250, 2, '#cf0000', false, null),
	new BoardSquare(324, 2, '#303030', true, 1),
	new BoardSquare(398, 2, '#cf0000', false, null),
	new BoardSquare(472, 2, '#303030', true, 2),
	new BoardSquare(546, 2, '#cf0000', false, null),
	new BoardSquare(620, 2, '#303030', true, 3),
	new BoardSquare(102, 76, '#303030', true, 4),
	new BoardSquare(176, 76, '#cf0000', false, null),
	new BoardSquare(250, 76, '#303030', true, 5),
	new BoardSquare(324, 76, '#cf0000', false, null),
	new BoardSquare(398, 76, '#303030', true, 6),
	new BoardSquare(472, 76, '#cf0000', false, null),
	new BoardSquare(546, 76, '#303030', true, 7),
	new BoardSquare(620, 76, '#cf0000', false, null),
	new BoardSquare(102, 150, '#cf0000', false, null),
	new BoardSquare(176, 150, '#303030', true, 8),
	new BoardSquare(250, 150, '#cf0000', false, null),
	new BoardSquare(324, 150, '#303030', true, 9),
	new BoardSquare(398, 150, '#cf0000', false, null),
	new BoardSquare(472, 150, '#303030', true, 10),
	new BoardSquare(546, 150, '#cf0000', false, null),
	new BoardSquare(620, 150, '#303030', true, 11),
	new BoardSquare(102, 224, '#303030', false, null),
	new BoardSquare(176, 224, '#cf0000', false, null),
	new BoardSquare(250, 224, '#303030', false, null),
	new BoardSquare(324, 224, '#cf0000', false, null),
	new BoardSquare(398, 224, '#303030', false, null),
	new BoardSquare(472, 224, '#cf0000', false, null),
	new BoardSquare(546, 224, '#303030', false, null),
	new BoardSquare(620, 224, '#cf0000', false, null),
	new BoardSquare(102, 298, '#cf0000', false, null),
	new BoardSquare(176, 298, '#303030', false, null),
	new BoardSquare(250, 298, '#cf0000', false, null),
	new BoardSquare(324, 298, '#303030', false, null),
	new BoardSquare(398, 298, '#cf0000', false, null),
	new BoardSquare(472, 298, '#303030', false, null),
	new BoardSquare(546, 298, '#cf0000', false, null),
	new BoardSquare(620, 298, '#303030', false, null),
	new BoardSquare(102, 372, '#303030', true, 12),
	new BoardSquare(176, 372, '#cf0000', false, null),
	new BoardSquare(250, 372, '#303030', true, 13),
	new BoardSquare(324, 372, '#cf0000', false, null),
	new BoardSquare(398, 372, '#303030', true, 14),
	new BoardSquare(472, 372, '#cf0000', false, null),
	new BoardSquare(546, 372, '#303030', true, 15),
	new BoardSquare(620, 372, '#cf0000', false, null),
	new BoardSquare(102, 446, '#cf0000', false, null),
	new BoardSquare(176, 446, '#303030', true, 16),
	new BoardSquare(250, 446, '#cf0000', false, null),
	new BoardSquare(324, 446, '#303030', true, 17),
	new BoardSquare(398, 446, '#cf0000', false, null),
	new BoardSquare(472, 446, '#303030', true, 18),
	new BoardSquare(546, 446, '#cf0000', false, null),
	new BoardSquare(620, 446, '#303030', true, 19),
	new BoardSquare(102, 520, '#303030', true, 20),
	new BoardSquare(176, 520, '#cf0000', false, null),
	new BoardSquare(250, 520, '#303030', true, 21),
	new BoardSquare(324, 520, '#cf0000', false, null),
	new BoardSquare(398, 520, '#303030', true, 22),
	new BoardSquare(472, 520, '#cf0000', false, null),
	new BoardSquare(546, 520, '#303030', true, 23),
	new BoardSquare(620, 520, '#cf0000', false, null)
];

function DrawBoard() {
	// Creates a black background 30 times each frame.
	ColorRect (0, 0, CANVAS_WIDTH, CANVAS_HEIGHT - 6, 'black');
	// Creates the golden backdrop for the game board 30 times each frame.
	ColorRect (100, 0, 593, CANVAS_HEIGHT - 6, '#A48502');	
	
	// Goes through each element in the squareArray array, and displays each
	// board square like on a traditional checkers board.
	squareArray.forEach(function(square){
		ColorRect (square.begX, square.begY, SQUARE_DIMENSIONS, SQUARE_DIMENSIONS, square.squareColor);
	});
	
	// This draws a blue square over the square the mouse is over, if the mouse button is held down, 
	// square is a black square, and it has no piece on it.
	if (mouseDown && squareArray[boardSquareOn].squareColor == '#303030' && !squareArray[boardSquareOn].hasPiece) {
		let x = squareArray[boardSquareOn].begX;
		let y = squareArray[boardSquareOn].begY;
		ColorRectOpacity (x + PADDING_SIDES, y + PADDING_SIDES, SQUARE_DIMENSIONS - PADDING_ALL, SQUARE_DIMENSIONS - PADDING_ALL, 
			"0, 0, 255, 0.5");
	}
}
// This will take the checker piece the mouse has held, and will highlight the squares it can move to
// in a semi-opaque white square.
function HighlightAbleSquares() {
	WhichPieceIsFloating();
	let pieceToEvaluate = pieceArray[pieceFloating].onSquare;
}