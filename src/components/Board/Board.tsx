import { FC } from 'react';

import styles from './Board.module.scss'
import Cell from './Cell/Cell';
import { gameStore } from '../../stores/gameStore';
import { observer } from 'mobx-react-lite';
import FigureUi from './FigureUi/FigureUi';

export const Board: FC = observer(() => {
	const { gameBoard, availableTurns, selectedFigure } = gameStore;

	return (
		<div className={styles.board}>
			{gameBoard.board.map((row, y) => {
				return row.map((gameCell, x) => {
					const isEvenY: boolean = y % 2 === 0;
					const xAcc: number = isEvenY ? x + 1 : x
					const isEvenX: boolean = xAcc % 2 === 0;

					const isAvailableTurn = !!availableTurns.find((el) => el.x === x && el.y === y)

					const key = `x: ${x}, y: ${y}`

					return <>
					<Cell
						key={key}
						x={x}
						y={y}
						color={isEvenX ? "black" : "white"}
						isAvailableForTurn={isAvailableTurn}
					/>
					{gameCell !== null ? <FigureUi key={key + "figure"} figure={gameCell} isSelected={selectedFigure === gameCell}/>: null}
					</>
				})
			})}
		</div>
	)
})