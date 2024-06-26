import React from 'react'
import ContentHeader from '../components/ContentHeader/ContentHeader'
import '../styles.css'
import Main from './Main'
function Home(props) {
	return (
		<>
			<div className='intro'>
				<div className='intro-media'>
					<video
						src='https://brooklandsdetailing.ru/images/site_main_brooklands_1.mp4'
						muted
						loop
						autoPlay
						className='video_media'
					></video>
				</div>
				<ContentHeader />
			</div>
			<Main />
		</>
	)
}

export default Home
