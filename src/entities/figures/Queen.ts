import { Coordinates, FigureTypes } from "../types";
import { Bishop } from "./Bishop";
import { Figure } from "./Figure";
import { Rook } from "./Rook";

export class Queen extends Rook implements Figure {
	readonly type: FigureTypes = FigureTypes.Queen;

	get availableTurns(): Coordinates[] {
		const rookTurns = super.availableTurns

		const virtualBishop = new Bishop({
			gameBoard: this.gameBoard,
			side: this.side,
			x: this.x,
			y: this.y
		})

		const availableTurns: Coordinates[] = [
			...rookTurns,
			...virtualBishop.availableTurns
		]
		
		return availableTurns
	}

	turn = (cords: Coordinates): void => {
		this.basicTurn({
			cords,
			availableTurns: this.availableTurns,
			figure: this
		})
	}
}