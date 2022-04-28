import './App.css';
import MyNavBar from './components/MyNavbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Home';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <MyNavBar />

      <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </Router>

      <Footer />

    </div>
  );
}

export default App;
