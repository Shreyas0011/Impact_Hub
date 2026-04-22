import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Zap, CheckCircle2, BarChart4, Cpu } from 'lucide-react';

const FEATURES = [
  { title: 'Verified NGO Network', icon: ShieldCheck, desc: 'Every NGO is vetted through a multi-step process to ensure credibility and compliance.' },
  { title: 'Transparent CSR Discovery', icon: Search, desc: 'Browse opportunities by sector, geography, and budget with full data transparency.' },
  { title: 'Faster Partnerships', icon: Zap, desc: 'Smart algorithms match companies with the most relevant NGO partners in minutes.' },
  { title: 'Compliance Friendly', icon: CheckCircle2, desc: 'Built to align with MCA Schedule VII guidelines and India\'s current CSR mandate.' },
  { title: 'Scalable Impact Tracking', icon: BarChart4, desc: 'Real-time dashboards track project milestones and impact metrics at scale.' },
  { title: 'Smart Matching System', icon: Cpu, desc: 'AI-powered matching connects CSR goals to the most aligned NGO capabilities.' },
];

const WhyChoose = () => (
  <section style={{ background: '#FFFFFF', padding: '108px 0' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 80 }}
      >
        <p style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 16 }}>Why Choose Impact Hub</p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900, color: '#0F172A', lineHeight: 1.08, letterSpacing: '-0.028em' }}>
          Built for Scale, Trust, and Reliability
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.55 }}
            whileHover={{ y: -6, borderColor: 'rgba(191,219,254,0.8)', background: 'linear-gradient(180deg, #FAFBFF, white)' }}
            style={{
              padding: '36px 32px', borderRadius: 28,
              background: 'white', border: '1px solid #F1F5F9',
              boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
              transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)', cursor: 'default',
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 16, marginBottom: 22,
              background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(37,99,235,0.12)',
            }}>
              <f.icon size={24} style={{ color: '#2563EB' }} />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', marginBottom: 10, letterSpacing: '-0.01em' }}>{f.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#64748B' }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
