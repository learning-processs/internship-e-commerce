import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate import

const ALL_PRODUCTS = [
  { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', img: 'https://brain-images-ssl.cdn.dixons.com/8/2/10207228/u_10207228.jpg' },
  { id: 2, title: 'Smart Watch', price: 149, category: 'Electronics', img: 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/06/015-galaxy-watch-fe-silver-r-perspective-1.jpg' },
  { id: 3, title: 'Leather Backpack', price: 79, category: 'Fashion', img: 'https://therealleathercompany.com/cdn/shop/files/the-standard-leather-laptop-backpack-for-men_9.jpg?v=1740411587' },
  { id: 4, title: 'Running Shoes', price: 120, category: 'Fashion', img: 'https://sc01.alicdn.com/kf/HTB1REpsXIfrK1Rjy1Xdq6yemFXa8/New-arrival-cheap-name-brand-kids-sport.jpg' },
  { id: 5, title: 'Mechanical Keyboard', price: 89, category: 'Electronics', img: 'https://m.media-amazon.com/images/I/61nghmq8GPL._AC_.jpg' },
  { id: 6, title: 'Ceramic Coffee Mug', price: 25, category: 'Home Decor', img: 'https://i5.walmartimages.com/seo/24-oz-Large-Ceramic-Coffee-mugs-Extra-Large-Tea-Coffee-Cups-Large-Handle-Coffee-Mug-Office-Home-Microwave-Diahwasher-Safe-24-oz-green_4ece6abb-82fa-41eb-aefd-876add9a905a.26d4fa5fbaf53eda7a9e26d6ebc3faab.jpeg' },
];

const CATEGORIES = ['Electronics', 'Fashion', 'Home Decor'];

const Category = ({ addToCart }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate(); // 2. Initialize navigate hook

  const categoryProducts = ALL_PRODUCTS.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  // 3. Helper purchase handler function
  const handlePurchase = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mt-4" style={{ minHeight: '75vh' }}>
      <div className="row g-4">
        
        {/* CATEGORY LIST SIDEBAR */}
        <div className="col-lg-3">
          <div className="card p-3 shadow-sm border-0 bg-light">
            <h5 className="fw-bold mb-3">Browse Categories</h5>
            <div className="list-group">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat}`}
                  className={`list-group-item list-group-item-action fw-medium border-0 rounded mb-1 ${
                    categoryName.toLowerCase() === cat.toLowerCase() ? 'active bg-dark text-white' : ''
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN GRID DISPLAY */}
        <div className="col-lg-9">
          <h2 className="fw-bold mb-4 text-capitalize text-dark">
            Category: {categoryName}
          </h2>

          <div className="row g-4">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4">
                  <div className="card h-100 shadow-sm border-0 overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img} className="card-img-top img-fluid" alt={product.title} />
                    </Link>

                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-semibold">
                        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                          {product.title}
                        </Link>
                      </h6>
                      
                      <p className="card-text text-muted small mb-3">
                        {product.shortDesc}
                      </p>
                      
                      <p className="card-text text-primary fw-bold mt-auto mb-3">${product.price}</p>
                      
                      {/* Updated to use handlePurchase function */}
                      <button
                        className="btn btn-dark btn-sm w-100"
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
                <p className="text-muted fs-5">No products found in this category.</p>
                <Link to="/products" className="btn btn-sm btn-outline-dark">
                  View Full Catalog
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Category;