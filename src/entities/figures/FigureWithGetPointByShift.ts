import { getIsValidCoords } from "../../utils/getIsValidCoodrs";
import { Coordinates } from "../types";
import { BaseFigure } from "./BaseFigure";

export interface GetCordsByShiftFromCordsParams extends Coordinates {
	shiftX: number;
	shiftY: number;
}

export type GetCordsByShiftFromSelfParams = Pick<GetCordsByShiftFromCordsParams, "shiftX" | 'shiftY'>

export class FigureWithGetPointByShift extends BaseFigure {
	protected getCordsByShiftFromSelf = (params: GetCordsByShiftFromSelfParams) =>
		this.getCordsByShiftFromCords({
			...params,
			x: this.x,
			y: this.y
		})

	protected getCordsByShiftFromCords = (params: GetCordsByShiftFromCordsParams): N<Coordinates> => {
		const cellCords = {
			x: params.x + params.shiftX,
			y: params.y + params.shiftY
		}

		if (getIsValidCoords(cellCords)) {
			const cell = this.gameBoard.getCell(cellCords)

			if (!cell) {
				return cellCords
			}

			if (cell.side !== this.side) {
				return cellCords
			}
		}

		return null
	}
}