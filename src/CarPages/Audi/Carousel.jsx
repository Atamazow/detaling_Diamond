import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import style from './Audi.module.css'

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
		'https://static.tildacdn.com/tild3931-6164-4763-b361-363232613664/DSCF1348_resized_1.png',
		'https://static.tildacdn.com/tild3461-3063-4034-a561-653863666636/DSCF2252_resized.jpg',
		'https://static.tildacdn.com/tild3131-6631-4836-b435-333236653633/DSCF2254_resized.jpg',
		'https://optim.tildacdn.com/tild3635-3335-4661-a231-653234393566/-/resize/900x500/-/format/webp/DSCF2260_resized.jpg',
		'https://static.tildacdn.com/tild3833-3366-4830-b433-663831633664/DSCF1873_resized.jpg',
		'https://optim.tildacdn.com/tild6534-3566-4532-b232-306236633163/-/resize/900x500/-/format/webp/DSCF1983_resized.jpg',
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
