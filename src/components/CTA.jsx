import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, HeartHandshake } from 'lucide-react';

const CTA = () => (
  <section style={{ background: '#F8FAFC', padding: '96px 48px', borderTop: '1px solid #E2E8F0' }}>
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 45%, #2563EB 100%)',
          borderRadius: '32px', padding: '72px 60px',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(37,99,235,0.28)',
        }}
      >
        {/* Orbs */}
        <div style={{ position: 'absolute', top: -70, right: -70, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -50, left: -50, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 18px', marginBottom: '32px',
            borderRadius: '999px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#93C5FD', display: 'inline-block' }} />
            Start Making an Impact Today
          </div>

          <h2 style={{
            fontSize: 'clamp(26px, 4.5vw, 50px)', fontWeight: 900,
            letterSpacing: '-0.025em', lineHeight: 1.1,
            color: 'white', marginBottom: '20px',
          }}>
            Ready to Fulfil Your<br />CSR Mandate Meaningfully?
          </h2>

          <p style={{ fontSize: '17px', color: 'rgba(219,234,254,0.85)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Join 500+ corporations already using Impact Hub to plan, deploy,
            and report their CSR spend with full compliance and real-world outcomes.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'white', color: '#1D4ED8', fontWeight: 700, fontSize: '14px',
                padding: '14px 28px', borderRadius: '14px', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Building2 size={16} /> I'm a Corporation
            </button>
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)',
                color: 'white', fontWeight: 700, fontSize: '14px',
                padding: '14px 28px', borderRadius: '14px', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            >
              <HeartHandshake size={16} /> I'm a Foundation / NGO
            </button>
          </div>

          <p style={{ marginTop: '24px', fontSize: '12px', color: 'rgba(191,219,254,0.7)', fontWeight: 500 }}>
            Free to join · No platform fee for verified NGOs · MCA Schedule VII compliant
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
