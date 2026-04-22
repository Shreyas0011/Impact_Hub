import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Globe2, BarChart3 } from 'lucide-react';

const TRUST = [
  { icon: <ShieldCheck size={15} />, label: 'MCA Compliant'    },
  { icon: <Globe2      size={15} />, label: 'Pan-India Network' },
  { icon: <BarChart3   size={15} />, label: 'Real-time Reports' },
  { icon: '🤝',                      label: '500+ Corporations' },
];

const Hero = () => (
  <section style={{
    position: 'relative',
    paddingTop: '148px',
    paddingBottom: '96px',
    overflow: 'hidden',
    background: '#FFFFFF',
  }}>
    {/* Subtle dot grid */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      opacity: 0.45,
    }} />
    {/* Blue glow */}
    <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 18px', marginBottom: '32px',
          borderRadius: '999px', background: '#EFF6FF', border: '1px solid #BFDBFE',
          color: '#1D4ED8', fontSize: '12px', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB', display: 'inline-block' }} />
        India's #1 CSR Management Platform
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          fontSize: 'clamp(40px, 6.5vw, 80px)',
          fontWeight: 900, letterSpacing: '-0.035em',
          lineHeight: 1.05, marginBottom: '24px', color: '#0F172A',
        }}
      >
        Connecting Corporations<br />
        <span style={{
          background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #60A5FA 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          to Real Social Impact.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          fontSize: '18px', color: '#475569', maxWidth: '580px',
          margin: '0 auto 44px', lineHeight: 1.75, fontWeight: 500,
        }}
      >
        Impact Hub bridges corporations, nonprofits, and foundations for transparent,
        measurable social change — fully aligned with India's CSR mandate.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <button
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
            color: 'white', fontWeight: 700, fontSize: '15px',
            padding: '15px 34px', borderRadius: '14px', border: 'none', cursor: 'pointer',
            boxShadow: '0 8px 28px rgba(37,99,235,0.38)',
            letterSpacing: '0.01em', transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(37,99,235,0.48)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.38)'; }}
        >
          Explore Opportunities <ArrowRight size={18} />
        </button>
        <button
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', color: '#1D4ED8', fontWeight: 700, fontSize: '15px',
            padding: '15px 34px', borderRadius: '14px',
            border: '2px solid #BFDBFE', cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = '#EFF6FF'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.background = 'white'; }}
        >
          <TrendingUp size={17} /> View Impact Reports
        </button>
      </motion.div>

      {/* Trust pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}
      >
        {TRUST.map(({ icon, label }) => (
          <div key={label} style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'white', borderRadius: '999px',
            border: '1px solid #E2E8F0', padding: '8px 16px',
            fontSize: '12px', fontWeight: 600, color: '#475569',
            boxShadow: '0 1px 6px rgba(15,23,42,0.06)',
          }}>
            <span style={{ color: '#2563EB', display: 'flex', alignItems: 'center' }}>{icon}</span>
            {label}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
