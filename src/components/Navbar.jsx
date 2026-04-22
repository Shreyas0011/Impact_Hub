import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Opportunities', href: '#opportunities' },
  { name: 'Verified NGOs', href: '#ngos' },
  { name: 'Companies', href: '#companies' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '14px 32px', display: 'flex', justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{
          pointerEvents: 'all',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', maxWidth: '1320px',
          height: '72px',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          border: `1px solid ${scrolled ? 'rgba(226,232,240,0.8)' : 'rgba(226,232,240,0.5)'}`,
          borderRadius: '999px',
          padding: '0 10px 0 12px',
          boxShadow: scrolled
            ? '0 8px 40px rgba(15,23,42,0.09), 0 1px 0 rgba(255,255,255,0.5) inset'
            : '0 2px 20px rgba(15,23,42,0.05)',
          transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, padding: '4px 4px 4px 8px' }}>
          <img
            src="/logo.png"
            alt="Impact Hub"
            style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="ih-desktop-nav" style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '13.5px',
                fontWeight: hoveredLink === link.name ? 700 : 500,
                color: hoveredLink === link.name ? '#1B4FD8' : '#475569',
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: '999px',
                background: hoveredLink === link.name ? 'rgba(239,246,255,0.8)' : 'transparent',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <button style={{
            fontSize: '13.5px', fontWeight: 600, color: '#475569',
            padding: '10px 18px', border: 'none', background: 'none', cursor: 'pointer',
            borderRadius: 999, transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1B4FD8'; e.currentTarget.style.background = 'rgba(239,246,255,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'none'; }}
          >
            Login
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 60%, #3B82F6 100%)',
              color: 'white', fontWeight: 700, fontSize: '13.5px',
              padding: '12px 26px', borderRadius: '999px',
              border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(37,99,235,0.35), 0 1px 0 rgba(255,255,255,0.2) inset',
              letterSpacing: '-0.01em',
            }}
          >
            Get Started <ChevronRight size={14} />
          </motion.button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ih-mobile-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', padding: '8px', marginLeft: '4px', display: 'none', borderRadius: '50%' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: 'absolute', top: '96px', left: '24px', right: '24px', pointerEvents: 'all',
              background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(24px)',
              border: '1px solid #E2E8F0', borderRadius: '28px',
              padding: '28px', boxShadow: '0 20px 60px rgba(15,23,42,0.15)',
            }}
          >
            {NAV_LINKS.map(l => (
              <a key={l.name} href={l.href} onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '14px 16px', fontSize: '15px', fontWeight: 600,
                  color: '#334155', textDecoration: 'none', textAlign: 'center',
                  borderRadius: 12, marginBottom: 4,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F0F7FF'; e.currentTarget.style.color = '#1B4FD8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#334155'; }}
              >
                {l.name}
              </a>
            ))}
            <div style={{ height: 1, background: '#F1F5F9', margin: '12px 0 20px' }} />
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              style={{
                width: '100%', padding: '16px', borderRadius: '16px',
                background: 'linear-gradient(135deg, #1B4FD8, #2563EB)',
                color: 'white', fontWeight: 700, fontSize: '15px',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
              }}>
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) { .ih-mobile-btn { display: none !important; } }
        @media (max-width: 1023px) { .ih-desktop-nav { display: none !important; } .ih-mobile-btn { display: flex !important; } }
      `}</style>
    </header>
  );
};

export default Navbar;
