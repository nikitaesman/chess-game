import classnames from 'classnames';
import { FC, useState } from 'react';

import styles from './Cell.module.scss'
import { Coordinates } from '../../../entities/types';
import { observer } from 'mobx-react-lite';
import { gameStore } from '../../../stores/gameStore';

interface CellProps extends Coordinates {
	color: "black" | "white";
	isAvailableForTurn: boolean;
}

const Cell: FC<CellProps> = observer(({ x, y, color, isAvailableForTurn }) => {
	const { boardClick } = gameStore;

	const [isHovered, setIsHovered] = useState(false);

	const onClick = () => boardClick({
		x,
		y
	})

	const cellStyles = classnames({
		[styles.cell]: true,
		[styles.colorBlack]: color === 'black',
		[styles.colorWhite]: color === "white"
	})

	return (
		<div
			className={cellStyles}
			onMouseLeave={() => setIsHovered(false)}
			onMouseOver={() => setIsHovered(true)}
			onClick={onClick}
		>
			{isHovered ? <div className={styles.subBlock}></div> : null}
			{isAvailableForTurn ? <div className={styles.availableBlock}></div> : null}
			<p style={{fontSize: 10, position: "absolute", zIndex: 100,}}>
				{`x: ${x}`}<br/>{`y: ${y}`}
			</p>
		</div>
	)
})

export default Cell