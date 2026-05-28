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
      setTimeout(() => setSubscribed(false), 4000); // Reset message after 4s
    }
  };

  return (
    <footer className="bg-dark text-light pt-5 mt-5 border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-4 mb-5">
          
          {/* COLUMN 1: BRAND UTILITIES */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold text-white mb-3">
              <span className="text-primary">E-</span>Shop
            </h4>
            <p className="text-muted small lh-lg mb-4">
              Your ultimate destination for curated premium trends. Experience secure checkouts, ultra-fast delivery options, and unmatched customer support metrics.
            </p>
            {/* Social Media Branding Badges */}
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <span className="small">FB</span>
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <span className="small">IG</span>
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <span className="small">X</span>
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <span className="small">LN</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK SHOP ROUTING LINKS */}
          <div className="col-lg-2 col-md-6 col-6 ps-lg-5">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider">Explore</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li>
                <Link to="/" className="text-muted text-decoration-none hover-link">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-muted text-decoration-none hover-link">Our Catalogue</Link>
              </li>
              <li>
                <Link to="/search" className="text-muted text-decoration-none hover-link">Search Catalog</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CORPORATE COMPANY LINKS */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider">Company</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li>
                <Link to="/about" className="text-muted text-decoration-none hover-link">About Our Brand</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted text-decoration-none hover-link">Contact Support</Link>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none hover-link">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER SUBSCRIPTION CONSOLE */}
          <div className="col-lg-5 col-md-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider">Stay Updated</h6>
            <p className="text-muted small mb-3">
              Subscribe to our insider mailing newsletter stack to unlock real-time promotional alerts, deals, and coupon codes.
            </p>
            
            {subscribed ? (
              <div className="alert alert-success p-2 small border-0 bg-success bg-opacity-10 text-success rounded-3 mb-0" role="alert">
                ✨ Success! You have unlocked your insider access.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="input-group shadow-sm">
                <input
                  type="email"
                  className="form-control bg-transparent border-secondary text-white small"
                  placeholder="Enter your email address..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: '0.9rem' }}
                />
                <button className="btn btn-primary px-4 fw-medium small" type="submit">
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* REINFORCED LOWER DISCLOSURE CARD BAR */}
        <hr className="border-secondary border-opacity-20 my-0" />
        
        <div className="row py-4 align-items-center g-3 small text-muted">
          <div className="col-md-6 text-center text-md-start">
            &copy; {new Date().getFullYear()} E-Shop Inc. All rights reserved. Built beautifully using React & Bootstrap.
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-inline-flex gap-3">
              <span title="Visa">💳 Visa</span>
              <span title="Mastercard">💳 Mastercard</span>
              <span title="PayPal">💳 PayPal</span>
              <span title="Apple Pay">🍎 Pay</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;