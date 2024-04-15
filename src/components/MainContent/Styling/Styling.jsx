import React from 'react'
import CardStyling from './CardStyling'
import style from './Styling.module.css'
function Styling() {
	return (
		<div>
			<div className={style.stylingTitle}>Восстановление и уход</div>
			<div className={style.stylingBorder}>
				<div className={style.stylingBorderViolet}></div>
				<div className={style.stylingBorderGrey}></div>
			</div>
			<CardStyling />
		</div>
	)
}

export default Styling
