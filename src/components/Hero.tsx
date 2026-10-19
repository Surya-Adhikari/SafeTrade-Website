import React from 'react';
import { Shield, ChevronDown, Wifi } from 'lucide-react';

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const HelmetIllustration: React.FC = () => (
  <div className="mx-auto w-full max-w-[680px] select-none" aria-label="SafeTrade smart welding helmet illustration">
    <div className="rounded-[30px] border border-[#DCE5F0] bg-white p-4 shadow-[0_18px_42px_rgba(23,43,77,0.08)] sm:p-5 lg:p-6">
      <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-[0_18px_28px_rgba(36,87,167,0.12)]">
        <defs>
          <linearGradient id="shellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2F3E5C" />
            <stop offset="50%" stopColor="#203453" />
            <stop offset="100%" stopColor="#162A46" />
          </linearGradient>
          <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CFE3FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#DCE9F8" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="ledGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F58220" />
            <stop offset="100%" stopColor="#2457A7" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>

        <path d="M 60 160 Q 55 80 160 55 Q 265 80 260 160 L 250 190 Q 200 220 160 222 Q 120 220 70 190 Z" fill="url(#shellGrad)" stroke="#2D405F" strokeWidth="1.5" />
        <path d="M 90 120 Q 100 75 160 65 Q 210 72 225 110" fill="none" stroke="rgba(36,87,167,0.18)" strokeWidth="2" strokeLinecap="round" />
        <rect x="75" y="148" width="170" height="52" rx="8" fill="url(#visorGrad)" stroke="#AFC7ED" strokeWidth="1.5" />
        <rect x="75" y="165" width="170" height="2" fill="#F58220" opacity="0.20" rx="1" />
        <rect x="75" y="180" width="170" height="1" fill="#2457A7" opacity="0.18" rx="1" />
        <rect x="45" y="130" width="22" height="32" rx="4" fill="#DDE8F6" stroke="#B8CDEB" strokeWidth="1" />
        <rect x="48" y="133" width="16" height="10" rx="2" fill="#EAF2FF" />
        <circle cx="56" cy="151" r="2.5" fill="#15966A" opacity="0.95" filter="url(#glow)" />
        <circle cx="56" cy="158" r="2" fill="#F58220" opacity="0.7" />
        <rect x="253" y="130" width="22" height="32" rx="4" fill="#DDE8F6" stroke="#B8CDEB" strokeWidth="1" />
        <rect x="256" y="133" width="16" height="10" rx="2" fill="#EAF2FF" />
        <circle cx="264" cy="151" r="2.5" fill="#F58220" opacity="0.9" filter="url(#glow)" />
        <circle cx="264" cy="158" r="2" fill="#2457A7" opacity="0.7" />
        <rect x="138" y="56" width="44" height="18" rx="4" fill="#E9F1FB" stroke="#B8CDEB" strokeWidth="1" />
        <circle cx="150" cy="65" r="3" fill="#F58220" opacity="0.8" filter="url(#glow)" />
        <circle cx="160" cy="65" r="3" fill="#15966A" opacity="0.8" filter="url(#glow)" />
        <circle cx="170" cy="65" r="3" fill="#2457A7" opacity="0.8" filter="url(#glow)" />
        <rect x="78" y="146" width="164" height="4" rx="2" fill="url(#ledGrad)" opacity="0.7" filter="url(#glow)" />
        <path d="M 70 190 Q 60 210 80 225 L 160 232 L 240 225 Q 260 210 250 190" fill="#EDF3FA" stroke="#BED0EC" strokeWidth="1.5" />
        <rect x="145" y="225" width="30" height="8" rx="3" fill="#E2EBF8" stroke="#C5D8F0" strokeWidth="1" />
        <g transform="translate(140, 96)">
          <path d="M 0 16 Q 10 5 20 16" fill="none" stroke="#15966A" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <path d="M -6 22 Q 10 2 26 22" fill="none" stroke="#15966A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <circle cx="10" cy="18" r="2.5" fill="#15966A" opacity="1" filter="url(#glow)" />
        </g>
        <text x="100" y="178" fontFamily="monospace" fontSize="7" fill="#526176" letterSpacing="1">SafeTrade</text>
        <text x="102" y="188" fontFamily="monospace" fontSize="5" fill="#75829A" letterSpacing="0.5">ST-SERIES</text>
        <rect x="205" y="174" width="28" height="10" rx="2" fill="#EAF2FF" stroke="#CADDF5" strokeWidth="1" />
        <rect x="233" y="177" width="3" height="4" rx="1" fill="#C0D3EA" />
        <rect x="207" y="176" width="18" height="6" rx="1" fill="#15966A" opacity="0.8" />
        <circle cx="160" cy="105" r="15" fill="none" stroke="#B9CDEB" strokeWidth="1" strokeDasharray="3,3" />
        <circle cx="160" cy="105" r="8" fill="none" stroke="#B9CDEB" strokeWidth="0.5" />
        <circle cx="160" cy="105" r="3" fill="#F58220" opacity="0.7" filter="url(#glow)" />
      </svg>
    </div>

    <div className="mt-4 grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-[#D9F1E9] bg-[#F3FBF8] px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#15966A] animate-pulse" />
          <span className="font-mono text-[11px] font-medium text-[#15966A]">PM2.5 Active</span>
        </div>
      </div>
      <div className="rounded-xl border border-[#FDE7D4] bg-[#FFF7F0] px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#F58220] animate-pulse" />
          <span className="font-mono text-[11px] font-medium text-[#D86A00]">UV/IR Sensor</span>
        </div>
      </div>
      <div className="rounded-xl border border-[#DDEBFF] bg-[#F0F6FF] px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#2457A7] animate-pulse" />
          <span className="font-mono text-[11px] font-medium text-[#2457A7]">ESP32-S3</span>
        </div>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative border-b border-[#E0E6ED] bg-[#F3F5F7]">
      <div className="absolute inset-0 opacity-70" style={{
        backgroundImage: 'linear-gradient(rgba(36,87,167,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(36,87,167,0.05) 1px, transparent 1px)',
        backgroundSize: '56px 56px'
      }} />

      <div className="absolute left-1/4 top-12 h-72 w-72 rounded-full bg-[#D9EBFF]/60 blur-3xl" />
      <div className="absolute right-12 top-24 h-80 w-80 rounded-full bg-[#FFE9D5]/80 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 lg:pr-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E5FF] bg-[#EDF4FF] px-3 py-1.5 text-[#2457A7] shadow-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-[#F58220] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                Team Abacus · Smart India Hackathon 2026
              </span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D7E5FF] bg-white shadow-sm">
                <img
                  src="/Team/safetrade-logo.png.jpeg"
                  alt="SafeTrade blue helmet logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>

            <h1 className="max-w-[620px] text-4xl font-extrabold leading-[1.02] text-[#172B4D] sm:text-5xl lg:text-[3.3rem] xl:text-[4rem]">
              Smarter Safety for Every{' '}
              <span className="bg-gradient-to-r from-[#2457A7] via-[#3A6FC7] to-[#F58220] bg-clip-text text-transparent">
                Welding Workshop
              </span>
            </h1>

            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-[#F58220]" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F58220]">
                SafeTrade — Smart Connected Safety Helmet for Welding Trades
              </p>
            </div>

            <p className="max-w-xl text-base leading-7 text-[#526176] sm:text-lg">
              SafeTrade is a <strong className="text-[#172B4D]">proposed smart safety helmet</strong> designed to improve hazard awareness in welding environments. It combines multiple sensors, an ESP32-S3 controller, local warning mechanisms, and a connected monitoring dashboard to support worker awareness and workshop safety monitoring.
            </p>

            <div className="inline-flex items-center gap-2 rounded-lg border border-[#D7E5FF] bg-[#F2F7FF] px-3 py-1.5 text-xs font-medium text-[#2457A7]">
              <Wifi size={12} className="text-[#2457A7]" />
              Connected Safety Concept · Proposed System
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#features" onClick={(e) => { e.preventDefault(); handleNav('#features'); }} className="btn-primary">
                <Shield size={16} />
                Explore Features
              </a>
              <a href="#dashboard" onClick={(e) => { e.preventDefault(); handleNav('#dashboard'); }} className="btn-secondary">
                View Dashboard
              </a>
            </div>

            <p className="pt-2 font-mono text-sm uppercase tracking-[0.2em] text-[#75829A]">
              Sense. Alert. Protect.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="absolute -left-3 top-12 z-10 rounded-2xl border border-[#D7E5FF] bg-white/90 p-3 shadow-[0_14px_30px_rgba(36,87,167,0.08)] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#15966A] animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#526176]">Live Signal</span>
                </div>
                <p className="mt-2 text-lg font-bold text-[#172B4D]">PM2.5: 38.4</p>
              </div>

              <div className="absolute -right-2 bottom-8 z-10 rounded-2xl border border-[#F9D9B6] bg-white/90 p-3 shadow-[0_14px_30px_rgba(245,130,32,0.09)] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F58220] animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D86A00]">Alert</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#D86A00]">Heat + UV elevated</p>
              </div>

              <HelmetIllustration />
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button onClick={() => handleNav('#about')} className="group flex flex-col items-center gap-1.5 text-[#75829A] transition-colors hover:text-[#2457A7]" aria-label="Scroll to About section">
            <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
