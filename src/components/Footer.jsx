import React from 'react';
import { Globe, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';

const PLATFORM  = ['Browse Opportunities','For Corporations','For Foundations','CSR Reports','Pricing'];
const COMPANY   = ['About Us','Our Mission','Team','Newsroom','Contact'];
const RESOURCES = ['CSR Policy Guide','SDG Alignment','Help Center','Privacy Policy','Terms of Service'];

const Footer = () => (
  <footer style={{ background: '#0F172A' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 48px 36px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '48px', paddingBottom: '52px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 34, height: 34, borderRadius: '10px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' }}>
              <img src="/logo.png" alt="Impact Hub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ fontSize: '14px', fontWeight: 900, color: 'white', letterSpacing: '0.1em' }}>IMPACT HUB</span>
          </div>
          <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7 }}>
            India's leading CSR connect platform — building bridges between corporate intent and grassroots impact.
          </p>
          {/* Compliance badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', borderRadius: '999px', padding: '5px 12px', width: 'fit-content' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#60A5FA', display: 'inline-block' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.08em' }}>MCA Schedule VII Compliant</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[<Twitter size={15}/>, <Linkedin size={15}/>, <Github size={15}/>, <Globe size={15}/>].map((icon, i) => (
              <a key={i} href="#" style={{ width: 32, height: 32, borderRadius: '9px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', textDecoration: 'none' }}>{icon}</a>
            ))}
          </div>
        </div>

        <Col title="Platform"   links={PLATFORM}  />
        <Col title="Company"    links={COMPANY}   />
        <Col title="Resources"  links={RESOURCES} />
      </div>

      <div style={{ paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontSize: '12px', color: '#475569' }}>© 2024 Impact Hub Global Pvt. Ltd. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#475569', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Back to top
          <div style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowUp size={12} />
          </div>
        </button>
      </div>
    </div>
  </footer>
);

const Col = ({ title, links }) => (
  <div>
    <h4 style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '20px' }}>{title}</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
      {links.map(l => (
        <a key={l} href="#" style={{ fontSize: '13px', color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
      ))}
    </div>
  </div>
);

export default Footer;
