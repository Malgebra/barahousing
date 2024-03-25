// App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import InspirationGallery from './components/InspirationGallery';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ValueProposition />
      <InspirationGallery />
      <CTASection />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
