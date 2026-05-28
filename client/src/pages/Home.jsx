import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate

const Home = ({ addToCart }) => {
  const navigate = useNavigate(); // 2. Initialize navigate hook

  const categories = [
    { id: 1, name: 'Electronics', img: 'https://placehold.co/300x200?text=Electronics' },
    { id: 2, name: 'Fashion', img: 'https://placehold.co/300x200?text=Fashion' },
    { id: 3, name: 'Home Decor', img: 'https://placehold.co/300x200?text=Home+Decor' },
  ];

  const latestProducts = [
    { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', img: 'https://placehold.co/400x400?text=Headphones' },
    { id: 2, title: 'Smart Watch', price: 149, category: 'Electronics', img: 'https://placehold.co/400x400?text=Smart+Watch' },
    { id: 3, title: 'Leather Backpack', price: 79, category: 'Fashion', img: 'https://placehold.co/400x400?text=Backpack' },
    { id: 4, title: 'Running Shoes', price: 120, category: 'Fashion', img: 'https://placehold.co/400x400?text=Shoes' },
  ];

  // 3. Helper handler function
  const handlePurchase = (product) => {
    addToCart(product);
    navigate('/cart'); // Smoothly pushes user to Cart page view
  };

  return (
    <div>
      {/* CAROUSEL SLIDER */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '450px', background: '#e9ecef' }}>
            <img src="https://placehold.co/1200x450?text=Huge+Summer+Sale" className="d-block w-100 h-100 object-fit-cover" alt="Sale" />
            <div className="carousel-caption d-none d-md-block text-dark bg-light bg-opacity-75 rounded p-3">
              <h5>New Season Arrivals</h5>
              <p>Discover latest styles up to 50% off.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '450px', background: '#dee2e6' }}>
            <img src="https://placehold.co/1200x450?text=Next-Gen+Tech+In+Stock" className="d-block w-100 h-100 object-fit-cover" alt="Tech" />
            <div className="carousel-caption d-none d-md-block text-dark bg-light bg-opacity-75 rounded p-3">
              <h5>Upgrade Your Tech</h5>
              <p>Top tier quality premium smart gadgets.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* SHOP BY CATEGORY */}
      <div className="container mt-5">
        <h3 className="text-center mb-4 fw-bold">Shop by Category</h3>
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col-md-4">
              <Link to={`/category/${cat.name}`} className="text-decoration-none">
                <div className="card text-white overflow-hidden shadow-sm border-0 bg-dark position-relative animate-card" style={{ cursor: 'pointer' }}>
                  <img src={cat.img} className="card-img opacity-75" alt={cat.name} />
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <h4 className="card-title fw-bold text-white mb-0">{cat.name}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST PRODUCTS */}
      <div className="container mt-5">
        <h3 className="text-center mb-4 fw-bold">Latest Products</h3>
        <div className="row g-4">
          {latestProducts.map((prod) => (
            <div key={prod.id} className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <Link to={`/product/${prod.id}`}>
                  <img src={prod.img} className="card-img-top img-fluid" alt={prod.title} />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-semibold">
                    <Link to={`/product/${prod.id}`} className="text-decoration-none text-dark">
                      {prod.title}
                    </Link>
                  </h6>
                  <p className="card-text text-primary fw-bold mb-3">${prod.price}</p>
                  
                  {/* Hooked up to handlePurchase function */}
                  <button 
                    className="btn btn-outline-dark btn-sm mt-auto w-100"
                    onClick={() => handlePurchase(prod)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold">🚚 Free Delivery</h5>
                <p className="text-muted small mb-0">On all orders above $50</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold">🔒 Secure Payment</h5>
                <p className="text-muted small mb-0">100% protected checkout payments</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold">🔄 Easy Returns</h5>
                <p className="text-muted small mb-0">Hassle-free 30 day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;