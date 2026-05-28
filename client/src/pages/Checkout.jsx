import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, setCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [generatedOrderNo, setGeneratedOrderNo] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
  });

  // Calculate Order Totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = subtotal > 200 || subtotal === 0 ? 0 : 15;
  const grandTotal = subtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Generate a unique random mock Order Number
    const randomNum = Math.floor(1000000 + Math.random() * 9000000);
    const currentYear = new Date().getFullYear();
    setGeneratedOrderNo(`ESHOP-${randomNum}-${currentYear}`);
    
    // Trigger Success State Layout
    setOrderPlaced(true);
    setCart([]); // Clear global cart state upon checkout
  };

  // STEP 7: ORDER CONFIRMATION PAGE LAYOUT VIEW
  if (orderPlaced) {
    return (
      <div className="container mt-5 text-center py-5" style={{ minHeight: '75vh' }}>
        <div className="card p-5 shadow-sm border-0 bg-white mx-auto border rounded-3" style={{ maxWidth: '650px' }}>
          
          {/* Animated/Styled Checkmark Icon Badge */}
          <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
            <span className="fs-1">✓</span>
          </div>
          
          {/* ✔ Order Confirmation Message */}
          <h2 className="fw-bold text-dark mb-2">✔ Order Confirmed!</h2>
          <p className="text-muted fs-5 mb-4">Thank you for your purchase, {formData.fullName}.</p>
          
          <div className="bg-light p-4 rounded-3 text-start mb-4 border">
            <h6 className="fw-bold text-uppercase text-muted small mb-3">Order Details</h6>
            
            {/* ✔ Order No */}
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Order Number:</span>
              <span className="fw-bold text-dark">{generatedOrderNo}</span>
            </div>
            
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Payment Method:</span>
              <span className="fw-medium text-dark text-uppercase">{formData.paymentMethod === 'cod' ? 'Cash on Delivery' : formData.paymentMethod}</span>
            </div>
            
            <div className="d-flex justify-content-between pt-2 border-top">
              <span className="text-secondary fw-semibold">Estimated Delivery:</span>
              <span className="fw-bold text-success">3 - 5 Business Days</span>
            </div>
          </div>

          <p className="small text-muted mb-4">
            A copy of your digital invoice receipts and real-time package shipping tracking data points have been sent to <strong>{formData.email}</strong>.
          </p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/" className="btn btn-dark px-4 py-2 fw-medium">
              Back to Home
            </Link>
            <Link to="/products" className="btn btn-outline-secondary px-4 py-2 fw-medium">
              Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // PROTECTION ROUTINE FOR EMPTY CHECKOUTS
  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center py-5" style={{ minHeight: '65vh' }}>
        <p className="text-muted fs-4">Your cart is empty. There is nothing to checkout!</p>
        <Link to="/products" className="btn btn-dark mt-2">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ minHeight: '75vh' }}>
      <h2 className="fw-bold mb-4 text-dark">Secure Checkout</h2>

      <div className="row g-4">
        {/* SHIPPING FORM PANEL */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4 bg-white">
            <h4 className="fw-bold mb-4 text-dark">Shipping Information Form</h4>
            
            <form onSubmit={handleFormSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-muted">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-muted">Postal / ZIP Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="form-control"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="10001"
                  />
                </div>
              </div>

              <h4 className="fw-bold mt-5 mb-3 text-dark">Payment Method</h4>
              <div className="card p-3 border rounded-3 bg-light">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label fw-medium text-dark" htmlFor="cod">
                    Cash on Delivery (COD)
                  </label>
                  <p className="text-muted small mb-0">Pay with raw cash when your packages arrive safely.</p>
                </div>
              </div>

              <button type="submit" className="btn btn-dark btn-lg w-100 mt-4 fw-semibold shadow-sm">
                Place Order (${grandTotal.toFixed(2)})
              </button>
            </form>
          </div>
        </div>

        {/* ORDER SUMMARY SIDEBAR PANEL */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4 bg-light position-sticky" style={{ top: '90px' }}>
            <h4 className="fw-bold mb-4 text-dark">Order Summary</h4>
            
            <div className="mb-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <img src={item.img} alt={item.title} className="rounded border me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-semibold text-dark small">{item.title}</h6>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <span className="fw-semibold text-dark">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between mb-2 text-secondary">
              <span>Subtotal</span>
              <span className="fw-medium text-dark">${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-secondary">
              <span>Shipping</span>
              <span className="fw-medium text-dark">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-0">
              <span className="fw-bold fs-5 text-dark">Grand Total</span>
              <span className="fw-bold fs-5 text-primary">${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;