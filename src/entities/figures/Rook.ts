import { Coordinates, FigureTypes } from "../types";
import { BaseFigure } from "./BaseFigure";
import { Figure } from "./Figure";

export class Rook extends BaseFigure implements Figure {
	readonly type: FigureTypes = FigureTypes.Rook

	private getForwardTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionY = this.y - 1; projectionY >= 0; projectionY--) {
			const cords = {
				x: this.x,
				y: projectionY
			}

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

	private getBackwardTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionY = this.y + 1; projectionY < 8; projectionY++) {
			const cords = {
				x: this.x,
				y: projectionY
			}

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

	private getLeftTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionX = this.x - 1; projectionX >= 0; projectionX--) {
			const cords = {
				x: projectionX,
				y: this.y
			}

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

	private getRightTurns = (): Coordinates[] => {
		const cells: Coordinates[] = []

		for (let projectionX = this.x + 1; projectionX <= 7; projectionX++) {
			const cords = {
				x: projectionX,
				y: this.y
			}

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
			...this.getForwardTurns(),
			...this.getBackwardTurns(),
			...this.getLeftTurns(),
			...this.getRightTurns(),
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