import React from 'react'
import CardRecovery from './CardRecovery'
import style from './Recovery.module.css'
function Recovery() {
	return (
		<div>
			<div className={style.recoveryTitle}>Восстановление и уход</div>
			<div className={style.recoveryBorder}>
				<div className={style.recoveryBorderViolet}></div>
				<div className={style.recoveryBorderGrey}></div>
			</div>
			<CardRecovery />
		</div>
	)
}

export default Recovery
