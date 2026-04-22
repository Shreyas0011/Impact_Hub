import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Heart, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    num: '01', title: 'For Companies', icon: Building2,
    desc: 'Publish CSR budgets, focus areas, and discover trusted implementation partners aligned to your goals.',
    accent: '#EFF6FF',
  },
  {
    num: '02', title: 'For NGOs', icon: Heart,
    desc: 'Create a verified profile, showcase your credibility, and apply for relevant CSR funding opportunities.',
    accent: '#F0FDF4',
  },
  {
    num: '03', title: 'For Admin / Platform', icon: ShieldCheck,
    desc: 'Ensure credibility through multi-layer document validation and ongoing quality checks.',
    accent: '#FFF7ED',
  },
];

const HowItWorks = () => (
  <section id="about" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)', padding: '108px 0' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 80 }}
      >
        <p style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 16 }}>How It Works</p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#0F172A', lineHeight: 1.08, letterSpacing: '-0.028em', marginBottom: 20 }}>
          Simple. Transparent.{' '}
          <span style={{ background: 'linear-gradient(135deg, #1B4FD8, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Impactful.
          </span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: '#64748B', maxWidth: 560, margin: '0 auto' }}>
          A streamlined ecosystem designed to bridge the gap between resources and real-world social impact.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(37,99,235,0.12)' }}
            style={{
              background: 'white', borderRadius: 32, padding: '48px 40px',
              border: '1px solid #F1F5F9',
              boxShadow: '0 4px 24px rgba(15,23,42,0.05)',
              transition: 'box-shadow 0.35s ease',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Step number watermark */}
            <div style={{ position: 'absolute', top: -10, right: 24, fontSize: 96, fontWeight: 900, color: 'rgba(226,232,240,0.5)', lineHeight: 1, letterSpacing: '-0.05em', pointerEvents: 'none', userSelect: 'none' }}>
              {step.num}
            </div>
            <div style={{
              width: 68, height: 68, borderRadius: 22, background: step.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28,
              border: '1px solid rgba(226,232,240,0.6)',
            }}>
              <step.icon size={30} style={{ color: '#2563EB' }} />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 16, letterSpacing: '-0.02em' }}>{step.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: '#64748B' }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
