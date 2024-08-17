import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (filters) => {
    const { company, category, top, minPrice, maxPrice } = filters;
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.get(
        `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODczMzMyLCJpYXQiOjE3MjM4NzMwMzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU3ZWUzYTRhLTVhMzAtNDQ2Zi1iOWVjLWY0NmYzYTRmODYyZiIsInN1YiI6IjIxMTFjczAxMDE4N0BtYWxsYXJlZGR5dW5pdmVyc2l0eS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6Ik1hbGxhIFJlZGR5IFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6IjU3ZWUzYTRhLTVhMzAtNDQ2Zi1iOWVjLWY0NmYzYTRmODYyZiIsImNsaWVudFNlY3JldCI6ImhXUGZhZmpDamZpTERpTUgiLCJvd25lck5hbWUiOiJUQU1NSU5FTkkgVklKQVlBU0lNSEEiLCJvd25lckVtYWlsIjoiMjExMWNzMDEwMTg3QG1hbGxhcmVkZHl1bml2ZXJzaXR5LmFjLmluIiwicm9sbE5vIjoiMjExMUNTMDEwMTg3In0.5t1asReZ9gWSKgAM75cmo1si_im_CELmVDosKo51ymc` // Replace YOUR_ACCESS_TOKEN with the actual token
          }
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="App">
      <Filters onApply={fetchProducts} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ProductList products={products} />
    </div>
  );
};

export default App;
