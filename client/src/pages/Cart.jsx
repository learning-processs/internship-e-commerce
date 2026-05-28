import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  
  // Handles incrementing/decrementing item amounts dynamically
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Automatically drops the product out if quantity becomes 0
    );
  };

  // Completely wipe a custom row line item from state
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 6. TOTAL AMOUNT CALCULATION METRICS
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingThreshold = 200; // Free delivery threshold tier
  const shippingCost = subtotal > shippingThreshold || subtotal === 0 ? 0 : 15;
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="container mt-4" style={{ minHeight: '75vh' }}>
      
      {/* 2. TITLE */}
      <h2 className="fw-bold mb-4 text-dark">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5 bg-light rounded shadow-sm border">
          <p className="text-muted fs-4 mb-3">Your cart is currently empty!</p>
          <Link to="/products" className="btn btn-dark">
            Browse Our Catalogue
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          
          {/* 1. CART PRODUCTS LIST MAIN GRID PANEL */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-3 bg-white">
              
              {cart.map((item) => (
                <div key={item.id} className="row align-items-center mb-3 pb-3 border-bottom g-3">
                  
                  {/* 3. IMAGES */}
                  <div className="col-3 col-md-2">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.img} alt={item.title} className="img-fluid rounded border" />
                    </Link>
                  </div>
                  
                  {/* Name Description Column */}
                  <div className="col-9 col-md-4">
                    <h6 className="mb-1 fw-semibold">
                      <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                        {item.title}
                      </Link>
                    </h6>
                    <small className="text-muted">Category: {item.category}</small>
                  </div>
                  
                  {/* 4. QUANTITY CONTROLLER STEPPER */}
                  <div className="col-6 col-md-3 d-flex align-items-center">
                    <button 
                      className="btn btn-sm btn-outline-dark px-2 py-0 fw-bold" 
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-3 fw-bold text-dark">{item.quantity}</span>
                    <button 
                      className="btn btn-sm btn-outline-dark px-2 py-0 fw-bold" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  {/* 5. PRICE & ITEM TOTAL */}
                  <div className="col-6 col-md-3 text-end">
                    <p className="fw-bold text-dark mb-0">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <small className="text-muted d-block mb-1">
                      (${item.price}.00 each)
                    </small>
                    <button 
                      className="btn btn-sm btn-link text-danger p-0 text-decoration-none small" 
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* CHECKOUT SIDE PANEL INVOICE CARD */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 bg-light rounded-3">
              <h4 className="fw-bold mb-4 text-dark">Order Summary</h4>
              
              <div className="d-flex justify-content-between mb-2 text-secondary">
                <span>Items Subtotal</span>
                <span className="fw-medium text-dark">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-3 text-secondary">
                <span>Shipping Fee</span>
                <span className="fw-medium text-dark">
                  {shippingCost === 0 ? <span className="text-success fw-semibold">FREE</span> : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              
              {shippingCost > 0 && (
                <div className="alert alert-warning p-2 small mb-3 text-center" role="alert">
                  Add <strong>${(shippingThreshold - subtotal).toFixed(2)}</strong> more to unlock Free Shipping!
                </div>
              )}
              
              <hr />
              
              {/* 6. FINAL CALCULATED TOTAL AMOUNT */}
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5 text-dark">Grand Total</span>
                <span className="fw-bold fs-5 text-primary">${grandTotal.toFixed(2)}</span>
              </div>
              
              <Link to="/checkout" className="btn btn-dark w-100 py-2.5 fw-semibold shadow-sm text-center">
                Proceed to Secure Checkout
              </Link>
              
              <Link to="/products" className="btn btn-link text-muted w-100 text-center small mt-2 text-decoration-none">
                ← Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;