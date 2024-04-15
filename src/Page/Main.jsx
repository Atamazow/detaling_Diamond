import React from 'react'
import ContentTitle from '../components/MainContent/ContentTitle/ContentTitle'
import Protection from '../components/MainContent/Protection/Protection'
import Recovery from '../components/MainContent/Recovery/Recovery'
import Styling from '../components/MainContent/Styling/Styling'

function Main() {
	return (
		<div className='main'>
			<ContentTitle />
			<Protection />
			<Recovery />
			<Styling />
		</div>
	)
}

export default Main
