import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate import

const ALL_PRODUCTS = [
  { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', img: 'https://placehold.co/400x400?text=Headphones' },
  { id: 2, title: 'Smart Watch', price: 149, category: 'Electronics', img: 'https://placehold.co/400x400?text=Smart+Watch' },
  { id: 3, title: 'Leather Backpack', price: 79, category: 'Fashion', img: 'https://placehold.co/400x400?text=Backpack' },
  { id: 4, title: 'Running Shoes', price: 120, category: 'Fashion', img: 'https://placehold.co/400x400?text=Shoes' },
  { id: 5, title: 'Mechanical Keyboard', price: 89, category: 'Electronics', img: 'https://placehold.co/400x400?text=Keyboard' },
  { id: 6, title: 'Ceramic Coffee Mug', price: 25, category: 'Home Decor', img: 'https://placehold.co/400x400?text=Mug' },
];

const Products = ({ addToCart }) => {
  const navigate = useNavigate(); // 2. Initialize navigate hook
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(150);

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // 3. Helper purchase handler function
  const handlePurchase = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mt-4" style={{ minHeight: '75vh' }}>
      <h2 className="fw-bold mb-4">Our Catalogue</h2>

      <div className="row g-4">
        {/* LEFT COLUMN: FILTERS */}
        <div className="col-lg-3">
          <div className="card p-3 shadow-sm border-0 bg-light">
            <h5 className="fw-bold mb-3">Filters</h5>
            
            <div className="mb-4">
              <label className="form-label small fw-semibold text-muted">Search</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label small fw-semibold text-muted">Category</label>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home Decor">Home Decor</option>
              </select>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label small fw-semibold text-muted mb-0">Max Price</label>
                <span className="badge bg-dark">${maxPrice}</span>
              </div>
              <input
                type="range"
                className="form-range"
                min="0"
                max="150"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between small text-muted">
                <span>$0</span>
                <span>$150</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DYNAMIC PRODUCT LIST */}
        <div className="col-lg-9">
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img} className="card-img-top img-fluid" alt={product.title} />
                    </Link>

                    <div className="card-body d-flex flex-column">
                      <span className="badge bg-secondary mb-2 align-self-start">{product.category}</span>
                      
                      <h6 className="card-title fw-semibold">
                        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                          {product.title}
                        </Link>
                      </h6>
                      
                      <p className="card-text text-primary fw-bold mb-3">${product.price}</p>
                      
                      {/* Updated to use handlePurchase function */}
                      <button
                        className="btn btn-dark btn-sm mt-auto w-100"
                        onClick={() => handlePurchase(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center my-5 py-5">
                <p className="text-muted fs-5">No products found matching your filter combinations.</p>
                <button 
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setMaxPrice(150); }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;