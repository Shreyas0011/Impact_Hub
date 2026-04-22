import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = ['TATA TRUSTS','AZIM PREMJI PHILANTHROPIES','INFOSYS FOUNDATION','HCL FOUNDATION','WIPRO CARES','HDFC PARIVARTAN','MAHINDRA FOUNDATION'];

const Partners = () => (
  <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '52px 0' }}>
    <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '36px' }}>
      Trusted by India's Leading CSR Foundations
    </p>
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}>
      <motion.div
        animate={{ x: '-50%' }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '80px', alignItems: 'center', whiteSpace: 'nowrap' }}
      >
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <span key={i} style={{ fontSize: '13px', fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.12em', cursor: 'default', userSelect: 'none' }}>
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Partners;
