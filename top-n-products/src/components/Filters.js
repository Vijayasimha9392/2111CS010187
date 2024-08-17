import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filters = ({ onApply }) => {
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleApply = () => {
    onApply({ company, category, top, minPrice, maxPrice });
  };

  return (
    <div className="container mt-4">
      <h2>Filters</h2>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <select
          id="company"
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="AMZ">AMZ</option>
          <option value="FLP">FLP</option>
          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
          <option value="Charger">Charger</option>
          <option value="Mouse">Mouse</option>
          <option value="Keypad">Keypad</option>
          <option value="Bluetooth">Bluetooth</option>
          <option value="Pendrive">Pendrive</option>
          <option value="Remote">Remote</option>
          <option value="Speaker">Speaker</option>
          <option value="Headset">Headset</option>
          <option value="PC">PC</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="top">Top N Products</label>
        <input
          id="top"
          type="number"
          className="form-control"
          value={top}
          onChange={(e) => setTop(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="minPrice">Min Price</label>
        <input
          id="minPrice"
          type="number"
          className="form-control"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="maxPrice">Max Price</label>
        <input
          id="maxPrice"
          type="number"
          className="form-control"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

Filters.propTypes = {
  onApply: PropTypes.func.isRequired,
};

export default Filters;
