import { getIsValidCoords } from "../../utils/getIsValidCoodrs";
import { Coordinates, FigureTypes } from "../types";
import { BaseFigure } from "./BaseFigure";
import { Figure } from "./Figure";

export class Bishop extends BaseFigure implements Figure {
	readonly type: FigureTypes = FigureTypes.Bishop;

	private getLeftUpTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionX = this.x - 1; projectionX >= 0; projectionX--) {
			const cords = {
				x: projectionX,
				y: this.y + projectionX - this.x
			}

			if (!getIsValidCoords(cords)) break

			const cell = this.gameBoard.getCell(cords)

			if (!cell) {
				cells.push(cords)
			} else if (cell.side !== this.side) {
				cells.push(cords)

				break
			} else {
				break
			}
		}

		return cells
	}

	private getLeftDownTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionX = this.x - 1; projectionX >= 0; projectionX--) {
			const cords = {
				x: projectionX,
				y: this.y - (projectionX - this.x)
			}

			if (!getIsValidCoords(cords)) break

			const cell = this.gameBoard.getCell(cords)

			if (!cell) {
				cells.push(cords)
			} else if (cell.side !== this.side) {
				cells.push(cords)

				break
			} else {
				break
			}
		}

		return cells
	}

	private getRightUpTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionX = this.x + 1; projectionX <= 7; projectionX++) {
			const cords = {
				x: projectionX,
				y: this.y + this.x - projectionX
			}

			if (!getIsValidCoords(cords)) break

			const cell = this.gameBoard.getCell(cords)

			if (!cell) {
				cells.push(cords)
			} else if (cell.side !== this.side) {
				cells.push(cords)

				break
			} else {
				break
			}
		}

		return cells
	}

	private getRightDownTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionX = this.x + 1; projectionX <= 7; projectionX++) {
			const cords = {
				x: projectionX,
				y: this.y + projectionX - this.x
			}

			if (!getIsValidCoords(cords)) break

			const cell = this.gameBoard.getCell(cords)

			if (!cell) {
				cells.push(cords)
			} else if (cell.side !== this.side) {
				cells.push(cords)

				break
			} else {
				break
			}
		}

		return cells
	}

	get availableTurns(): Coordinates[] {
		const availableTurns: Coordinates[] = [
			...this.getLeftUpTurns(),
			...this.getLeftDownTurns(),
			...this.getRightUpTurns(),
			...this.getRightDownTurns(),
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