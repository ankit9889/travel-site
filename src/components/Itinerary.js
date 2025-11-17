import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Itinerary.css';

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState(1);

  const itineraryData = [
    {
      day: 1,
      title: "Delhi Departure - Gateway to Adventure",
      description: "Begin your epic journey from the bustling capital of India. Embark on a scenic drive through the Himalayan foothills, witnessing the transition from urban chaos to serene mountain landscapes. Enjoy a comfortable overnight journey with all modern amenities.",
      highlights: ["Scenic Himalayan Drive", "Comfortable Transportation", "Welcome Briefing"],
      image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      day: 2,
      title: "Chandigarh Sightseeing - City Beautiful",
      description: "Arrive in Chandigarh, India's first planned city. Explore the architectural marvels designed by Le Corbusier, stroll through the meticulously manicured gardens, and visit the iconic Rock Garden. Experience the perfect blend of modernity and nature.",
      highlights: ["Rock Garden Visit", "Le Corbusier Architecture", "Rose Garden Stroll"],
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      day: 3,
      title: "Manali Arrival - Himalayan Paradise",
      description: "Welcome to Manali! Arrive in this picturesque hill station nestled in the Kullu Valley. Check into your luxury accommodation and spend the afternoon acclimating to the crisp mountain air. Enjoy the breathtaking views of snow-capped peaks and lush valleys.",
      highlights: ["Valley Views", "Luxury Check-in", "Local Market Exploration"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      day: 4,
      title: "Manali Exploration - Cultural Immersion",
      description: "Dive deep into Manali's rich cultural heritage. Visit the ancient Hadimba Temple, relax in the rejuvenating Vashisht Hot Springs, and explore the vibrant local markets. Savor authentic Himachali cuisine and interact with the warm local community.",
      highlights: ["Hadimba Temple", "Hot Springs", "Local Cuisine", "Market Shopping"],
      image: "https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      day: 5,
      title: "Rohtang Pass Adventure - Summit Experience",
      description: "Embark on the ultimate Himalayan adventure! Drive to Rohtang Pass, one of the highest motorable passes in the world. Engage in thrilling snow activities, capture panoramic views of the Great Himalayan Range, and create unforgettable memories in this winter wonderland.",
      highlights: ["Snow Activities", "Panoramic Views", "Photography", "Adventure Sports"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      day: 6,
      title: "Return to Delhi - Journey's End",
      description: "Bid a reluctant farewell to the majestic mountains as you begin your return journey to Delhi. Reflect on the incredible experiences, the friendships made, and the memories created during this transformative adventure. Your journey continues with new stories to tell.",
      highlights: ["Scenic Return Drive", "Memory Sharing", "Safe Arrival"],
      image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="itinerary">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="itinerary-title"
      >
        Your Futuristic Itinerary
      </motion.h2>
      <div className="itinerary-container">
        <div className="itinerary-days">
          {itineraryData.map((item) => (
            <motion.button
              key={item.day}
              className={`day-button ${activeDay === item.day ? 'active' : ''}`}
              onClick={() => setActiveDay(item.day)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: item.day * 0.1 }}
            >
              Day {item.day}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="itinerary-content"
        >
          <div className="content-image">
            <img src={itineraryData[activeDay - 1].image} alt={itineraryData[activeDay - 1].title} />
          </div>
          <div className="content-text">
            <h3>{itineraryData[activeDay - 1].title}</h3>
            <p>{itineraryData[activeDay - 1].description}</p>
            <div className="itinerary-highlights">
              {itineraryData[activeDay - 1].highlights.map((highlight, index) => (
                <span key={index} className="highlight-tag">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerary;
