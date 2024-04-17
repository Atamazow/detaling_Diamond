import React from 'react'
import ContentTitle from '../components/MainContent/ContentTitle/ContentTitle'
import Protection from '../components/MainContent/Protection/Protection'
import Recovery from '../components/MainContent/Recovery/Recovery'
import SoundWashing from '../components/MainContent/SoundWashing/SoundWashing'
import Styling from '../components/MainContent/Styling/Styling'

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
		</div>
	)
}

export default Main
