import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleTopChange = (e) => setTop(e.target.value);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  return (
    <div>
      <h1>Top N Products</h1>
      <div className="filters">
        <select value={company} onChange={handleCompanyChange}>
          <option value="AMZ">Amazon (AMZ)</option>
          <option value="FLP">Flipkart (FLP)</option>
          <option value="SNP">Snapdeal (SNP)</option>
          <option value="MYN">Myntra (MYN)</option>
          <option value="AZO">Azo (AZO)</option>
        </select>
        <select value={category} onChange={handleCategoryChange}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="TV">TV</option>
          {/* Add more categories as needed */}
        </select>
        <input type="number" value={top} onChange={handleTopChange} placeholder="Top N" />
        <input type="number" value={minPrice} onChange={handleMinPriceChange} placeholder="Min Price" />
        <input type="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max Price" />
      </div>
      <ProductList company={company} category={category} top={top} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
};

export default HomePage;
