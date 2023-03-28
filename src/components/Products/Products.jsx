import React from "react";
import "./Products.css";

const Products = (props) => {
  const { name, price, seller, ratings, img } = props.product;

  const addToCart = props.addToCart;

  return (
    <div className="product">
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <h4>Price: ${price}</h4>
      <div className="product-footer">
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button
        onClick={() => {
          addToCart(props.product);
        }}
        className="product-cart-btn"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Products;
