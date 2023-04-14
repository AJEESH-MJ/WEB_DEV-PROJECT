import React from 'react';
import './products.css';
import { product1, product2 } from '../../assets/index';


function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product1} alt="Product" />
      </div>
      <div className="product-details">
        <h1>Casual Shirts</h1>
        <h2>$49.99</h2>
        <p>
         Unisex casual print shirts ,With high quality linen and print for that stylish look.  
        </p>
        <div className="product-actions">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>

      <div className="product-image">
        <img src={product2} alt="Product" />
      </div>
      <div className="product-details">
        <h1>Oversized Tees</h1>
        <h2>$29.99</h2>
        <p>
          Men's Oversized tees for rocking that summer look while having the comfort at the same time. 
        </p>
        <div className="product-actions">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>

      
    </div>
  );
}

export default ProductPage;