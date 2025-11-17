import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelers: 1,
      date: '',
      message: ''
    });
  };

  return (
    <section className="booking">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="booking-container"
      >
        <h2 className="booking-title">Book Your Futuristic Adventure</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
              >
                <option value={1}>1 Traveler</option>
                <option value={2}>2 Travelers</option>
                <option value={3}>3 Travelers</option>
                <option value={4}>4 Travelers</option>
                <option value={5}>5+ Travelers</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Special Requests or Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="booking-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default BookingForm;
