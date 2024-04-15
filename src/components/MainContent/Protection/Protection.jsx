import React from 'react'
import style from './Protection.module.css'
function Protection() {
	return (
		<div>
			<div className={style.protectionTitle}>Защита</div>
			<div className={style.protectionBorder}>
				<div className={style.protectionBorderViolet}></div>
				<div className={style.protectionBorderGrey}></div>
			</div>
		</div>
	)
}

export default Protection
