// src/pages/ProductPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/apiService';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  const { company, category, top, minPrice, maxPrice } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productData = await getProducts(company, category, top, minPrice, maxPrice);
        setProducts(productData);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Top {top} Products for {category} from {company}</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
