import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const cart = props.cart; // option 1
  const { cart } = props; // option 2

  // console.log(cart);

  let total = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    total = total + product.price * product.quantity;
    shippingTotal = shippingTotal + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = parseFloat((total * 0.08).toFixed(2));
  const grandTotal = (total + shippingTotal + tax).toFixed(2);

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
