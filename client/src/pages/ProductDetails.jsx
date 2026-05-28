import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate

const DETAILED_PRODUCTS = [
  { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', rating: 4.5, reviews: 128, description: 'Experience pure audio bliss with premium active noise-canceling technology, plush ergonomic memory foam ear cups, and an ultra-extended 40-hour battery life package perfect for travel.', img: 'https://placehold.co/500x500?text=Headphones' },
  { id: 2, title: 'Smart Watch', price: 149, category: 'Electronics', rating: 4.2, reviews: 95, description: 'Track workouts, optimize your sleep patterns, monitor heart rate metrics, and view real-time smart notification alerts directly on a striking, crisp always-on high-definition AMOLED touchscreen layout.', img: 'https://placehold.co/500x500?text=Smart+Watch' },
  { id: 3, title: 'Leather Backpack', price: 79, category: 'Fashion', rating: 4.8, reviews: 210, description: 'Handcrafted utilizing premium full-grain weather-resistant genuine leather accents. Features dedicated padded compartments for 15-inch laptops alongside hidden quick-access anti-theft organizer pockets.', img: 'https://placehold.co/500x500?text=Backpack' },
  { id: 4, title: 'Running Shoes', price: 120, category: 'Fashion', rating: 4.4, reviews: 84, description: 'Engineered featuring proprietary responsive cushion technology midsoles paired with breathable knit uppers designed to dramatically elevate athletic output over long distance run milestones.', img: 'https://placehold.co/500x500?text=Shoes' },
  { id: 5, title: 'Mechanical Keyboard', price: 89, category: 'Electronics', rating: 4.7, reviews: 156, description: 'Elevate desktop speed typing and competitive gaming using responsive, clicky hot-swappable tactile mechanical custom key switches framed beneath bright premium customizable dynamic layout RGB profiles.', img: 'https://placehold.co/500x500?text=Keyboard' },
  { id: 6, title: 'Ceramic Coffee Mug', price: 25, category: 'Home Decor', rating: 4.9, reviews: 320, description: 'Artisanal kiln-fired heavy durable ceramic craft designed with elegant textured minimalist aesthetics coupled with optimal insulation structural walls keeping beverages hot for hours.', img: 'https://placehold.co/500x500?text=Mug' },
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // 2. Initialize navigate hook
  
  const product = DETAILED_PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mt-5 text-center py-5">
        <h3 className="text-danger">Product Not Found</h3>
        <Link to="/products" className="btn btn-dark mt-3">Back to Catalogue</Link>
      </div>
    );
  }

  const relatedProducts = DETAILED_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // 3. Helper purchase handler function
  const handlePurchase = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  return (
    <div className="container mt-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm overflow-hidden">
            <img src={product.img} alt={product.title} className="img-fluid object-fit-cover w-100" />
          </div>
        </div>

        <div className="col-md-6">
          <span className="badge bg-secondary mb-2">{product.category}</span>
          <h1 className="fw-bold mb-2 text-dark">{product.title}</h1>
          
          <div className="d-flex align-items-center mb-3">
            <div className="text-warning me-2 fs-5">
              {'★'.repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 ? '½' : ''}
            </div>
            <span className="small text-muted">({product.rating} / 5 out of {product.reviews} reviews)</span>
          </div>

          <h2 className="text-primary fw-bold mb-4">${product.price}</h2>
          
          <h5 className="fw-semibold text-dark">Description</h5>
          <p className="text-muted lh-lg mb-4">{product.description}</p>
          
          {/* Updated to use handlePurchase function */}
          <button 
            className="btn btn-dark btn-lg px-5 py-2 fw-semibold"
            onClick={() => handlePurchase(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="mt-5 pt-5 border-top">
          <h3 className="fw-bold mb-4 text-center">Related Products</h3>
          <div className="row g-4">
            {relatedProducts.map((relProd) => (
              <div key={relProd.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  <Link to={`/product/${relProd.id}`}>
                    <img src={relProd.img} className="card-img-top" alt={relProd.title} />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-semibold mb-1">
                      <Link to={`/product/${relProd.id}`} className="text-decoration-none text-dark">
                        {relProd.title}
                      </Link>
                    </h6>
                    <p className="card-text text-primary fw-bold mt-auto mb-2">${relProd.price}</p>
                    
                    {/* Updated to use handlePurchase function */}
                    <button 
                      className="btn btn-outline-dark btn-sm w-100"
                      onClick={() => handlePurchase(relProd)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;