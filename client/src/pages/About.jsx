import React from 'react';

const About = () => {
  const features = [
    { id: 1, icon: '🌟', title: 'Premium Quality', desc: 'We curate products only from certified top-tier global manufacturers.' },
    { id: 2, icon: '⚡', title: 'Ultra Fast Delivery', desc: 'Our optimized logistics dispatch items within 24 hours of ordering.' },
    { id: 3, icon: '🤝', title: '24/7 Support', desc: 'A dedicated customer success team is always online to help you out.' },
  ];

  const testimonials = [
    { id: 1, name: 'Sarah Jenkins', role: 'Verified Buyer', quote: 'The customer service is incredible. My headphones arrived in less than two days, and the quality completely blew me away!', img: 'https://placehold.co/100x100?text=Sarah' },
    { id: 2, name: 'Alex Rivera', role: 'Tech Enthusiast', quote: 'Finding a reliable online storefront can be tricky, but E-Shop has earned my trust. The pricing is unbeatable.', img: 'https://placehold.co/100x100?text=Alex' },
  ];

  return (
    <div className="container mt-5" style={{ minHeight: '75vh' }}>
      
      {/* 1. IMAGES & TEXT SECTION */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-md-6">
          <img 
            src="https://placehold.co/600x400?text=Our+Creative+Workspace" 
            alt="Our Story Workspace" 
            className="img-fluid rounded-3 shadow" 
          />
        </div>
        <div className="col-md-6">
          <span className="text-primary fw-bold text-uppercase small">Our Story</span>
          <h1 className="fw-bold text-dark my-2">Revolutionizing Modern E-Commerce</h1>
          <p className="text-muted lh-lg">
            Founded with a simple mission, we strive to make premium shopping accessible, secure, and completely seamless for everyone across the globe. We bridge the gap between high-end quality and affordable pricing layouts.
          </p>
          <p className="text-muted lh-lg">
            Whether you are upgrading your workspace setup, updating your personal wardrobe, or revamping your living spaces, we handpick every item to guarantee absolute customer satisfaction.
          </p>
        </div>
      </div>

      {/* 2. FEATURES SECTION */}
      <div className="bg-light rounded-3 p-5 my-5 border shadow-sm">
        <h3 className="text-center fw-bold mb-5 text-dark">✔ Why Customers Choose Us</h3>
        <div className="row g-4 text-center">
          {features.map((feat) => (
            <div key={feat.id} className="col-md-4">
              <div className="p-3">
                <div className="fs-1 mb-3">{feat.icon}</div>
                <h5 className="fw-bold text-dark">{feat.title}</h5>
                <p className="text-muted small mb-0 px-2">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TESTIMONIALS SECTION */}
      <div className="my-5 pt-4">
        <h3 className="text-center fw-bold mb-2 text-dark">✔ What Our Community Says</h3>
        <p className="text-center text-muted small mb-5">Don't just take our word for it—hear from our real clients</p>
        
        <div className="row g-4 justify-content-center">
          {testimonials.map((test) => (
            <div key={test.id} className="col-md-6 col-lg-5">
              <div className="card h-100 p-4 border-0 shadow-sm bg-white border rounded-3">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={test.img} 
                    alt={test.name} 
                    className="rounded-circle border me-3" 
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
                  />
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{test.name}</h6>
                    <small className="text-muted">{test.role}</small>
                  </div>
                </div>
                <p className="text-muted italic mb-0">"{test.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;