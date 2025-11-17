import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');

  const packages = {
    standard: {
      name: 'Standard Package',
      price: '₹45,000',
      originalPrice: '₹55,000',
      duration: '6 Days / 5 Nights',
      groupSize: '2-4 People',
      features: [
        'AC Transportation',
        '3-Star Hotels',
        'Breakfast Included',
        'Sightseeing Tours',
        'Basic Travel Insurance',
        '24/7 Support'
      ],
      notIncluded: [
        'Flights',
        'Personal Expenses',
        'Optional Activities',
        'Travel Insurance Upgrade'
      ]
    },
    premium: {
      name: 'Premium Package',
      price: '₹75,000',
      originalPrice: '₹95,000',
      duration: '6 Days / 5 Nights',
      groupSize: '2-6 People',
      features: [
        'Luxury AC Transportation',
        '4-5 Star Hotels',
        'All Meals Included',
        'Private Sightseeing Tours',
        'Comprehensive Travel Insurance',
        'Personal Guide',
        'Airport Transfers',
        'Welcome Kit',
        'Photography Sessions'
      ],
      notIncluded: [
        'International Flights',
        'Personal Expenses',
        'Optional Adventure Sports'
      ]
    },
    luxury: {
      name: 'Luxury Package',
      price: '₹1,25,000',
      originalPrice: '₹1,50,000',
      duration: '6 Days / 5 Nights',
      groupSize: '2-8 People',
      features: [
        'Private Luxury Vehicle',
        '5-Star Heritage Hotels',
        'Gourmet Meals & Wine',
        'Private Helicopter Transfers',
        'VIP Sightseeing Access',
        'Personal Concierge',
        'Spa Treatments',
        'Professional Photography',
        'Exclusive Experiences',
        'Luxury Welcome Kit',
        '24/7 Butler Service'
      ],
      notIncluded: [
        'International Flights',
        'Personal Shopping',
        'Casino Expenses'
      ]
    }
  };

  const currentPackage = packages[selectedPackage];

  return (
    <section className="pricing">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pricing-title"
      >
        Choose Your Perfect Package
      </motion.h2>

      <div className="pricing-selector">
        {Object.keys(packages).map((key) => (
          <motion.button
            key={key}
            className={`package-btn ${selectedPackage === key ? 'active' : ''}`}
            onClick={() => setSelectedPackage(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {packages[key].name}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={selectedPackage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pricing-card"
      >
        <div className="pricing-header">
          <h3>{currentPackage.name}</h3>
          <div className="pricing-price">
            <span className="current-price">{currentPackage.price}</span>
            <span className="original-price">{currentPackage.originalPrice}</span>
            <span className="discount">Save 20%</span>
          </div>
        </div>

        <div className="pricing-details">
          <div className="detail-item">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">{currentPackage.duration}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Group Size:</span>
            <span className="detail-value">{currentPackage.groupSize}</span>
          </div>
        </div>

        <div className="pricing-features">
          <h4>What's Included:</h4>
          <ul>
            {currentPackage.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                ✅ {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="pricing-exclusions">
          <h4>Not Included:</h4>
          <ul>
            {currentPackage.notIncluded.map((exclusion, index) => (
              <li key={index}>❌ {exclusion}</li>
            ))}
          </ul>
        </div>

        <motion.button
          className="pricing-book-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book This Package
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pricing-guarantee"
      >
        <div className="guarantee-item">
          <span className="guarantee-icon">🛡️</span>
          <div>
            <h4>100% Safe & Secure</h4>
            <p>Travel with peace of mind with our comprehensive safety measures</p>
          </div>
        </div>
        <div className="guarantee-item">
          <span className="guarantee-icon">🔄</span>
          <div>
            <h4>Free Cancellation</h4>
            <p>Cancel up to 48 hours before departure with full refund</p>
          </div>
        </div>
        <div className="guarantee-item">
          <span className="guarantee-icon">⭐</span>
          <div>
            <h4>4.9/5 Rating</h4>
            <p>Trusted by over 10,000+ happy travelers</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
