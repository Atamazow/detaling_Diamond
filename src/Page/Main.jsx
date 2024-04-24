import React from 'react'
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/MainContent/AboutUs/AboutUs'
import ContentTitle from '../components/MainContent/ContentTitle/ContentTitle'
import JobPromise from '../components/MainContent/JobPromise/JobPromise'
import Protection from '../components/MainContent/Protection/Protection'
import Recovery from '../components/MainContent/Recovery/Recovery'
import SoundWashing from '../components/MainContent/SoundWashing/SoundWashing'
import Styling from '../components/MainContent/Styling/Styling'
import TopsCar from '../components/TopsCar/TopsCar'

function Main() {
	return (
		<div>
			<div className='main'>
				<ContentTitle />
				<Protection />
				<Recovery />
				<Styling />
				<SoundWashing />
			</div>
			<div className='imageYellow'></div>
			<AboutUs />
			<JobPromise />
			<TopsCar />
			<Footer />
			<div>
				<div style={{ width: '800px', margin: 'auto' }}>
					<BeforeAfterSlider
						beforeImage='https://static.tildacdn.com/tild6139-3066-4337-b661-663864336662/Mini_Countryman_2_1.jpg'
						afterImage='https://static.tildacdn.com/tild3939-3839-4362-a565-313431623161/Mini_Countryman_1.jpg'
					/>
				</div>
			</div>
		</div>
	)
}

export default Main
