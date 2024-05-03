import React from 'react'
import BeforeAfterSlider from '../../BeforeAfterSlider/BeforeAfterSlider'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Carousel from './Carousel'
import style from './MiniCooper.module.css'

function MiniCooper() {
	const works = [
		{ id: '1', text: 'Покраска капота, переднего бампера, заднего бампера' },
		{ id: '2', text: 'Оклейка кузова с проемами в желтую пленку TeckWrap' },
		{ id: '3', text: 'Антихром всех хромированных элементов' },
		{ id: '4', text: 'Реставрация и покраска дисков в черный глянец' },
		{ id: '5', text: 'Реставрация фар' },
		{ id: '6', text: 'Детейлинг химчистка салона' },
		{ id: '7', text: 'Покрытие пленки керамикой для матовых пленок' },
		{ id: '8', text: 'Полировка всех черных глянцевых элементов кузова' },
	]
	return (
		<>
			<div className={style.carImage}>
				<div className={style.shadowLayer}></div> {/* Слой тени */}
				<div className={style.carContent}>
					<Header />
					<div className={style.contentCooper}>
						<div className={style.titleCooper}>Кейс</div>
						<div className={style.recoveryBorder}>
							<div className={style.recoveryBorderViolet}></div>
							<div className={style.recoveryBorderGrey}></div>
						</div>
						<div>
							<div className={style.colorCooper}>
								Смена цвета <br /> Mini Countryman{' '}
								<div className={style.btnCooper}>Записаться</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={style.beforeAfterImage}
				style={{ width: '1440px', margin: ' 40px auto' }}
			>
				<BeforeAfterSlider
					beforeImage='https://static.tildacdn.com/tild6139-3066-4337-b661-663864336662/Mini_Countryman_2_1.jpg'
					afterImage='https://static.tildacdn.com/tild3939-3839-4362-a565-313431623161/Mini_Countryman_1.jpg'
				/>
			</div>
			<div className={style.completedWork}>
				<div className={style.workTitle}>Выполненные работы</div>
				<div className={style.wrapperWorks}>
					{works.map(work => (
						<dlv className={style.works}>
							<div style={{ color: '#645d59', fontSize: '20px' }}>
								{work.id}
							</div>
							<div className={style.borderWork}></div>
							<div className={style.text}>{work.text}</div>
						</dlv>
					))}
				</div>
				<Carousel />
			</div>
			<Footer />
		</>
	)
}

export default MiniCooper
