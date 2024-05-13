import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import React from 'react'

function Maps() {
	const mapState = {
		center: [43.125974, 45.541192], // координаты центра карты
		zoom: 17,
	}
	return (
		<div>
			<YMaps
				query={{
					apikey: '55a27183-2c94-4945-af10-8b281318bd23',
					lang: 'ru_RU',
				}}
			>
				<Map defaultState={mapState} width='100%' height='400px'>
					<Placemark
						geometry={[55.751574, 37.573856]}
						properties={{
							hintContent: 'Москва!',
							balloonContent: 'Столица России',
						}}
						options={{
							iconLayout: 'default#image',
							iconImageHref:
								'../../assets/icon/gas-kvas-com-p-znachok-brillianta-na-prozrachnom-fone-23.png', // путь к вашей иконке
							iconImageSize: [30, 42], // размеры иконки
							iconImageOffset: [-15, -42], // смещение иконки
						}}
					/>
				</Map>
			</YMaps>
		</div>
	)
}

export default Maps
