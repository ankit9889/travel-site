import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'An absolutely incredible journey! The views were breathtaking and the service was impeccable. Every detail was taken care of.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, India',
      rating: 5,
      text: 'The perfect blend of adventure and luxury. The itinerary was well-planned and the accommodations were world-class.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emma Wilson',
      location: 'London, UK',
      rating: 5,
      text: 'From Delhi to Manali, every moment was magical. The guides were knowledgeable and the food was amazing!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="testimonials-title"
      >
        What Our Travelers Say
      </motion.h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="testimonial-rating">
              {'⭐'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
