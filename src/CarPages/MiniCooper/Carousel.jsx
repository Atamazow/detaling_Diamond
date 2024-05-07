import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import style from './MiniCooper.module.css'

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
	}

	const images = [
		'https://optim.tildacdn.com/tild3936-6135-4234-b839-303465643064/-/format/webp/4_resized_1.png',
		'https://static.tildacdn.com/tild6166-6233-4333-b531-373536663130/3_resized.jpg',
		'https://static.tildacdn.com/tild6363-6338-4239-b431-353136313535/11_resized.jpg',
		'https://optim.tildacdn.com/tild3264-3365-4530-b930-303531393037/-/format/webp/12_resized.jpg',
		'https://static.tildacdn.com/tild3263-3063-4865-a666-333439656435/16_resized.jpg',
		'https://static.tildacdn.com/tild3864-3235-4565-b539-363831663233/20_resized.jpg',
	]

	return (
		<div>
			<Slider className={style.carousel} {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={image}
							alt={`Slide ${index}`}
							style={{ width: '100%', height: '555px', borderRadius: '40px' }}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Carousel
