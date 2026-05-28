import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Universal item catalog array for live search indexing
const ALL_PRODUCTS = [
  { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', img: 'https://placehold.co/400x400?text=Headphones' },
  { id: 2, title: 'Smart Watch', price: 149, category: 'Electronics', img: 'https://placehold.co/400x400?text=Smart+Watch' },
  { id: 3, title: 'Leather Backpack', price: 79, category: 'Fashion', img: 'https://placehold.co/400x400?text=Backpack' },
  { id: 4, title: 'Running Shoes', price: 120, category: 'Fashion', img: 'https://placehold.co/400x400?text=Shoes' },
  { id: 5, title: 'Mechanical Keyboard', price: 89, category: 'Electronics', img: 'https://placehold.co/400x400?text=Keyboard' },
  { id: 6, title: 'Ceramic Coffee Mug', price: 25, category: 'Home Decor', img: 'https://placehold.co/400x400?text=Mug' },
];

const SearchPage = ({ addToCart }) => {
  const [query, setQuery] = useState('');

  // Live filter pattern matching product titles or categories against user query inputs
  const searchedProducts = ALL_PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4" style={{ minHeight: '75vh' }}>
      <div className="card p-4 border-0 shadow-sm bg-light mb-4 rounded-3">
        <h2 className="fw-bold text-dark mb-3">Search Products</h2>
        
        {/* Search Input Bar Component */}
        <div className="input-group input-group-lg shadow-sm rounded">
          <span className="input-group-text bg-white border-end-0 text-muted">🔍</span>
          <input
            type="text"
            className="form-control border-start-0 ps-1"
            placeholder="Type item names or classifications (e.g., watch, shoes, electronics)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        {query && (
          <div className="form-text mt-2 ps-1 text-secondary">
            Found {searchedProducts.length} matching entries for "{query}"
          </div>
        )}
      </div>

      {/* ✔ Search Products Listing Output Grid Layout */}
      <div className="row g-4">
        {searchedProducts.length > 0 ? (
          searchedProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0 transition-hover">
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
                  <button
                    className="btn btn-dark btn-sm mt-auto w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <span className="fs-1 d-block mb-2">📦</span>
            <p className="text-muted fs-5">No matching products found. Try using alternative keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;