import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const BLUE = '#2563EB';
const NAVY = '#1B4FD8';
const DARK = '#0F172A';
const MUTED = '#64748B';

const NGOS = [
  { sector: 'Education & Youth', desc: "A short description of the NGO's mission and its core area of impact for society and communities." },
  { sector: 'Healthcare Access', desc: "A short description of the NGO's mission and its core area of impact for society and communities." },
  { sector: 'Rural Development', desc: "A short description of the NGO's mission and its core area of impact for society and communities." },
];

const VerifiedNGOs = () => (
  <section id="ngos" style={{ background: '#FFFFFF', padding: '108px 0' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 560 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 16 }}>Our Network</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: DARK, lineHeight: 1.08, letterSpacing: '-0.028em', marginBottom: 16 }}>
            Our{' '}
            <span style={{ background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Verified NGOs
            </span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: MUTED }}>Partner with credible organizations that have passed our multi-tier verification process.</p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', borderRadius: 16, border: '1.5px solid #E2E8F0',
            background: 'white', fontWeight: 700, fontSize: 14, color: DARK, cursor: 'pointer',
            boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
          }}
        >
          View All NGOs <ArrowRight size={16} />
        </motion.button>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {NGOS.map((ngo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(15,23,42,0.10)' }}
            style={{
              background: 'white', border: '1px solid #F1F5F9', borderRadius: 28,
              padding: '44px', boxShadow: '0 4px 24px rgba(15,23,42,0.05)',
              transition: 'box-shadow 0.35s ease',
            }}
          >
            {/* Top Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
              {/* Avatar placeholder */}
              <div style={{
                width: 60, height: 60, borderRadius: 20,
                background: 'linear-gradient(135deg, #DBEAFE, #EFF6FF)',
                border: '1px solid rgba(191,219,254,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(37,99,235,0.15)' }} />
              </div>
              {/* Verified badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '6px 12px', borderRadius: 999,
                background: 'linear-gradient(135deg, rgba(239,246,255,0.9), rgba(219,234,254,0.6))',
                border: '1px solid rgba(191,219,254,0.6)',
                fontSize: 10, fontWeight: 800, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.08em',
                boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
              }}>
                <ShieldCheck size={11} /> Verified
              </div>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 6, letterSpacing: '-0.015em' }}>NGO Name Placeholder</h3>
            <div style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 16 }}>{ngo.sector}</div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: MUTED, marginBottom: 28 }}>{ngo.desc}</p>
            <div style={{ height: 1, background: '#F8FAFC', marginBottom: 24 }} />
            <button
              style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: DARK, padding: 0, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = BLUE}
              onMouseLeave={e => e.currentTarget.style.color = DARK}
            >
              Portfolio Details <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VerifiedNGOs;
