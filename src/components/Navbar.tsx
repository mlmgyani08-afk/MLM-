import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studio';

interface NavbarProps {
  onNavigateContact: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onNavigateContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#08080A]/90 backdrop-blur-md border-b border-[#D4AF37]/15'
          : 'bg-[#08080A]/60 backdrop-blur-sm border-b border-white/[0.06]'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-xl sm:text-2xl font-semibold tracking-[0.14em] text-[#F5F2EB] hover:text-[#EBD183] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          {STUDIO_INFO.brand}
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="group relative py-1 text-sm font-medium tracking-wide text-[#B3ADA0] hover:text-[#F5F2EB] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onNavigateContact();
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#08080A] bg-[#D4AF37] hover:bg-[#EBD183] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD183] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
          >
            Let&apos;s Talk
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5F2EB] border border-white/10 hover:border-[#D4AF37]/40 rounded-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/15 bg-[#0A0A0D]/98 backdrop-blur-lg px-6 py-6">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="py-3 px-2 text-base font-medium text-[#F5F2EB] hover:text-[#D4AF37] border-b border-white/[0.06] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigateContact();
              }}
              className="mt-4 w-full py-3.5 px-5 text-xs font-semibold tracking-[0.14em] uppercase text-[#08080A] bg-[#D4AF37] hover:bg-[#EBD183] rounded-sm transition-colors duration-200 cursor-pointer"
            >
              Let&apos;s Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
