import React from 'react'
import style from './Recovery.module.css'
function CardRecovery() {
	const cards = [
		{
			title: 'Полировка',
			image:
				'https://optim.tildacdn.com/tild3937-3266-4934-b334-383866323036/-/cover/736x520/center/center/-/format/webp/Rectangle_4.png',
		},
		{
			title: 'Химчистка',
			image:
				'https://optim.tildacdn.com/tild3431-6332-4533-b032-363630316661/-/cover/736x520/center/center/-/format/webp/DSCF1029_resized.jpg',
		},
		{
			title: 'Реставрация и перешив кожи',
			image:
				'https://optim.tildacdn.com/tild6138-3838-4439-a232-343666346165/-/cover/736x520/center/center/-/format/webp/Rectangle_4.png',
		},
	]
	return (
		<div className={style.Cards}>
			{cards.map(card => (
				<div>
					<div className={style.wrapperImage}>
						<img className={style.cardImage} src={card.image} alt='' />
					</div>
					<div className={style.cardTitle}>{card.title}</div>
				</div>
			))}
		</div>
	)
}

export default CardRecovery
