import React from 'react';
import { motion } from 'framer-motion';
import { Users, Compass, IndianRupee, Rocket, ArrowRight } from 'lucide-react';

const STATS = [
  { label: 'Companies', count: '___+', icon: Users },
  { label: 'Verified NGOs', count: '___+', icon: Compass },
  { label: 'CSR Funds Listed', count: '₹___+', icon: IndianRupee },
  { label: 'Projects Enabled', count: '___+', icon: Rocket },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
});

const Hero = () => (
  <section style={{ background: '#FFFFFF', paddingTop: '132px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
    {/* Mesh gradient background */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'radial-gradient(ellipse 70% 60% at 80% 0%, rgba(219,234,254,0.5) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(239,246,255,0.5) 0%, transparent 70%)',
    }} />
    {/* Dot grid */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.35,
      backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
      backgroundSize: '28px 28px',
    }} />

    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '72px', flexWrap: 'wrap' }}>

        {/* Left */}
        <div style={{ flex: '1 1 520px', minWidth: 300 }}>
          <motion.div {...fadeUp(0)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 18px',
            borderRadius: 999, marginBottom: 32,
            background: 'linear-gradient(135deg, rgba(219,234,254,0.7), rgba(239,246,255,0.9))',
            border: '1px solid rgba(191,219,254,0.6)',
            fontSize: 11, fontWeight: 700, color: '#1B4FD8',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            boxShadow: '0 1px 8px rgba(37,99,235,0.08)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB', display: 'inline-block', boxShadow: '0 0 0 3px rgba(37,99,235,0.2)' }} />
            Next-Gen CSR Networking Platform
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontSize: 'clamp(42px, 5.5vw, 76px)', fontWeight: 900, color: '#0F172A',
            lineHeight: 1.05, letterSpacing: '-0.035em', marginBottom: 24,
          }}>
            Where CSR<br />
            <span style={{
              background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              & Foundations
            </span>{' '}Connect
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            fontSize: 18, lineHeight: 1.75, color: '#475569', marginBottom: 44, maxWidth: 520,
            fontWeight: 400,
          }}>
            Helping companies deploy CSR funds transparently while enabling verified NGOs to create measurable social impact.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '17px 36px', borderRadius: 18, border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 60%, #3B82F6 100%)',
                color: 'white', fontWeight: 700, fontSize: 15.5, letterSpacing: '-0.01em',
                boxShadow: '0 8px 32px rgba(37,99,235,0.35), 0 1px 0 rgba(255,255,255,0.2) inset',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              Explore Opportunities <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '17px 36px', borderRadius: 18, border: '1.5px solid #E2E8F0', cursor: 'pointer',
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)',
                color: '#0F172A', fontWeight: 700, fontSize: 15.5,
                boxShadow: '0 2px 12px rgba(15,23,42,0.06)',
                transition: 'all 0.25s',
              }}
            >
              Register NGO
            </motion.button>
          </motion.div>

          {/* Trust line */}
          <motion.div {...fadeUp(0.45)} style={{
            marginTop: 44, display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{ display: 'flex' }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: '50%', border: '2.5px solid white',
                  background: `hsl(${210 + i * 15}, 70%, ${60 + i * 5}%)`,
                  marginLeft: i === 0 ? 0 : -10, zIndex: 4 - i, position: 'relative',
                }} />
              ))}
            </div>
            <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.5 }}>
              Trusted by <span style={{ fontWeight: 800, color: '#0F172A' }}>240+</span> leading companies & foundations
            </p>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          style={{ flex: '1 1 420px', minWidth: 300, maxWidth: 560, position: 'relative' }}
        >
          {/* Decorative ring */}
          <div style={{
            position: 'absolute', inset: -16,
            borderRadius: 72, border: '1px dashed rgba(37,99,235,0.18)',
            animation: 'spin-slow 40s linear infinite',
          }} />
          {/* Gradient background shape */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 56,
            background: 'linear-gradient(135deg, rgba(219,234,254,0.8), rgba(239,246,255,0.6))',
            transform: 'rotate(3deg) scale(1.04)',
            border: '1px solid rgba(191,219,254,0.4)',
          }} />
          {/* Main image card */}
          <div style={{
            position: 'relative', borderRadius: 52,
            overflow: 'hidden', border: '1px solid rgba(226,232,240,0.7)',
            boxShadow: '0 32px 80px rgba(15,23,42,0.12), 0 8px 24px rgba(37,99,235,0.08)',
            aspectRatio: '1 / 1',
          }}>
            <img src="/hero.png" alt="Impact Collaboration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* Gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.04) 100%)' }} />
          </div>
          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '12%', right: '-8%',
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(226,232,240,0.8)', borderRadius: 18,
              padding: '14px 20px', boxShadow: '0 16px 40px rgba(15,23,42,0.12)',
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 13, fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }} />
            Verified NGO Network
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            style={{
              position: 'absolute', bottom: '14%', left: '-8%',
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(226,232,240,0.8)', borderRadius: 18,
              padding: '14px 20px', boxShadow: '0 16px 40px rgba(15,23,42,0.12)',
              fontSize: 13, fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap',
            }}
          >
            <span style={{ color: '#2563EB', fontSize: 18 }}>₹</span> CSR Funds Matched
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        style={{
          marginTop: 88,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: 'linear-gradient(135deg, rgba(248,250,255,0.9), rgba(239,246,255,0.8))',
          borderRadius: 32, border: '1px solid rgba(226,232,240,0.7)',
          padding: '40px 0',
          boxShadow: '0 4px 24px rgba(15,23,42,0.04)',
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
            style={{ textAlign: 'center', padding: '0 32px', borderRight: i < 3 ? '1px solid rgba(226,232,240,0.7)' : 'none' }}
          >
            <stat.icon size={24} style={{ color: '#2563EB', marginBottom: 12, opacity: 0.7 }} />
            <div style={{
              fontSize: 38, fontWeight: 900, color: '#0F172A',
              letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8,
            }}>{stat.count}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.13em' }}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
