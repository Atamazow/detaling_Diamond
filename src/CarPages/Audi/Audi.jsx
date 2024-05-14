import React, { useState } from 'react'
import BeforeAfterSlider from '../../BeforeAfterSlider/BeforeAfterSlider'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import style from './Audi.module.css'
import Carousel from './Carousel'
const works = [
	{ id: '1', text: 'Полировка кузова, подготовка под оклейку' },
	{ id: '2', text: 'Оклейка кузова в зеленую матовую пленку TeckWrap' },
	{
		id: '3',
		text: 'Оклейка кузова вторым слоем в защитную матовую пленку Hexis',
	},
	{ id: '4', text: 'Оклейка фар в полиуретановую пленку Hexis' },
	{ id: '5', text: 'Покрытие пленки керамикой для матовых пленок' },
	{ id: '6', text: 'Покрытие антидождь на все стекла' },
	{ id: '7', text: 'Оклейка лобового стекла пленкой ClearPlex' },
	{
		id: '8',
		text: 'Оклейка глянцевых элементов салона в полиуретановую пленку',
	},
]
function Audi() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)
	return (
		<>
			<div className={isModalOpen ? style.cartImageModal : style.carImage}>
				<div className={style.shadowLayer}></div> {/* Слой тени */}
				<div className={style.carContent}>
					<Header />
					{isModalOpen && (
						<ModalWindow isModalOpen={isModalOpen} closeModal={closeModal} />
					)}
					<div className={style.contentAudi}>
						<div className={style.titleAudi}>Кейс</div>
						<div className={style.recoveryBorder}>
							<div className={style.recoveryBorderViolet}></div>
							<div className={style.recoveryBorderGrey}></div>
						</div>
						<div>
							<div className={style.colorAudi}>
								Оклейка в 2 слоя <br /> Audi Q7
								<div onClick={openModal} className={style.btnAudi}>
									Записаться
								</div>
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
					beforeImage='https://static.tildacdn.com/tild3732-6464-4332-b931-343532363864/Frame_233.png'
					afterImage='https://static.tildacdn.com/tild3534-3836-4362-a130-616137333538/Frame_234.png'
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
			</div>
			<div className={style.imageCarousel}>
				<div className={style.wrapperCarousel}>
					<Carousel />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Audi
