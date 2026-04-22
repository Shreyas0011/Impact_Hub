import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Search, Link2, BarChart2, ArrowRight } from 'lucide-react';

const FEATURES = [
  { icon: Eye,      label: 'CSR Fund Tracking',     body: 'Real-time, blockchain-verified tracking of every rupee — from corporate allocation to on-ground project delivery.',                color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', tag: 'Transparency' },
  { icon: Search,   label: 'Opportunity Discovery',  body: 'Browse and filter live CSR opportunities across education, health, environment, and rural development sectors.',              color: '#0EA5E9', bg: '#F0F9FF', border: '#BAE6FD', tag: 'Discovery'    },
  { icon: Link2,    label: 'Foundation Connect',     body: 'Match your corporate ESG goals with verified NGOs and foundations vetted for compliance and impact readiness.',              color: '#6366F1', bg: '#EEF2FF', border: '#C7D2FE', tag: 'Networking'   },
  { icon: BarChart2,label: 'Impact Reporting',       body: 'Auto-generate MCA-compliant CSR reports with real-time dashboards, beneficiary data, and outcome metrics.',               color: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD', tag: 'Compliance'   },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Register Your Corporation',  body: 'Create a verified CSR account and link with your finance and compliance team in minutes.' },
  { step: '02', title: 'Discover Aligned Projects', body: 'Filter curated CSR opportunities by sector, geography, SDG goal, and budget size.'         },
  { step: '03', title: 'Connect & Deploy Funds',    body: 'Directly partner with vetted foundations and disburse funds through our secure payment rails.' },
  { step: '04', title: 'Track & Report Impact',     body: 'Get real-time dashboards and one-click MCA Schedule VII reports for board and compliance.'  },
];

const Features = () => (
  <>
    {/* ── FEATURES ── */}
    <section style={{ background: '#FFFFFF', padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '520px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563EB', display: 'block', marginBottom: '16px' }}>
              What We Offer
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#0F172A', marginBottom: '16px' }}>
              Everything You Need for<br />
              <span style={{ color: '#2563EB' }}>Effective CSR Management.</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.7 }}>
              One platform that handles the entire CSR lifecycle — from discovery to disbursement to reporting.
            </p>
          </div>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: '#2563EB', fontWeight: 600, fontSize: '14px', textDecoration: 'none', borderBottom: '2px solid #BFDBFE', paddingBottom: '3px' }}>
            See all features <ArrowRight size={15} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
          {FEATURES.map(({ icon: Icon, label, body, color, bg, border, tag }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: '#FFFFFF', border: '1px solid #F1F5F9', borderRadius: '20px',
                padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px',
                boxShadow: '0 1px 8px rgba(15,23,42,0.05)',
                transition: 'box-shadow 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.10)'; e.currentTarget.style.borderColor = '#BFDBFE'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 8px rgba(15,23,42,0.05)'; e.currentTarget.style.borderColor = '#F1F5F9'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ width: 46, height: 46, borderRadius: '13px', background: bg, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} color={color} />
                </div>
                <span style={{ fontSize: '10px', fontWeight: 700, color, background: bg, border: `1px solid ${border}`, padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.07em' }}>
                  {tag}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{label}</h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section style={{ background: '#F8FAFC', padding: '96px 0', borderTop: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563EB', display: 'block', marginBottom: '14px' }}>
            How It Works
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#0F172A' }}>
            From Registration to Real Impact<br />in 4 Simple Steps.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '24px' }}>
          {HOW_IT_WORKS.map(({ step, title, body }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: 'white', borderRadius: '20px', padding: '32px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 8px rgba(15,23,42,0.04)',
              }}
            >
              <div style={{ fontSize: '36px', fontWeight: 900, color: '#BFDBFE', marginBottom: '16px', lineHeight: 1 }}>
                {step}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Features;
