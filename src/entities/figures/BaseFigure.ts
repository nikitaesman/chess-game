import { Cell } from "../Cell";
import { GameBoard } from "../GameBoard";
import { Coordinates, Side } from "../types";
import { Figure, FigureParams } from "./Figure";

interface TurnParams {
	cords: Coordinates;
	availableTurns: Coordinates[];
	figure: Figure;
}

export class BaseFigure extends Cell {
	readonly side: Side;
	readonly gameBoard: GameBoard;

	constructor(params: FigureParams) {
		super(params)

		this.side = params.side
		this.gameBoard = params.gameBoard
	}

	get isBlack() {
		return this.side === "black"
	}

	protected basicTurn = (params: TurnParams): void => {
		const {
			cords,
			availableTurns,
			figure
		} = params

		const isCorrectTurn = availableTurns.find(el => el.x == cords.x && el.y === cords.y)

		if (!isCorrectTurn) throw new Error("Incorrect turn" + JSON.stringify(cords, null, 2))

		this.gameBoard.setCell({
			x: this.x,
			y: this.y,
		})

		this.setNewCords(cords)

		this.gameBoard.setCell(figure)
	}
}