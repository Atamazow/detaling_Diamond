import React from 'react'
import style from './Protection.module.css'
function Card() {
	const cards = [
		{
			title: 'Антигравийная пленка',
			image:
				'https://optim.tildacdn.com/tild3362-6437-4963-a564-383231636665/-/cover/736x520/center/center/-/format/webp/noroot.png',
		},
		{
			title: 'Керамика',
			image:
				'https://optim.tildacdn.com/tild3838-6534-4537-b666-393637303966/-/cover/736x520/center/center/-/format/webp/Rectangle_1729.png',
		},
		{
			title: 'Оклейка лобового стекла',
			image:
				'https://optim.tildacdn.com/tild6439-6230-4630-a638-376339393132/-/cover/736x520/center/center/-/format/webp/DSCF2288.jpg',
		},
	]
	return (
		<div>
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
		</div>
	)
}

export default Card
