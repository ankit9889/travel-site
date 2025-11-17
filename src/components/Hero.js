import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('.features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="https://player.vimeo.com/external/370734959.sd.mp4?s=c90dcaba73c19b7c90a1ccaf6a1b0e0e4c6b1c4e&profile_id=165" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Delhi to Manali
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-subtitle"
        >
          Embark on a Futuristic Journey to Paradise - Experience the Himalayan Magic Like Never Before
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-stats"
        >
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Days</span>
          </div>
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Cities</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToFeatures}
        >
          Explore Now
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="scroll-indicator"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
