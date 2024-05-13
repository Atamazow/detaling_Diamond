import { Route, Routes } from 'react-router-dom'
import Audi from './CarPages/Audi/Audi'
import MiniCooper from './CarPages/MiniCooper/MiniCooper'
import Home from './Page/Home'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cars/1' element={<MiniCooper />} />
				<Route path='/cars/2' element={<Audi />} />
			</Routes>
		</div>
	)
}

export default App
