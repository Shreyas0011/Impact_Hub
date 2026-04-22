import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Wallet, ArrowUpRight } from 'lucide-react';

const BLUE = '#2563EB';
const NAVY = '#1B4FD8';
const DARK = '#0F172A';
const MUTED = '#64748B';

const OPPS = [
  { area: 'Education & Literacy', budget: '₹___ Lakhs', location: 'Location, India', color: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' },
  { area: 'Healthcare Services', budget: '₹___ Lakhs', location: 'Location, India', color: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)' },
  { area: 'Environmental Care', budget: '₹___ Lakhs', location: 'Location, India', color: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)' },
];

const Opportunities = () => (
  <section id="opportunities" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)', padding: '108px 0' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 560 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 16 }}>Featured Listings</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: DARK, lineHeight: 1.08, letterSpacing: '-0.028em', marginBottom: 16 }}>
            Featured{' '}
            <span style={{ background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              CSR Opportunities
            </span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: MUTED }}>Discover high-impact projects seeking support from corporate partners.</p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', borderRadius: 16, border: '1.5px solid #E2E8F0',
            background: 'white', fontWeight: 700, fontSize: 14, color: DARK, cursor: 'pointer',
            boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
            transition: 'all 0.2s',
          }}
        >
          View All Opportunities <ArrowUpRight size={16} />
        </motion.button>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {OPPS.map((opp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(15,23,42,0.10)' }}
            style={{
              background: 'white', border: '1px solid #F1F5F9', borderRadius: 28,
              overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,23,42,0.05)',
              transition: 'box-shadow 0.35s ease',
            }}
          >
            {/* Card Image Area */}
            <div style={{ height: 200, background: opp.color, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', fontSize: 11, fontWeight: 700, color: BLUE, border: '1px solid rgba(191,219,254,0.4)', boxShadow: '0 2px 8px rgba(15,23,42,0.08)' }}>
                Active Listing
              </div>
              <Target size={52} style={{ color: 'rgba(37,99,235,0.12)' }} />
            </div>
            {/* Card Content */}
            <div style={{ padding: '32px' }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
                <Target size={12} /> {opp.area}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 20, letterSpacing: '-0.015em' }}>Organization Name</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: MUTED }}>
                  <Wallet size={15} style={{ color: '#94A3B8', flexShrink: 0 }} />
                  Budget: <strong style={{ color: DARK, marginLeft: 2, fontWeight: 700 }}>{opp.budget}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: MUTED }}>
                  <MapPin size={15} style={{ color: '#94A3B8', flexShrink: 0 }} /> {opp.location}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', padding: '13px', borderRadius: 14,
                  border: '1.5px solid #E2E8F0', background: 'white',
                  fontWeight: 700, fontSize: 14, color: DARK, cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE; e.currentTarget.style.background = '#F0F7FF'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = DARK; e.currentTarget.style.background = 'white'; }}
              >
                View Details / Apply
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Opportunities;
