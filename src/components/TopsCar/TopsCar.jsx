import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import React from 'react'
import style from './TopsCar.module.css'

function TopsCar() {
	const cars = [
		{
			image:
				'https://optim.tildacdn.com/tild3637-3166-4561-b637-626361333734/-/cover/540x452/center/center/-/format/webp/noroot.png',
			text: 'Mini Countryman',
		},
		{
			image:
				'https://optim.tildacdn.com/tild3766-6231-4136-b766-313236306537/-/format/webp/DSCF2259_resized.jpg',
			text: 'Audi Q7',
			size: true,
		},
		{
			image:
				'https://optim.tildacdn.com/tild6531-6230-4834-a631-386464366431/-/cover/540x452/center/center/-/format/webp/photo_2023-12-18_162.jpeg',
			text: 'Mercedes GT43',
		},
	]
	const carsTwo = [
		{
			image:
				'https://optim.tildacdn.com/tild6330-3163-4636-b032-373739646433/-/cover/540x452/center/center/-/format/webp/photo_2023-12-18_162.jpeg',
			text: 'BMW 84OI',
		},
		{
			image:
				'https://optim.tildacdn.com/tild6462-3764-4934-b864-363034373233/-/format/webp/noroot.png',
			text: 'RAM TRX',
			size: true,
		},
		{
			image:
				'https://optim.tildacdn.com/tild3365-3232-4033-b435-643831353832/-/cover/540x452/center/center/-/format/webp/DSCF1664_resized.jpg',
			text: 'BMW 54 OI',
		},
	]
	return (
		<div className={style.wrapperTopCar}>
			<div className={style.wrapperBlockTopCar}>
				<div className={style.topCarTitle}>Воспользуйтесь нашим опытом</div>
				<div>
					<div className={style.blockImageText}>
						<div className={style.wrapperBlockIconImage}>
							{cars.map(car => (
								<div className={car.size ? style.imageBlock : style.blockImage}>
									<div className={style.rightcon}>
										<ArrowRightAltIcon className={style.iconRight} />
									</div>
									<img
										className={
											car.size ? style.imageTopCarBig : style.imageTopCar
										}
										src={car.image}
										alt=''
									/>
								</div>
							))}
						</div>
						<div className={style.wrapperBlockIconImageTwo}>
							{carsTwo.map(car => (
								<div className={car.size ? style.imageBlock : style.blockImage}>
									<img
										className={
											car.size ? style.imageTopCarBig : style.imageTopCar
										}
										src={car.image}
										alt=''
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopsCar
