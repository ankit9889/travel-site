import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🏔️',
      title: 'Scenic Mountain Views',
      description: 'Experience breathtaking landscapes and serene valleys throughout your journey.'
    },
    {
      icon: '🌟',
      title: 'Luxury Accommodations',
      description: 'Stay in premium hotels and resorts with world-class amenities and comfort.'
    },
    {
      icon: '🍽️',
      title: 'Authentic Cuisine',
      description: 'Savor delicious local delicacies and international cuisine prepared by expert chefs.'
    },
    {
      icon: '🚗',
      title: 'Private Transportation',
      description: 'Travel in comfort with our fleet of luxury vehicles and experienced drivers.'
    },
    {
      icon: '📸',
      title: 'Photography Tours',
      description: 'Capture unforgettable moments with guided photography sessions at prime locations.'
    },
    {
      icon: '🧘',
      title: 'Wellness Activities',
      description: 'Rejuvenate with yoga sessions, spa treatments, and meditation in peaceful surroundings.'
    }
  ];

  return (
    <section className="features">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="features-title"
      >
        Why Choose Our Delhi to Manali Package?
      </motion.h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
