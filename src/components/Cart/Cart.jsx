import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shippingTotal = 0;

  for (const product of cart) {
    total = total + product.price;
    shippingTotal = shippingTotal + product.shipping;
  }
  const tax = total * 0.08;
  const grandTotal = total + shippingTotal + tax;

  return (
    <div>
      <div className="cart-header">
        <h3>Order Summary</h3>
      </div>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Shipping Cahrge: {shippingTotal}</p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {grandTotal}</h4>
    </div>
  );
};

export default Cart;
