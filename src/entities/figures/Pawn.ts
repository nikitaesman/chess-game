import { Figure } from "./Figure";
import { Coordinates, FigureTypes } from "../types";
import { BaseFigure } from "./BaseFigure";

export class Pawn extends BaseFigure implements Figure {
	readonly type: FigureTypes = FigureTypes.Pawn

	get availableTurns(): Coordinates[] {
		const availableTurns: Coordinates[] = []

		const forwardCellCords: Coordinates = {
			x: this.x,
			y: this.y + (this.isBlack ? -1 : 1)
		}

		const turnForward = this.gameBoard.getCell(forwardCellCords)

		if (!turnForward) {
			availableTurns.push(forwardCellCords)
		}

		const isFirstPawnTurn = this.y === (this.isBlack ? 6 : 1)

		if (isFirstPawnTurn) {
			const dubleForwardCellCords: Coordinates = {
				x: this.x,
				y: this.y + (this.isBlack ? -2 : 2)
			}

			const dubleTurnForward = this.gameBoard.getCell(dubleForwardCellCords)

			if (!dubleTurnForward) {
				availableTurns.push(dubleForwardCellCords)
			}
		}

		const leftKillTurnCell = this.gameBoard.getCell({
			x: this.x - 1,
			y: this.y + (this.isBlack ? -1 : 1)
		})

		if (leftKillTurnCell && leftKillTurnCell.side !== this.side) {
			availableTurns.push(leftKillTurnCell)
		}

		const rightKillTurnCell = this.gameBoard.getCell({
			x: this.x + 1,
			y: this.y + (this.isBlack ? -1 : 1)
		})

		if (rightKillTurnCell && rightKillTurnCell.side !== this.side) {
			availableTurns.push(rightKillTurnCell)
		}

		return availableTurns
	}


	private getIsTransformation = (cords: Coordinates): boolean => {
		return cords.y === (this.isBlack ? 0 : 7)
	}

	turn = (cords: Coordinates): void => {
		const isTransform = this.getIsTransformation(cords)

		if(isTransform) {
			alert("Add transformation")
		}

		this.basicTurn({
			cords,
			availableTurns: this.availableTurns,
			figure: this
		})
	}
}