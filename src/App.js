import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/policies/referral' element={<ReferralPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
