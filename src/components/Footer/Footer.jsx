import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import React from 'react'
import LogoHeader from '../../assets/icon/1678444501_gas-kvas-com-p-belaya-mashina-na-chernom-fone-risunok-22.png'
import style from './Footer.module.css'
function Footer() {
	const services = [
		{
			title: 'Восстановление',
			services1: 'Полировка',
			services2: 'Химчистка',
			services3: 'Реставрация и перешив кожи',
		},
		{
			title: 'Защита',
			services1: 'Антигравийная плёнка',
			services2: 'Керамика',
			services3: 'Оклейка лобового стекла',
		},
		{
			title: 'Стайлинг',
			services1: 'Цветная плёнка',
			services2: 'Дизайн-проекты',
			services3: 'Антихром',
		},
		{
			title: 'Кейсы',
			services1: 'Шумоизоляция',
			services2: 'Мойка',
			services3: 'Другие услуги',
		},
		{
			title: '+7 (812) 770-44-30',
			services1: 'info@refive.ru',
			icons: true,
		},
	]
	return (
		<div className={style.wrapperFooter}>
			<div className={style.footer}>
				<div className={style.footerContent}>
					<div className={style.footerTitleContent}>
						<div className={style.logoBorder}>
							<img className={style.logoHeader} src={LogoHeader} alt='' />
							<div className={style.borderVertikal}></div>
							<div className={style.logoDD}>DD</div>
						</div>
						{services.map(item => (
							<div>
								<div className={style.footerTitle}>{item.title}</div> <br />
								<div className={style.services}>{item.services1}</div>
								<div className={style.services1}>{item.services2}</div>
								<div className={style.services}>{item.services3}</div>
								{item.icons && (
									<div className={style.wrapperIcon}>
										<WhatsAppIcon className={style.whatsIcon} />
										<TelegramIcon className={style.telegramIcon} />
										<InstagramIcon className={style.instaIcon} />
									</div>
								)}
							</div>
						))}
					</div>
					<div className={style.politika}>Политика конфиденциальности</div>
					<div className={style.rekvizit}>Реквизиты</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
