import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => (
  <section style={{ background: '#FFFFFF', padding: '60px 0', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
      <p style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 40 }}>
        Trusted by forward-thinking companies and credible foundations
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap', opacity: 0.4 }}>
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{
              height: 36, width: 160, borderRadius: 10,
              background: 'linear-gradient(90deg, #E2E8F0, #F1F5F9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}
          >
            Partner {i}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
