import React from 'react'
import style from './Styling.module.css'
function CardStyling() {
	const cards = [
		{
			title: 'Цветная пленка',
			image:
				'https://static.tildacdn.com/tild3437-3866-4136-a437-663637323331/Rectangle_4.png',
		},
		{
			title: 'Дизайн-проекты',
			image:
				'https://static.tildacdn.com/tild6361-6534-4165-b735-643633376161/noroot.jpg',
		},
		{
			title: 'Антихром',
			image:
				'https://static.tildacdn.com/tild3131-3036-4534-b332-346264393138/DSCF1198_resized.jpg',
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

export default CardStyling
