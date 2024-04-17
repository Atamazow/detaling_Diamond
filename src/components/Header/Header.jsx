import { motion } from 'framer-motion'
import React from 'react'
import LogoHeader from '../../assets/icon/1678444501_gas-kvas-com-p-belaya-mashina-na-chernom-fone-risunok-22.png'
import Services from '../Services/Services'
import style from './Header.module.css'

function Header(props) {
	return (
		<motion.div
			initial={{ y: -1000, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			tr
			transition={{ duration: 0.8 }}
		>
			<div className={style.wrapperlogo_border}>
				<div className={style.logoBorder}>
					<img className={style.logoHeader} src={LogoHeader} alt='' />
					<div className={style.borderVertikal}></div>
					<div className={style.logoDD}>DD</div>
				</div>
				<div className={style.wrapper_dataCompany}>
					<div className={style.keys}>Услуги</div>
					<div className={style.keys}> Кейсы</div>
					<div className={style.keys}>Контакты</div>
				</div>
			</div>
			<div className={style.logoTitle}>Detailing diamond</div>
			<Services />
		</motion.div>
	)
}

export default Header
