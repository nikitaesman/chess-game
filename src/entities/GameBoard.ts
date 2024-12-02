import { BaseFigure } from "./figures/BaseFigure";
import { Figure } from "./figures/Figure";
import { Coordinates, GameCell } from "./types";

export class GameBoard {
	board!: GameCell[][];

	constructor() {
		this.setEmptyBoard()
	}

	setEmptyBoard = () => {
		this.board = new Array(8).fill(1).map(() => new Array<GameCell>(8).fill(null))
	}

	setCell = (param: Figure | Coordinates) => {
		const {
			x,
			y,
		} = param

		const value = param instanceof BaseFigure ? param : null

		//@ts-expect-error there is correctly, couse all figures extends BaseFigure
		this.board[y][x] = value
	}

	getCell = (cords: Coordinates): GameCell => {
		const {
			x,
			y
		} = cords

		return this.board[y][x]
	}
}