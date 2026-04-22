import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const BLUE = '#2563EB';
const DARK = '#0F172A';
const MUTED = '#64748B';

const COLS = [
  { title: 'Platform', links: ['About', 'How It Works', 'Pricing', 'Contact'] },
  { title: 'Stakeholders', links: ['Companies', 'NGOs', 'Foundations', 'Partners'] },
  { title: 'Resources', links: ['CSR Guidelines', 'Blog', 'FAQs', 'Support'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms'] },
];

const Footer = () => (
  <footer style={{ background: '#F8FAFC', borderTop: '1px solid #F1F5F9' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '80px 48px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>

        {/* Brand Column */}
        <div>
          {/* Logo */}
          <div style={{ marginBottom: 20 }}>
            <img src="/logo.png" alt="Impact Hub" style={{ height: 56, width: 'auto', objectFit: 'contain', display: 'block' }} />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: MUTED, marginBottom: 28, maxWidth: 280 }}>
            The premier networking platform for CSR budgets and verified social impact projects.
          </p>
          {/* Compliance badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 999, marginBottom: 28,
            background: '#EFF6FF', border: '1px solid rgba(191,219,254,0.6)',
            fontSize: 10, fontWeight: 700, color: BLUE, letterSpacing: '0.08em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE }} />
            MCA Schedule VII Compliant
          </div>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#"
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'white', border: '1px solid #E2E8F0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: MUTED, textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = BLUE; e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.background = '#EFF6FF'; }}
                onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'white'; }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav Cols */}
        {COLS.map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 11, fontWeight: 800, color: DARK, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 20 }}>{col.title}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {col.links.map(link => (
                <a key={link} href="#"
                  style={{ fontSize: 14, color: MUTED, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = BLUE}
                  onMouseLeave={e => e.currentTarget.style.color = MUTED}
                >{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div style={{
        paddingTop: 28, borderTop: '1px solid #F1F5F9',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <p style={{ fontSize: 13, color: '#94A3B8' }}>© 2026 Impact Hub. Collaborate. Amplify. Transform.</p>
        <p style={{ fontSize: 13, color: '#94A3B8' }}>Powered by Trust & Transparency</p>
      </div>
    </div>
  </footer>
);

export default Footer;
