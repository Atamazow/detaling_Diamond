import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import React, { useState } from 'react'
import ModalWindow from '../../ModalWindow/ModalWindow'
import style from './SoundWashing.module.css'
function SoundWashing() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<div className={style.SoundWashingWrapper}>
			<div className={style.wrapperSound}>
				<div className={style.SoundTitle}>Шумоизолация</div>
				<div className={style.iconSoundWashing}>
					<ArrowRightAltIcon className={style.iconArrowRightIcon} alt='' />
				</div>
			</div>
			<div className={style.wrapperSound}>
				<div className={style.SoundTitle}>Автомойка</div>
				<div className={style.iconSoundWashing}>
					<ArrowRightAltIcon className={style.iconArrowRightIcon} alt='' />
				</div>
			</div>
			{isModalOpen && (
				<ModalWindow closeModal={closeModal} isModalOpen={isModalOpen} />
			)}
			<div onClick={openModal} className={style.wrapperSound}>
				<div className={style.SoundTitle}>другие ислуги</div>
				<div className={style.iconSoundWashing}>
					<ArrowRightAltIcon className={style.iconArrowRightIcon} alt='' />
				</div>
			</div>
		</div>
	)
}

export default SoundWashing
