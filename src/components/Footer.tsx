import { STUDIO_INFO } from '../data/studio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#D4AF37]/15 bg-[#060608] py-14 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.07]">
          <div>
            <p className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.14em] text-[#F5F2EB]">
              {STUDIO_INFO.brand}
            </p>
            <p className="mt-2 font-display italic text-lg text-[#EBD183]">
              &ldquo;{STUDIO_INFO.tagline}&rdquo;
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs tracking-[0.14em] uppercase text-[#B3ADA0]"
          >
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="hover:text-[#EBD183] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8F897D]">
          <p>
            © {currentYear} {STUDIO_INFO.brand}. Founded by {STUDIO_INFO.founder} ·{' '}
            {STUDIO_INFO.location}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="hover:text-[#F5F2EB] transition-colors"
            >
              Email
            </a>
            <span aria-hidden="true" className="text-[#D4AF37]/40">
              ·
            </span>
            <a
              href={STUDIO_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F2EB] transition-colors"
            >
              WhatsApp
            </a>
            <span aria-hidden="true" className="text-[#D4AF37]/40">
              ·
            </span>
            <a
              href={STUDIO_INFO.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F2EB] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
