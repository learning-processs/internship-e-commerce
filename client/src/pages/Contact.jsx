import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // JavaScript Object state to catch form field input validation errors
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear the error styling dynamically as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Pure JavaScript Validation Routine 
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // 1. Name verification check
    if (!formData.name.trim()) {
      tempErrors.name = 'Please enter your full name.';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters long.';
      isValid = false;
    }

    // 2. Email structural regex validation checking pattern matching
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure (e.g., user@domain.com).';
      isValid = false;
    }

    // 3. Subject verification check
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Please specify a message topic subject header.';
      isValid = false;
    }

    // 4. Message block body size constraints check
    if (!formData.message.trim()) {
      tempErrors.message = 'Message content cannot be blank.';
      isValid = false;
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Your message text body description must be at least 15 characters long.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Trigger the custom JavaScript validation function
    if (validateForm()) {
      // If the checks pass successfully, proceed with form submission
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5" style={{ minHeight: '75vh' }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark">Get in Touch</h2>
        <p className="text-muted small">Have any questions? We would love to hear from you.</p>
      </div>

      <div className="row g-5">
        
        {/* 1. CONTACT INFO PANEL */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm p-4 bg-dark text-white rounded-3">
            <h4 className="fw-bold mb-4 text-white">✔ Contact Info</h4>
            
            <div className="d-flex align-items-start mb-4">
              <span className="fs-3 me-3">📍</span>
              <div>
                <h6 className="fw-bold mb-1">Our Headquarters</h6>
                <p className="small text-light text-opacity-75 mb-0">
                  123 Commerce Boulevard,<br />Suite 500, New York, NY 10001
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <span className="fs-3 me-3">📞</span>
              <div>
                <h6 className="fw-bold mb-1">Call Support</h6>
                <p className="small text-light text-opacity-75 mb-0">+1 (555) 234-5678</p>
                <small className="text-muted">Mon - Fri, 9am - 6pm EST</small>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <span className="fs-3 me-3">✉</span>
              <div>
                <h6 className="fw-bold mb-1">Email Inquiries</h6>
                <p className="small text-light text-opacity-75 mb-0">support@eshop.com</p>
              </div>
            </div>

            <hr className="bg-light my-4 opacity-25" />

            <div className="pt-2">
              <h6 className="fw-bold text-uppercase text-muted small mb-2">Response Time</h6>
              <p className="small text-light text-opacity-75 mb-0">
                We typically respond to all customer service tickets within 24 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CONTACT FORM PANEL + 3. JAVASCRIPT VALIDATION */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-4 bg-white rounded-3 h-100">
            <h4 className="fw-bold mb-4 text-dark">✔ Contact Form</h4>
            
            {submitted ? (
              <div className="alert alert-success p-4 text-center my-auto rounded-3" role="alert">
                <span className="fs-2 d-block mb-2">✉</span>
                <h5 className="fw-bold">Message Sent Successfully!</h5>
                <p className="small mb-0 text-muted">
                  Thank you for reaching out. A support coordinator will be in touch with you shortly.
                </p>
                <button 
                  className="btn btn-sm btn-outline-success mt-3" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              // The `noValidate` attribute tells the browser to skip default HTML validation rules so our custom JS script can take over control smoothly
              <form onSubmit={handleFormSubmit} noValidate>
                <div className="row g-3">
                  
                  {/* Name Input field block */}
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-muted">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Email Input field block */}
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-muted">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Subject Input field block */}
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>

                  {/* Message TextArea Input block */}
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted">Your Message</label>
                    <textarea
                      name="message"
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here (minimum 15 characters)..."
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg px-4 mt-4 fw-semibold shadow-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;