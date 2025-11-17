import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Accommodation from './components/Accommodation';
import Itinerary from './components/Itinerary';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Accommodation />
      <Itinerary />
      <Pricing />
      <Testimonials />
      <BookingForm />
      <Contact />
    </div>
  );
}

export default App;
