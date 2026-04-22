import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Leaf, ArrowRight } from 'lucide-react';

const NAVY = '#1B4FD8';
const BLUE = '#2563EB';

const CTA = () => (
  <section style={{ background: '#FFFFFF', padding: '80px 0 108px' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: 'relative', overflow: 'hidden', borderRadius: 44,
          background: 'linear-gradient(135deg, #0D2B8B 0%, #1B4FD8 40%, #2563EB 70%, #3B82F6 100%)',
          padding: '88px 80px', textAlign: 'center',
          boxShadow: '0 40px 100px rgba(27,79,216,0.30), 0 0 0 1px rgba(255,255,255,0.06) inset',
        }}
      >
        {/* Background orbs */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 18px', borderRadius: 999, marginBottom: 28,
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.9)',
            textTransform: 'uppercase', letterSpacing: '0.14em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#93C5FD', boxShadow: '0 0 0 3px rgba(147,197,253,0.25)' }} />
            Start Making an Impact Today
          </div>

          <h2 style={{
            fontSize: 'clamp(34px, 5vw, 64px)', fontWeight: 900, color: 'white',
            lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            Ready to create
            <br />meaningful impact?
          </h2>

          <p style={{ fontSize: 18, color: 'rgba(219,234,254,0.85)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 52px', fontWeight: 400 }}>
            Join the ecosystem where transparency meets social urgency. Register today and start your impact journey.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '18px 36px', borderRadius: 18,
                background: 'rgba(255,255,255,0.97)',
                color: NAVY, fontWeight: 800, fontSize: 15.5, border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.9) inset',
              }}
            >
              <Building2 size={18} /> Join as Company
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '18px 36px', borderRadius: 18,
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)',
                color: 'white', fontWeight: 800, fontSize: 15.5,
                border: '1.5px solid rgba(255,255,255,0.25)', cursor: 'pointer',
              }}
            >
              <Leaf size={18} /> Register NGO <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
