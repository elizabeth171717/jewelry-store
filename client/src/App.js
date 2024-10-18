import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Jewelry Store</h1>} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
