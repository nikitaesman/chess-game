import { Coordinates, FigureTypes } from "../types";
import { Figure } from "./Figure";
import { FigureWithGetPointByShift, GetCordsByShiftFromSelfParams } from "./FigureWithGetPointByShift";

export class King extends FigureWithGetPointByShift implements Figure {
	readonly type: FigureTypes = FigureTypes.King;
	readonly shifts: GetCordsByShiftFromSelfParams[] = [
		{
			shiftX: -1,
			shiftY: 0
		},
		{
			shiftX: -1,
			shiftY: -1
		},
		{
			shiftX: 0,
			shiftY: -1
		},
		{
			shiftX: 1,
			shiftY: -1
		},
		{
			shiftX: 1,
			shiftY: -1
		},
		{
			shiftX: 1,
			shiftY: -1
		},
		{
			shiftX: 1,
			shiftY: 0
		},
		{
			shiftX: 1,
			shiftY: 1
		},
		{
			shiftX: 0,
			shiftY: 1
		},
		{
			shiftX: -1,
			shiftY: 1
		},
	]

	private getIsEnemyKingTooClose = (cords: Coordinates): boolean => {
		for (const shiftItem of this.shifts) {
			const checkingCords = this.getCordsByShiftFromCords({
				...shiftItem,
				...cords
			})

			if (checkingCords) {
				const cell = this.gameBoard.getCell(checkingCords)

				if (cell && cell.type === FigureTypes.King && cell.side !== this.side) {
					return true
				}
			}
		}

		return false
	}

	get availableTurns(): Coordinates[] {
		const availableTurns: Coordinates[] = []

		this.shifts.forEach((el) => {
			const cords = this.getCordsByShiftFromSelf(el)

			if (cords) {
				const isEnemyKingClose = this.getIsEnemyKingTooClose(cords)

				if (!isEnemyKingClose) availableTurns.push(cords)
			}
		})

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