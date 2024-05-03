// import React from 'react'

// function Carousel() {
// 	return (
// 		<div
// 			id='carouselExampleRide'
// 			className='carousel slide'
// 			data-bs-ride='true'
// 		>
// 			<div className='carousel-inner'>
// 				<div className='carousel-item active'>
// 					<img
// 						src='https://optim.tildacdn.com/tild3936-6135-4234-b839-303465643064/-/format/webp/4_resized_1.png'
// 						class='d-block w-100'
// 						alt='...'
// 					/>
// 				</div>
// 				<div className='carousel-item'>
// 					<img
// 						src='https://static.tildacdn.com/tild6166-6233-4333-b531-373536663130/3_resized.jpg'
// 						class='d-block w-100'
// 						alt='...'
// 					/>
// 				</div>
// 				<div className='carousel-item'>
// 					<img
// 						src='https://static.tildacdn.com/tild6363-6338-4239-b431-353136313535/11_resized.jpg'
// 						class='d-block w-100'
// 						alt='...'
// 					/>
// 				</div>
// 				<div className='carousel-item'>
// 					<img
// 						src='https://optim.tildacdn.com/tild3264-3365-4530-b930-303531393037/-/format/webp/12_resized.jpg'
// 						class='d-block w-100'
// 						alt='...'
// 					/>
// 				</div>
// 				<div className='carousel-item'>
// 					<img
// 						src='https://optim.tildacdn.com/tild3264-3365-4530-b930-303531393037/-/format/webp/12_resized.jpg'
// 						alt='...'
// 					/>
// 				</div>
// 				<div className='carousel-item'>
// 					<img
// 						src='https://optim.tildacdn.com/tild3264-3365-4530-b930-303531393037/-/format/webp/12_resized.jpg'
// 						alt='...'
// 					/>
// 				</div>
// 			</div>
// 			<button
// 				class='carousel-control-prev'
// 				type='button'
// 				data-bs-target='#carouselExampleRide'
// 				data-bs-slide='prev'
// 			>
// 				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
// 				<span className='visually-hidden'>Previous</span>
// 			</button>
// 			<button
// 				class='carousel-control-next'
// 				type='button'
// 				data-bs-target='#carouselExampleRide'
// 				data-bs-slide='next'
// 			>
// 				<span className='carousel-control-next-icon' aria-hidden='true'></span>
// 				<span className='visually-hidden'>Next</span>
// 			</button>
// 		</div>
// 	)
// }

// export default Carousel

import React from 'react'
import Slider from 'react-slick'

const Carousel = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	}

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<div key={index}>
					<img src={image} alt={`Slide ${index}`} />
				</div>
			))}
		</Slider>
	)
}

export default Carousel
