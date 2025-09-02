import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import ProcessSection from './components/ProcessSection';
import ParallaxSection from './components/ParallaxSection';
import StatsSection from './components/StatsSection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Hero />
          <Features />
          <About />
          <Services />
          <ProcessSection />
          <ParallaxSection />
          <StatsSection />
          <Portfolio />
          <Testimonials />
          <CTASection />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;