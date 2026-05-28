import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 mt-5 border-top border-primary border-3">
      <div className="container py-3">
        <div className="row g-4 mb-5">
          
          {/* COLUMN 1: BRAND UTILITIES */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-white mb-3">
              <span className="text-primary">E-</span>Shop
            </h3>
            <p className="text-light text-opacity-75 small lh-lg mb-4" style={{ maxWidth: '320px' }}>
              Your ultimate destination for curated premium trends. Experience secure checkouts, ultra-fast delivery options, and unmatched customer support metrics.
            </p>
            {/* Clean Social Icons with clean borders */}
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center social-btn" style={{ width: '38px', height: '38px' }}>
                <span className="small fw-bold">Fb</span>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center social-btn" style={{ width: '38px', height: '38px' }}>
                <span className="small fw-bold">Ig</span>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center social-btn" style={{ width: '38px', height: '38px' }}>
                <span className="small fw-bold">X</span>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center social-btn" style={{ width: '38px', height: '38px' }}>
                <span className="small fw-bold">In</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK SHOP ROUTING LINKS */}
          <div className="col-lg-2 col-md-3 col-6 ps-lg-4">
            <h6 className="text-primary text-uppercase fw-bold mb-3 tracking-wider small">Explore</h6>
            <ul className="list-unstyled d-grid gap-2">
              <li>
                <Link to="/" className="text-light text-opacity-75 text-decoration-none hover-link small">Home Layout</Link>
              </li>
              <li>
                <Link to="/products" className="text-light text-opacity-75 text-decoration-none hover-link small">Our Catalog</Link>
              </li>
              <li>
                <Link to="/search" className="text-light text-opacity-75 text-decoration-none hover-link small">Search Products</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CORPORATE COMPANY LINKS */}
          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="text-primary text-uppercase fw-bold mb-3 tracking-wider small">Company</h6>
            <ul className="list-unstyled d-grid gap-2">
              <li>
                <Link to="/about" className="text-light text-opacity-75 text-decoration-none hover-link small">About Our Brand</Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-opacity-75 text-decoration-none hover-link small">Contact Support</Link>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75 text-decoration-none hover-link small">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER SUBSCRIPTION CONSOLE */}
          <div className="col-lg-4 col-md-12">
            <h6 className="text-white text-uppercase fw-bold mb-3 tracking-wider small">Stay Updated</h6>
            <p className="text-light text-opacity-75 small mb-3">
              Subscribe to our insider mailing newsletter stack to unlock real-time promotional alerts, deals, and coupon codes.
            </p>
            
            {subscribed ? (
              <div className="alert alert-success p-2 small border-0 bg-success bg-opacity-20 text-white rounded-3 mb-0" role="alert">
                ✨ Success! You have unlocked your insider access.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="input-group shadow-sm">
                <input
                  type="email"
                  className="form-control bg-transparent border-secondary text-white small custom-input"
                  placeholder="Enter your email address..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: '0.9rem', color: '#fff' }}
                />
                <button className="btn btn-primary px-4 fw-semibold" type="submit">
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* LOWER DESCLOSURE CARD BAR */}
        <hr className="border-secondary opacity-25 my-0" />
        
        <div className="row py-4 align-items-center g-3 small text-light text-opacity-50">
          <div className="col-md-6 text-center text-md-start">
            &copy; {new Date().getFullYear()} E-Shop Inc. All rights reserved. Built beautifully using React & Bootstrap.
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-inline-flex gap-3 footer-gateways">
              <span>💳 Visa</span>
              <span>💳 Mastercard</span>
              <span>💳 PayPal</span>
              <span>🍎 Apple Pay</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;