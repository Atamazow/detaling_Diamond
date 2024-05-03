import React from 'react'
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
			<div></div>
		</div>
	)
}

export default Main
