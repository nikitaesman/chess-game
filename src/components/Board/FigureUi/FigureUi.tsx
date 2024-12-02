import { FC, ReactNode } from 'react';

import PawnSvg from '../../../assets/figures/pawn.svg?react'
import KingSvg from '../../../assets/figures/king.svg?react'
import BishopSvg from '../../../assets/figures/bishop.svg?react'
import KnightSvg from '../../../assets/figures/knight.svg?react'
import QueenSvg from '../../../assets/figures/queen.svg?react'
import RookSvg from '../../../assets/figures/rook.svg?react'

import styles from './FigureUi.module.scss'
import { Figure } from '../../../entities/figures/Figure';
import { FigureTypes } from '../../../entities/types';
import classNames from 'classnames';

const SVG_BY_FIGURES: Record<FigureTypes, ReactNode> = {
	pawn: <PawnSvg />,
	king: <KingSvg />,
	bishop: <BishopSvg />,
	knight: <KnightSvg />,
	queen: <QueenSvg />,
	rook: <RookSvg />
}

interface FigureUiProps {
	figure: Figure;
	isSelected: boolean;
}

const FigureUi: FC<FigureUiProps> = ({ figure, isSelected }) => {
	const figureStyles = classNames({
		[styles.figure]: true,
		[styles.selected]: isSelected,
		[styles.whiteColor]: !figure.isBlack,
		[styles.blackColor]: figure.isBlack,
	})

	return (
		<div
			className={figureStyles}
			style={{ left: figure.x * 100, top: figure.y * 100 }}
		>
			{SVG_BY_FIGURES[figure.type]}
		</div>
	)
}

export default FigureUi