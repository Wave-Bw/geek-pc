import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Layout'

function App() {
	return (
		<Router>
			<div className="App">
				{/* 配置路由的规则 */}
				<Routes>
					<Route path="/home" component={Home}></Route>
					<Route path="/login" component={Login}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
