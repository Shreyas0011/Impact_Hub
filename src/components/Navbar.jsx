import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = ['Home', 'About', 'Opportunities', 'Foundations', 'Resources', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: isScrolled ? '10px 24px' : '18px 24px',
      transition: 'padding 0.4s ease',
      display: 'flex', justifyContent: 'center',
    }}>
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'relative', width: '100%', maxWidth: '1200px', height: '66px',
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(20px)',
          border: isScrolled ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
          borderRadius: '22px', padding: '0 8px 0 16px',
          boxShadow: isScrolled
            ? '0 8px 32px rgba(37,99,235,0.10)'
            : '0 2px 16px rgba(15,23,42,0.06)',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: '11px', background: 'white', border: '1px solid #E2E8F0', overflow: 'hidden', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <img src="/logo.png" alt="Impact Hub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
            <span style={{ fontSize: '14px', fontWeight: 900, color: '#0F172A', letterSpacing: '0.1em' }}>IMPACT HUB</span>
            <span style={{ fontSize: '9px', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CSR &amp; Foundations Connect</span>
          </div>
        </div>

        {/* Center nav */}
        <nav style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '26px',
        }} className="hidden lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a key={link} href="#" style={{
              fontSize: '13px', fontWeight: i === 0 ? 700 : 500,
              color: i === 0 ? '#2563EB' : '#64748B',
              textDecoration: 'none',
              borderBottom: i === 0 ? '2px solid #2563EB' : '2px solid transparent',
              paddingBottom: '2px',
              transition: 'color 0.2s',
            }}>
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <a href="#" style={{ fontSize: '13px', fontWeight: 500, color: '#64748B', textDecoration: 'none', padding: '8px 12px' }}>
            Login
          </a>
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
              color: 'white', fontWeight: 700, fontSize: '13.5px',
              padding: '11px 22px', borderRadius: '12px',
              border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(37,99,235,0.38)',
              letterSpacing: '0.01em', whiteSpace: 'nowrap',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.38)'; }}
          >
            Get Started <ChevronRight size={14} />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', padding: '6px', marginLeft: '4px' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{
              position: 'absolute', top: '82px', left: '24px', right: '24px',
              background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px',
              padding: '28px', boxShadow: '0 20px 60px rgba(15,23,42,0.12)',
            }}
            className="lg:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
              {NAV_LINKS.map(link => (
                <a key={link} href="#" style={{ fontSize: '16px', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>{link}</a>
              ))}
              <hr style={{ borderColor: '#E2E8F0' }} />
              <a href="#" style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', textDecoration: 'none' }}>Login →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
