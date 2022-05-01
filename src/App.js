import './App.css';
import MyNavBar from './components/MyNavbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Home';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import ContactUsPage from './components/ContactUsPage';
import CartPage from './components/CartPage';
import CheckOutPage from './components/CheckOutPage';

function App() {
  return (
    <div className="App">
      
      <MyNavBar />

      <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </Router>

      <Footer />

    </div>
  );
}

export default App;
