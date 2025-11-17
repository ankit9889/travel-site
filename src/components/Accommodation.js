import React from 'react';
import { motion } from 'framer-motion';
import './Accommodation.css';

const Accommodation = () => {
  const accommodations = [
    {
      name: "The Himalayan Resort",
      location: "Manali",
      type: "Luxury Resort",
      rating: 5,
      price: "₹12,000/night",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      amenities: ["Spa", "Restaurant", "Valley View", "Fireplace", "Room Service"],
      description: "Experience luxury amidst the Himalayas with world-class amenities and breathtaking views."
    },
    {
      name: "Chandigarh Grand Hotel",
      location: "Chandigarh",
      type: "Business Hotel",
      rating: 4.5,
      price: "₹8,000/night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      amenities: ["Business Center", "Fitness Center", "Swimming Pool", "Fine Dining", "Concierge"],
      description: "Modern luxury in the heart of Chandigarh's planned city architecture."
    },
    {
      name: "Delhi Heritage Palace",
      location: "Delhi",
      type: "Heritage Hotel",
      rating: 4.8,
      price: "₹10,000/night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      amenities: ["Heritage Architecture", "Rooftop Restaurant", "Spa", "Cultural Events", "Airport Transfer"],
      description: "Blend of Mughal heritage and modern luxury in the capital city."
    }
  ];

  return (
    <section className="accommodation">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="accommodation-title"
      >
        Luxury Accommodations
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="accommodation-subtitle"
      >
        Experience unparalleled comfort and luxury at our handpicked properties
      </motion.p>

      <div className="accommodation-grid">
        {accommodations.map((hotel, index) => (
          <motion.div
            key={index}
            className="accommodation-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="accommodation-image">
              <img src={hotel.image} alt={hotel.name} />
              <div className="accommodation-overlay">
                <div className="accommodation-rating">
                  <span className="stars">{'⭐'.repeat(Math.floor(hotel.rating))}</span>
                  <span className="rating-number">{hotel.rating}</span>
                </div>
                <div className="accommodation-price">{hotel.price}</div>
              </div>
            </div>

            <div className="accommodation-content">
              <div className="accommodation-header">
                <h3>{hotel.name}</h3>
                <span className="accommodation-type">{hotel.type}</span>
              </div>

              <div className="accommodation-location">
                <span>📍 {hotel.location}</span>
              </div>

              <p className="accommodation-description">{hotel.description}</p>

              <div className="accommodation-amenities">
                {hotel.amenities.map((amenity, idx) => (
                  <span key={idx} className="amenity-tag">
                    {amenity}
                  </span>
                ))}
              </div>

              <motion.button
                className="accommodation-book-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
