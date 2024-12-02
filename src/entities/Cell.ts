import { getIsValidCoords } from "../utils/getIsValidCoodrs";
import { Coordinates } from "./types";

export type CellParams = Coordinates

export class Cell implements CellParams {
	private _x: number;
	private _y: number;

	constructor(params: CellParams) {
		if(!getIsValidCoords(params)) 
			throw new Error("Невалидные координаты при создании клетки");

		this._x = params.x
		this._y = params.y
	}

	get x() {
		return this._x
	}

	get y() {
		return this._y
	}

	protected setNewCords = (cords: Coordinates) => {
		this._x = cords.x
		this._y = cords.y
	}
} 