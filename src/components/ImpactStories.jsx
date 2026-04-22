import React from 'react';
import { motion } from 'framer-motion';

const BLUE = '#2563EB';
const DARK = '#0F172A';
const MUTED = '#64748B';

const STORIES = [
  { text: 'Collaborating through Impact Hub allowed us to scale our solar initiatives across 50 villages with complete financial transparency.', name: 'Partner Name', role: 'Head of CSR', initials: 'PN' },
  { text: 'The verification process gave us bandwidth to focus on ground impact rather than extensive documentation for every partner.', name: 'Foundation Lead', role: 'Executive Director', initials: 'FL' },
  { text: 'Matching our CSR budget with verified NGO partners has never been faster. We saved months of discovery and due-diligence time.', name: 'Corporate Head', role: 'Sustainability Manager', initials: 'CH' },
];

const ImpactStories = () => (
  <section style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 80%)', padding: '108px 0', overflow: 'hidden' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 80 }}
      >
        <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 16 }}>Impact Stories</p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: DARK, lineHeight: 1.08, letterSpacing: '-0.028em' }}>
          Real Partnerships.{' '}
          <span style={{ background: 'linear-gradient(135deg, #1B4FD8, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Real Change.
          </span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {STORIES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -6, boxShadow: '0 28px 64px rgba(15,23,42,0.10)' }}
            style={{
              background: 'white', border: '1px solid #F1F5F9', borderRadius: 28,
              padding: '48px 44px', position: 'relative', overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(15,23,42,0.05)',
              transition: 'box-shadow 0.35s ease',
            }}
          >
            {/* Decorative quote blob */}
            <div style={{
              position: 'absolute', top: -10, right: -10, width: 100, height: 100,
              borderRadius: '50%', background: 'linear-gradient(135deg, rgba(219,234,254,0.4), rgba(239,246,255,0.2))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 80, lineHeight: 1, color: 'rgba(37,99,235,0.12)', fontWeight: 900,
              paddingTop: 12, paddingLeft: 12,
            }}>"</div>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 24 }}>
              {[0,1,2,3,4].map(j => (
                <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: '#334155', fontStyle: 'italic', marginBottom: 32, position: 'relative' }}>
              "{s.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #1B4FD8, #2563EB)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: 13, fontWeight: 800, letterSpacing: '-0.01em',
              }}>
                {s.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: DARK, letterSpacing: '-0.01em' }}>{s.name}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>{s.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStories;
