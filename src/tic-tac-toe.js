class TicTacToe {
	constructor() {}

	currentPlayer = "x";
	gameField = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	getCurrentPlayerSymbol() {
		return this.currentPlayer;
	}

	nextTurn(rowIndex, colIndex) {
		if (this.gameField[rowIndex][colIndex] != null) {
			return false;
		}
		this.gameField[rowIndex][colIndex] = this.currentPlayer;
		if (this.currentPlayer === "o") {
			this.currentPlayer = "x";
		} else {
			this.currentPlayer = "o";
		}
	}

	isFinished() {
		if (this.noMoreTurns() || this.getWinner() || this.isDraw()) {
			return true;
		} else {
			return false;
		}
	}

	getWinner() {
		if (
			this.gameField[0][0] === this.gameField[0][1] &&
			this.gameField[0][1] === this.gameField[0][2]
		) {
			return this.gameField[0][0];
		} else if (
			this.gameField[1][0] === this.gameField[1][1] &&
			this.gameField[1][1] === this.gameField[1][2]
		) {
			return this.gameField[1][0];
		} else if (
			this.gameField[2][0] === this.gameField[2][1] &&
			this.gameField[2][1] === this.gameField[2][2]
		) {
			return this.gameField[2][0];
		} else if (
			this.gameField[0][0] === this.gameField[1][0] &&
			this.gameField[1][0] === this.gameField[2][0]
		) {
			return this.gameField[0][0];
		} else if (
			this.gameField[0][1] === this.gameField[1][1] &&
			this.gameField[1][1] === this.gameField[2][1]
		) {
			return this.gameField[0][1];
		} else if (
			this.gameField[0][2] === this.gameField[1][2] &&
			this.gameField[1][2] === this.gameField[2][2]
		) {
			return this.gameField[0][2];
		} else if (
			this.gameField[0][0] === this.gameField[1][1] &&
			this.gameField[1][1] === this.gameField[2][2]
		) {
			return this.gameField[0][0];
		} else if (
			this.gameField[2][0] === this.gameField[1][1] &&
			this.gameField[1][1] === this.gameField[0][2]
		) {
			return this.gameField[2][0];
		} else {
			return null;
		}
	}

	noMoreTurns() {
		let temp = [];
		for (let i = 0; i < this.gameField.length; i++) {
			this.gameField[i].forEach((cell) => {
				if (cell) {
					temp.push("a");
				}
			});
		}

		if (temp.length === 9) {
			return true;
		} else {
			return false;
		}
	}

	isDraw() {
		return this.noMoreTurns() && !this.getWinner();
	}

	getFieldValue(rowIndex, colIndex) {
		return this.gameField[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
