import React, { useState } from 'react'
import BeforeAfterSlider from '../../BeforeAfterSlider/BeforeAfterSlider'
import Header from '../../components/Header/Header'
import ModalWindow from '../../components/ModalWindow/ModalWindow'

import Footer from '../../components/Footer/Footer'
import style from './Audi.module.css'
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
			<Footer />
		</>
	)
}

export default Audi
