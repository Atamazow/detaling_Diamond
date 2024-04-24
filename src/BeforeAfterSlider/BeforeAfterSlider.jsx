import React, { useRef, useState } from 'react'

function BeforeAfterSlider({ beforeImage, afterImage }) {
	const [isDragging, setIsDragging] = useState(false)
	const [sliderPosition, setSliderPosition] = useState(50) // Начальное положение ползунка в процентах
	const sliderContainerRef = useRef(null)

	const handleMouseDown = e => {
		setIsDragging(true)
		updateSliderPosition(e)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const handleMouseMove = e => {
		if (isDragging) {
			updateSliderPosition(e)
		}
	}

	const handleMouseLeave = () => {
		setIsDragging(false)
	}

	const updateSliderPosition = e => {
		const rect = sliderContainerRef.current.getBoundingClientRect()
		const newX = e.clientX - rect.left
		const width = rect.width
		const newSliderPosition = (newX / width) * 100
		if (newSliderPosition >= 0 && newSliderPosition <= 100) {
			setSliderPosition(newSliderPosition)
		}
	}

	return (
		<div
			ref={sliderContainerRef}
			onMouseMove={handleMouseMove}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave}
			style={{
				position: 'relative',
				width: '100%',
				height: '500px',
				cursor: 'ew-resize',
				userSelect: 'none',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					backgroundImage: `url(${beforeImage})`,
					position: 'absolute',
					left: '0',
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			<div
				style={{
					backgroundImage: `url(${afterImage})`,
					position: 'absolute',
					left: '0',
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: `${sliderPosition}%`,
					top: '0',
					bottom: '0',
					width: '2px',
					backgroundColor: 'red',
					pointerEvents: 'none',
				}}
			/>
		</div>
	)
}

export default BeforeAfterSlider
