import { useState } from 'react';
import { Reveal } from './Reveal';
import { STUDIO_INFO } from '../data/studio';
import atelierWorkspaceWebp from '../assets/images/atelier_workspace_editorial_1794682179723.webp';
import atelierWorkspaceImg from '../assets/images/atelier_workspace_editorial_1794682179723.jpg';

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-16 py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Studio Photography */}
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-white/[0.08] bg-[#101014]">
              {!imgError ? (
                <picture className="block w-full h-full">
                  <source srcSet={atelierWorkspaceWebp} type="image/webp" />
                  <img
                    src={atelierWorkspaceImg}
                    width={1376}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    alt="Minimalist matte black stone and walnut creative studio workspace illuminated by warm brass lamp"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              ) : (
                <div
                  aria-hidden="true"
                  className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.14),#0E0E12_75%)] flex items-center justify-center"
                >
                  <span className="font-display text-3xl tracking-[0.2em] text-[#D4AF37]/60">
                    MLM STUDIO
                  </span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-xs text-[#F5F2EB]/90">
                <span className="tracking-[0.16em] uppercase text-[#EBD183]">
                  The Studio
                </span>
                <span className="text-[#B3ADA0]">
                  Independent Practice · {STUDIO_INFO.location}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Studio Narrative */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
              About MLM STUDIO
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] tracking-[-0.01em] text-[#F5F2EB] text-balance">
              Thoughtful digital craftsmanship built from first principles.
            </h2>

            <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-[1.7] text-[#B3ADA0]">
              <p>
                <strong className="font-medium text-[#F5F2EB]">MLM STUDIO</strong> is
                an independent creative web development studio founded by{' '}
                <strong className="font-medium text-[#F5F2EB]">
                  {STUDIO_INFO.founder}
                </strong>{' '}
                in India. We partner with ambitious individuals, emerging brands, and
                businesses seeking an unmistakable digital presence.
              </p>
              <p>
                Every project is approached with editorial restraint and technical
                discipline—combining balanced typography, intentional whitespace, and
                clean front-end engineering so your website feels effortless,
                trustworthy, and genuinely distinctive.
              </p>
            </div>

            {/* Unboxed Founder Metadata Bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs tracking-wide text-[#B3ADA0]">
              <span>
                Founder:{' '}
                <span className="text-[#F5F2EB] font-medium">
                  {STUDIO_INFO.founder}
                </span>
              </span>
              <span aria-hidden="true" className="text-[#D4AF37]/50">
                ·
              </span>
              <span>
                Based in:{' '}
                <span className="text-[#F5F2EB] font-medium">
                  {STUDIO_INFO.location}
                </span>
              </span>
              <span aria-hidden="true" className="text-[#D4AF37]/50">
                ·
              </span>
              <span>
                Pricing:{' '}
                <span className="text-[#EBD183] font-medium">
                  {STUDIO_INFO.pricingNote}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
