import { motion } from 'framer-motion'
import React, { useState } from 'react'
import logoPhone from '../../assets/icon/WDB+Fractal+Diamond.png'
import Header from '../Header/Header'
import ModalWindow from '../ModalWindow/ModalWindow'

function ContentHeader(props) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [showText, setShowText] = useState(false)
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<div>
			<div className='intro_content_wrapper'>
				{isModalOpen && (
					<ModalWindow isModalOpen={isModalOpen} closeModal={closeModal} />
				)}
				<div className='intro_content'>
					<Header />
				</div>
			</div>
			<div className='logoPhone_wrapper'>
				<div className='logoPhoneDiamond'>
					<img className='logoPhone' src={logoPhone} alt='' />
				</div>
			</div>
			<motion.div
				// translateX={{ 20 }}
				className='header_title_text'
			>
				<div className='header_title'>Детейлинг высокого класса</div>
				<p className='header_text'>
					Для самых требовательных автолюбителей Исключительный уход за кузовом
					и салоном вашего автомобиля
				</p>
				<div className='header_btn' onClick={openModal}>
					Записаться
				</div>
			</motion.div>
		</div>
	)
}

export default ContentHeader
