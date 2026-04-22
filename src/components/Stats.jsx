import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '₹120Cr+', label: 'CSR Funds Deployed',   color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  { value: '850+',    label: 'Verified Foundations',  color: '#0EA5E9', bg: '#F0F9FF', border: '#BAE6FD' },
  { value: '2.4M',    label: 'Beneficiaries Reached', color: '#6366F1', bg: '#EEF2FF', border: '#C7D2FE' },
  { value: '98.5%',   label: 'Compliance Rate',       color: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD' },
];

const Stats = () => (
  <section style={{ background: '#FFFFFF', borderTop: '1px solid #E2E8F0', padding: '88px 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#94A3B8', display: 'block', marginBottom: '12px' }}>
          Platform Impact
        </span>
        <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>
          Numbers That Speak for Themselves
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
        {STATS.map(({ value, label, color, bg, border }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              borderRadius: '20px', padding: '36px 32px',
              background: bg, border: `1px solid ${border}`,
              boxShadow: '0 1px 8px rgba(15,23,42,0.04)',
            }}
          >
            <div style={{ fontSize: 'clamp(38px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-0.04em', color, marginBottom: '10px', lineHeight: 1 }}>
              {value}
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#64748B' }}>
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
