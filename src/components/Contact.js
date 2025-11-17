import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-title"
      >
        Get in Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-info"
        >
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
              <p>+91 98765 43211</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <h3>Email Us</h3>
              <p>info@delhimanalitours.com</p>
              <p>bookings@delhimanalitours.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h3>Visit Our Office</h3>
              <p>123 Tourism Plaza, Connaught Place<br />New Delhi - 110001</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🕒</span>
            <div>
              <h3>Business Hours</h3>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-form"
        >
          <h3>Send us a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Service</option>
                <option value="booking">Tour Booking</option>
                <option value="inquiry">General Inquiry</option>
                <option value="custom">Custom Package</option>
                <option value="support">Customer Support</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="contact-submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="payment-info"
      >
        <h3>Payment Information</h3>
        <div className="payment-methods">
          <div className="payment-method">
            <span className="payment-icon">💳</span>
            <span>Credit/Debit Cards</span>
          </div>
          <div className="payment-method">
            <span className="payment-icon">🏦</span>
            <span>Net Banking</span>
          </div>
          <div className="payment-method">
            <span className="payment-icon">📱</span>
            <span>UPI Payments</span>
          </div>
          <div className="payment-method">
            <span className="payment-icon">💰</span>
            <span>Cash on Booking</span>
          </div>
        </div>
        <p className="payment-note">
          <strong>Important:</strong> 50% advance payment required to confirm booking.
          Remaining 50% payable 7 days before departure. All payments are secure and encrypted.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
