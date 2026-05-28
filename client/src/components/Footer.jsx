import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase text-primary">E-Shop</h5>
            <p className="text-muted small">
              Your ultimate destination for quality items. Shop the best trends with ease and security.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-muted text-decoration-none">Products</Link></li>
              <li><Link to="/cart" className="text-muted text-decoration-none">Cart</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase">Contact Us</h5>
            <p className="text-muted small mb-1">Email: support@eshop.com</p>
            <p className="text-muted small">Phone: +1 234 567 890</p>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center text-muted small">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;