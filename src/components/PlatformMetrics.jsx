import React from 'react';
import { motion } from 'framer-motion';

const BLUE = '#2563EB';
const DARK = '#0F172A';
const MUTED = '#94A3B8';

const METRICS = [
  { value: '₹___Cr+', label: 'Funds Facilitated', suffix: '' },
  { value: '___+', label: 'Partnerships', suffix: '' },
  { value: '___K+', label: 'Beneficiaries', suffix: '' },
  { value: '100%', label: 'Verified Profiles', suffix: '' },
];

const PlatformMetrics = () => (
  <section style={{
    background: 'linear-gradient(135deg, #0D2B8B 0%, #1B4FD8 50%, #2563EB 100%)',
    padding: '80px 0',
  }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {METRICS.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{
              textAlign: 'center', padding: '20px 32px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.10)' : 'none',
            }}
          >
            <div style={{ fontSize: 'clamp(36px, 4.5vw, 58px)', fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 12 }}>
              {m.value}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(191,219,254,0.8)', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformMetrics;
