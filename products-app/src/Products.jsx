import React from 'react';
import './Products.css'

const Product = ({products, setProducts}) => {
  return (
    <div className="products">
      {products[0] && products.map((product, index) => {
        return (
          <div>
            <img key={index} src={product.imgURL} onClick={() => setProducts(product)} />
              <div className="product-name">{product.name}</div>
              <div className="price">{product.price}</div>
          </div>
        )
      })}
    </div>
  );
}

export default Product;