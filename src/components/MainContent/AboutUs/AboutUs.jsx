import React from 'react'
import style from './AboutUs.module.css'
function AboutUs() {
	return (
		<div className={style.wrapperRedCar}>
			<div className={style.wrapperRedCarContent}>
				<div className={style.AboutUs}>
					<div>
						<div className={style.aboutYears}>6 лет</div>
						<div className={style.aboutText}>заботимся об автомобилях</div>
						<div className={style.aboutBorder}></div>
					</div>
					<div className={style.AboutUsWrapper}>
						<div>
							<div className={style.aboutYears}>230</div>
							<div className={style.aboutText}>
								отзывов <br /> на Яндекс.Картах
							</div>
						</div>
						<div className={style.leftAboutProcent}>
							<div className={style.aboutYears}>91%</div>
							<div className={style.aboutText}>
								Kлиентов возвращаются <br /> к нам снова
							</div>
						</div>
					</div>
					<div className={style.aboutBorder}></div>
					<div className=''>
						<div className={style.aboutYears}>98%</div>
						<div className={style.aboutText}>
							клиентов поставили нам <br /> максимальную оценку <br /> за
							качество и сервис
						</div>
					</div>
				</div>
				<img
					className={style.aboutTeam}
					src='https://optim.tildacdn.com/tild3431-6332-4965-b065-366139636539/-/format/webp/DSCF0815.jpg'
					alt=''
				/>
			</div>
		</div>
	)
}

export default AboutUs
