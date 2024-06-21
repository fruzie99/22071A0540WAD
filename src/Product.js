import React from 'react';

const Product = ({ id, name, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
