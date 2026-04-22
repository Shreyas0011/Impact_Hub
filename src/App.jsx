import React from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Partners       from './components/Partners';
import HowItWorks     from './components/HowItWorks';
import WhyChoose      from './components/WhyChoose';
import Opportunities  from './components/Opportunities';
import VerifiedNGOs   from './components/VerifiedNGOs';
import ImpactStories  from './components/ImpactStories';
import PlatformMetrics from './components/PlatformMetrics';
import CTA            from './components/CTA';
import Footer         from './components/Footer';

function App() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0F172A', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <WhyChoose />
        <Opportunities />
        <VerifiedNGOs />
        <ImpactStories />
        <PlatformMetrics />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
