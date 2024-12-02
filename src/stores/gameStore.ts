import { makeAutoObservable } from "mobx";
import { GameBoard } from "../entities/GameBoard";
import { Pawn } from "../entities/figures/Pawn";
import { Coordinates, GameCell } from "../entities/types";
import { Queen } from "../entities/figures/Queen";

class GameStore {
	gameBoard: GameBoard
	selectedFigure: GameCell = null;

	constructor() {
		makeAutoObservable(this);

		this.gameBoard = new GameBoard()

		this.initFiguresPlacements()
	}

	initFiguresPlacements = () => {
		this.gameBoard.setEmptyBoard()

		const whitePawnsYCord = 1

		const whitePawns = this.gameBoard.board[whitePawnsYCord].map((_el, i) => {
			return new Pawn({
				gameBoard: this.gameBoard,
				side: "white",
				x: i,
				y: whitePawnsYCord
			})
		})

		whitePawns.forEach((el) => {
			this.gameBoard.setCell(el)
		})

		const pawn = new Pawn({
			gameBoard: this.gameBoard,
			side: "white",
			x: 3,
			y: 6
		})

		const pawn2 = new Pawn({
			gameBoard: this.gameBoard,
			side: "white",
			x: 2,
			y: 5
		})

		const pawn3 = new Pawn({
			gameBoard: this.gameBoard,
			side: "white",
			x: 1,
			y: 3
		})

		this.gameBoard.setCell(pawn)
		this.gameBoard.setCell(pawn2)
		this.gameBoard.setCell(pawn3)
		this.gameBoard.setCell(new Queen({
			gameBoard: this.gameBoard,
			side: "black",
			x: 3,
			y: 3
		}))
	}

	get availableTurns(): Coordinates[] {
		if (!this.selectedFigure) return []

		return this.selectedFigure.availableTurns
	}

	boardClick = (cords: Coordinates) => {
		if (!this.selectedFigure) {
			this.boardSelectFigure(cords)
		}

		const isWasTurn = this.turn(cords)

		if (!isWasTurn) {
			this.boardSelectFigure(cords)
		}
	}

	private boardSelectFigure = (cords: Coordinates) => {
		const cell = this.gameBoard.getCell(cords)

		if (!cell) {
			this.selectedFigure = null

			return
		}

		this.selectedFigure = cell;
	}

	private turn = (cords: Coordinates): boolean => {
		const isInAvailable = this.availableTurns.find(el => el.x === cords.x && el.y === cords.y)

		if (!isInAvailable) return false

		this.selectedFigure?.turn(isInAvailable)

		this.selectedFigure = null

		return true
	}
}

export const gameStore = new GameStore()