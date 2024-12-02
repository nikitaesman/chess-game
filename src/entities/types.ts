import { Figure } from "./figures/Figure";

export enum FigureTypes {
	Pawn = "pawn",
	Rook = "rook",
	Queen = "queen",
	Knight = "knight",
	King = "king",
	Bishop = "bishop"
}

export type Side = "black" | "white";

export interface Coordinates {
	x: number;
	y: number;
}

export type GameCell = N<Figure>;