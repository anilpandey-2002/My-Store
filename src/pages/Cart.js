import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./Cart.css"; // Assuming you have a CSS file for the styles

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  // Function to calculate the total amount
  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="cart-container">
      <h3 className="cart-title">Your Shopping Cart</h3>
      <div className="cart-wrapper">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="cart-card">
              <img
                src={product.image}
                alt={product.title}
                className="cart-image"
              />
              <div className="cart-details">
                <h5 className="cart-product-title">{product.title}</h5>
                <p className="cart-product-price">
                  ₹{product.price.toFixed(2)}
                </p>
                <p className="cart-product-quantity">
                  Quantity: {product.quantity}
                </p>
                <button
                  className="cart-remove-btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
      </div>
      {products.length > 0 && (
        <div className="cart-total">
          <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
