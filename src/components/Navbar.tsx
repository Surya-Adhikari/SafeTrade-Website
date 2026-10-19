import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Team', href: '#team' },
  { label: 'Dashboard', href: '#dashboard' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 border-b border-[#E0E6ED] bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-[0_10px_28px_rgba(23,43,77,0.08)]' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center shrink-0"
            aria-label="SafeTrade Home"
          >
            <img
              src="/Team/safetrade-logo.png.jpeg"
              alt="SafeTrade logo"
              className="h-11 w-auto md:h-14 object-contain"
            />
          </a>

          <div className="hidden flex-1 items-center justify-center gap-2 px-4 lg:flex xl:gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="whitespace-nowrap px-2 py-2 text-sm font-medium text-[#526176] transition-colors hover:text-[#2457A7]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#features"
              onClick={(e) => { e.preventDefault(); handleNavClick('#features'); }}
              className="hidden items-center justify-center rounded-xl bg-[#2457A7] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(36,87,167,0.22)] transition-all duration-200 hover:-translate-y-0.5 sm:inline-flex"
            >
              Explore System
            </a>
            <button
              className="rounded-lg p-2 text-[#172B4D] transition-colors hover:bg-[#F3F5F7] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E0E6ED] bg-white shadow-[0_18px_36px_rgba(23,43,77,0.08)] lg:hidden">
          <div className="mx-auto w-full max-w-7xl space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#526176] transition-colors hover:bg-[#F7F9FC] hover:text-[#2457A7]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#features"
              onClick={(e) => { e.preventDefault(); handleNavClick('#features'); }}
              className="mt-2 block rounded-lg bg-[#2457A7] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Explore System
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
