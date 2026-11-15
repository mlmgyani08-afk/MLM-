import { Reveal } from './Reveal';
import { WHY_PILLARS } from '../data/studio';

export function WhyStudioSection() {
  return (
    <section
      id="why-us"
      className="scroll-mt-16 py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Editorial Heading Column */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
              Why MLM STUDIO
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] tracking-[-0.01em] text-[#F5F2EB] text-balance">
              Crafted with discipline, clarity, and care.
            </h2>
            <p className="mt-5 text-[15px] sm:text-base leading-[1.7] text-[#B3ADA0] max-w-md">
              Great digital presence comes from restraint and execution—prioritizing
              timeless structure, legibility, and thoughtful detail over fleeting visual
              noise.
            </p>
          </Reveal>

          {/* Five Core Pillars Architectural List */}
          <div className="lg:col-span-7 border-t border-white/[0.08]">
            {WHY_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.index} delay={idx * 0.05}>
                <div className="py-7 sm:py-8 border-b border-white/[0.08] grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="sm:col-span-2">
                    <span className="font-display text-xl tabular-nums text-[#D4AF37]">
                      {pillar.index}.
                    </span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-2xl sm:text-[1.65rem] font-medium text-[#F5F2EB]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.68] text-[#B3ADA0]">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
