import { getRandomString } from "../../utils/getRandomString";
import { Cell, CellParams } from "../Cell";
import { GameBoard } from "../GameBoard";
import { Coordinates, FigureTypes, Side } from "../types";

export interface FigureParams extends CellParams {
	side: Side;
	gameBoard: GameBoard;
}

export abstract class Figure extends Cell {
	readonly type: FigureTypes
	readonly side: Side
	readonly gameBoard: GameBoard;
	readonly hash: string

	constructor(params: FigureParams) {
		super(params)

		this.type = FigureTypes.Pawn
		this.side = params.side
		this.gameBoard = params.gameBoard
		this.hash = getRandomString(5)
	}

	get availableTurns(): Coordinates[] {
		return []
	}

	get isBlack(): boolean {
		return this.side === "black"
	}

	turn = (cords: Coordinates): void => {
		console.log("Figure: turn: not init",cords);
	}
} 