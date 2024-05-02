import { Route, Routes } from 'react-router-dom'
import MiniCooper from './CarPages/MiniCooper/MiniCooper'
import Home from './Page/Home'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cars/:id' element={<MiniCooper />} />
			</Routes>
		</div>
	)
}

export default App
