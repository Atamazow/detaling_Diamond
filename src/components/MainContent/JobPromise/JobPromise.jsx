import React, { useState } from 'react'
import ModalWindow from '../../ModalWindow/ModalWindow'
import style from './JobPromise.module.css'
function JobPromise() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)
	return (
		<div className={style.wrapperImage}>
			<div className={style.imageWrap}>
				{isModalOpen && (
					<ModalWindow closeModal={closeModal} isModalOpen={isModalOpen} />
				)}
				<div className={style.wrapperJobPromise}>
					<div className={style.JobPromiseTitle}>
						Мы ценим ваше время. <br /> Выполняем работу качественно <br /> и в
						обещанные сроки
					</div>
					<div className={style.protectionBorder}>
						<div className={style.protectionBorderViolet}></div>
						<div className={style.protectionBorderGrey}></div>
					</div>
					<div className={style.contentJob}>
						<div className={style.blockContentJob}>
							Проводим 3 этапа проверки качества перед выдачей каждого
							автомобиля
						</div>
						<div className={style.blockContentJob}>
							Проводим дополнительный контроль качества через 7 дней для услуг:
							керамика, оклейка плёнкой
						</div>
					</div>
					<div className={style.protectionBorder}>
						<div className={style.protectionBorderViolet}></div>
						<div className={style.protectionBorderGrey}></div>
					</div>
					<div className={style.contentJob}>
						<div className={style.blockContentJob}>
							Работаем только лучшими материалами, проверенными временем
						</div>
						<div className={style.blockContentJob}>
							Уверены в своем качестве и предоставляем гарантию на выполненные
							работы
						</div>
					</div>
				</div>
				<div onClick={openModal} className={style.JobZap}>
					Записаться
				</div>
			</div>
		</div>
	)
}

export default JobPromise
