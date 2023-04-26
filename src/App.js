import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Layout from './layout/Layout';
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
