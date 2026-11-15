import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { MonogramHeroVisual } from './MonogramHeroVisual';
import { STUDIO_INFO } from '../data/studio';

interface HeroSectionProps {
  onExploreWork: () => void;
  onLetsTalk: () => void;
}

export function HeroSection({ onExploreWork, onLetsTalk }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Subtle top warm radial ambient illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] studio-ambient-glow"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Split-screen hero: text column + matching-height visual stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial studio metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#EBD183]/90 mb-6">
              <span>{STUDIO_INFO.brand}</span>
              <span aria-hidden="true" className="text-[#D4AF37]/45">
                ·
              </span>
              <span className="text-[#B3ADA0]">Independent Web Studio</span>
              <span aria-hidden="true" className="text-[#D4AF37]/45">
                ·
              </span>
              <span className="text-[#B3ADA0]">{STUDIO_INFO.location}</span>
            </div>

            <h1 className="font-display font-medium tracking-[-0.015em] leading-[1.06] text-[#F5F2EB] text-[clamp(2.25rem,3.8vw,3.75rem)] text-balance max-w-3xl">
              WE DON&apos;T JUST BUILD WEBSITES.{' '}
              <span className="text-[#EBD183]">WE CRAFT DIGITAL EXPERIENCES.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-[1.65] text-[#B3ADA0] max-w-xl">
              Turning ideas into elegant, powerful and meaningful digital experiences.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#08080A] bg-[#D4AF37] hover:bg-[#EBD183] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD183] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
              >
                <span>Explore Our Work</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onLetsTalk}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F2EB] bg-transparent border border-[#D4AF37]/45 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Animated MLM Monogram Visual Centerpiece */}
          <div className="lg:col-span-5 flex">
            <MonogramHeroVisual />
          </div>
        </div>

        {/* Full-width Studio Specification Strip below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <p className="text-xs tracking-[0.16em] uppercase text-[#B3ADA0]">
              Founder &amp; Lead Developer
            </p>
            <p className="mt-1.5 font-display text-xl text-[#F5F2EB]">
              {STUDIO_INFO.founder}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] uppercase text-[#B3ADA0]">
              Core Craft
            </p>
            <p className="mt-1.5 font-display text-xl text-[#F5F2EB]">
              HTML, CSS &amp; JavaScript
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] uppercase text-[#B3ADA0]">
              Commission Status
            </p>
            <p className="mt-1.5 font-display text-xl text-[#EBD183]">
              Open for Founding Collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
