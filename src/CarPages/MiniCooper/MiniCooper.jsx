import React from 'react'
import BeforeAfterSlider from '../../BeforeAfterSlider/BeforeAfterSlider'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import style from './MiniCooper.module.css'

function MiniCooper() {
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
			<Footer />
		</>
	)
}

export default MiniCooper
