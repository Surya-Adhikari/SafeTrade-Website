import React from 'react';

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Team', href: '#team' },
  { label: 'Dashboard', href: '#dashboard' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E0E6ED] bg-white py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/Team/safetrade-logo.png.jpeg"
                alt="SafeTrade blue helmet logo"
                className="h-20 w-auto max-w-[320px] rounded-xl object-contain"
              />
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#526176]">
              Smart Connected Safety Helmet for Welding Trades. A proposed safety-awareness system by Team Abacus.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#75829A]">
              Sense. Alert. Protect.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-[#F58220]" />
              <span className="text-xs text-[#75829A]">Team Abacus · Smart India Hackathon 2026</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#75829A]">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleNav(link.href); }} className="text-sm text-[#526176] transition-colors hover:text-[#2457A7]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#75829A]">Project Info</h3>
            <ul className="space-y-2 text-sm text-[#526176]">
              <li>Team Abacus</li>
              <li>Smart India Hackathon 2026</li>
              <li>SafeTrade Project</li>
              <li className="mt-4 border-t border-[#E0E6ED] pt-4">
                <span className="text-xs text-[#75829A]">Status: Proposed Concept</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E0E6ED] pt-8">
          <div className="mb-6 rounded-2xl border border-[#F9D9B6] bg-[#FFF8F2] p-4 shadow-sm">
            <p className="text-center text-xs leading-6 text-[#526176]">
              <strong className="text-[#172B4D]">Disclaimer:</strong> SafeTrade is a proposed safety-awareness system and does not replace certified PPE, appropriate welding procedures, ventilation, or established safety controls. Dashboard values shown are simulated demonstration data and are not connected to real hardware.
            </p>
          </div>
          <p className="text-center text-xs text-[#75829A]">
            © 2026 Team Abacus · SafeTrade · Smart India Hackathon 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
