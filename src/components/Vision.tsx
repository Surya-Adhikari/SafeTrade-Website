import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative overflow-hidden border-b border-[#E0E6ED] bg-white">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'linear-gradient(rgba(36,87,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(36,87,167,0.04) 1px, transparent 1px)',
        backgroundSize: '56px 56px'
      }} />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F9D9B6]/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F9D9B6] bg-[#FFF8F2] shadow-sm">
          <Shield size={30} className="text-[#F58220]" />
        </div>

        <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#172B4D] sm:text-4xl lg:text-5xl">
          Building a More Safety-Aware{' '}
          <span className="bg-gradient-to-r from-[#2457A7] via-[#3A6FC7] to-[#F58220] bg-clip-text text-transparent">
            Welding Workshop
          </span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#526176]">
          Our goal is to support safer, more informed welding workshops by connecting hazard sensing,
          local alerts, and safety-event monitoring in one proposed system.
        </p>

        <div className="mb-10 inline-flex items-center gap-3 rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] px-6 py-3">
          <div className="h-1.5 w-1.5 rounded-full bg-[#F58220] animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#172B4D]">
            SafeTrade — <span className="text-[#F58220]">Sense. Alert. Protect.</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => handleNav('#dashboard')} className="btn-primary text-base px-8 py-4">
            View Safety Dashboard
            <ArrowRight size={18} />
          </button>
          <button onClick={() => handleNav('#features')} className="btn-ghost text-base px-8 py-4">
            Explore Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
