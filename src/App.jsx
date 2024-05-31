import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <>
      <Router>
        <RecoilRoot>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </>
  );
};

export default App;
