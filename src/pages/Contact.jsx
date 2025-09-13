import React, { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // 🔥 Strong Regex Patterns
  const regexPatterns = {
    name: /^[A-Za-z\s]{3,50}$/, // only letters & spaces, 3–50 chars
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, // RFC-like email
    subject: /^[A-Za-z0-9\s,.'"-?!]{3,100}$/, // letters, numbers, punctuation
    message: /^.{10,500}$/, // 10–500 chars any text
  };

  const validate = () => {
    const newErrors = {};

    if (!regexPatterns.name.test(formData.name)) {
      newErrors.name = "Name must be 3–50 letters only.";
    }

    if (!regexPatterns.email.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!regexPatterns.subject.test(formData.subject)) {
      newErrors.subject = "Subject must be 3–100 characters.";
    }

    if (!regexPatterns.message.test(formData.message)) {
      newErrors.message = "Message must be between 10–500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <Layout>
      <Hero title="Contact Us" btnLink="" />

      {/* Contact Us Section */}
      <section id="contact" className="contact-section d-flex justify-content-center align-items-center">
        <div className="contact-container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-card shadow">
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center">Get in Touch</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                        id="subject"
                        placeholder="Subject of your message"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        rows={5}
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary px-4 py-2 rounded-pill contact-submit-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info – untouched */}
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="contact-info-card shadow">
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center">Contact Information</h3>
                  <p><i className="fas fa-map-marker-alt me-2" />123 Pet Street, Pet City, PC 12345</p>
                  <p><i className="fas fa-phone me-2" />(123) 456-7890</p>
                  <p><i className="fas fa-envelope me-2" />info@petcare.com</p>
                  <p><i className="fas fa-clock me-2" />Mon-Fri: 9am–6pm</p>
                  <p><i className="fas fa-clock me-2" />Saturday: 10am–4pm</p>
                  <p><i className="fas fa-clock me-2" />Sunday: Closed</p>
                  <div className="map-placeholder mt-4 text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7222495067856!2d67.06440627597727!3d24.80635647798162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9bd69d96b5%3A0xd0d62db024f15f1b!2sAlpha%20Pets%20DHA%20Branch!5e0!3m2!1sen!2s!4v1694639465484!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '0.75rem', width: '100%' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
