import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  return (
    <div className="container mt-4">
      <h2>Top Products</h2>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">Discount: {product.discount}%</p>
                <p className="card-text">Availability: {product.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      availability: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
