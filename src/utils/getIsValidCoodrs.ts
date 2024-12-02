import { Coordinates } from "../entities/types";

export const getIsValidCoords = (cords: Coordinates): boolean => {
	const {
		x,
		y
	} = cords

	if(x < 0 || x > 7) return false;
	if(y < 0 || y > 7) return false;

	return true
} 