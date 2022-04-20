import './App.css';
import MyNavBar from './components/MyNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import ProductPage from './components/Products';

function App() {
  return (
    <div className="App">
      
      <MyNavBar />

      <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
