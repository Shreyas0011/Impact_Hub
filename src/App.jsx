import React from 'react';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Stats    from './components/Stats';
import CTA      from './components/CTA';
import Footer   from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#F8FAFF', color: '#0F172A', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
