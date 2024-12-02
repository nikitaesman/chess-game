import { Coordinates, FigureTypes } from "../types";
import { Figure } from "./Figure";
import { FigureWithGetPointByShift, GetCordsByShiftFromSelfParams } from "./FigureWithGetPointByShift";


export class Knight extends FigureWithGetPointByShift implements Figure {
	readonly type: FigureTypes = FigureTypes.Knight;
	readonly shifts: GetCordsByShiftFromSelfParams[] = [
		{
			shiftX: 1,
			shiftY: -2
		},
		{
			shiftX: 2,
			shiftY: -1
		},
		{
			shiftX: -1,
			shiftY: -2
		},
		{
			shiftX: -2,
			shiftY: -1
		},
		{
			shiftX: -2,
			shiftY: 1
		},
		{
			shiftX: -1,
			shiftY: 2
		},
		{
			shiftX: 2,
			shiftY: 1
		},
		{
			shiftX: 1,
			shiftY: 2
		}
	]

	get availableTurns(): Coordinates[] {
		const availableTurns: Coordinates[] = []

		this.shifts.forEach((shiftItem) => {
			const cords = this.getCordsByShiftFromSelf(shiftItem)

			if (cords) availableTurns.push(cords)
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