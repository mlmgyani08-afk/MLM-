import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SERVICES, TECHNOLOGIES } from '../data/studio';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="scroll-mt-16 py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                Capabilities &amp; Craft
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] tracking-[-0.01em] text-[#F5F2EB] text-balance">
                Focused web development tailored for modern brands.
              </h2>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#B3ADA0] max-w-md">
              We focus on four core web disciplines—executed with precision from initial
              wireframe to final deployment.
            </p>
          </div>
        </Reveal>

        {/* 2x2 Single-Elevation Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.06}>
              <article className="group relative h-full p-7 sm:p-9 rounded-sm bg-[#101014] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors duration-300 flex flex-col justify-between studio-card-glow">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-2xl tabular-nums text-[#D4AF37]">
                      {service.index}.
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      aria-label={`Inquire about ${service.title}`}
                      className="inline-flex items-center gap-1.5 text-xs tracking-[0.14em] uppercase text-[#B3ADA0] group-hover:text-[#EBD183] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm px-1 py-0.5"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <h3 className="mt-6 font-display text-2xl sm:text-[1.75rem] font-medium leading-snug text-[#F5F2EB]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.68] text-[#B3ADA0]">
                    {service.summary}
                  </p>
                </div>

                {/* Unboxed deliverable metadata */}
                <p className="mt-7 pt-5 border-t border-white/[0.06] text-xs tracking-wide text-[#8F897D]">
                  {service.deliverables}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Core Technologies Foundation */}
        <Reveal delay={0.12}>
          <div className="mt-14 pt-12 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                  Technologies
                </p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium text-[#F5F2EB]">
                  Built on pure web fundamentals.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B3ADA0]">
                  Clean, standards-compliant code ensures rapid load times, reliable
                  accessibility, and effortless maintenance.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {TECHNOLOGIES.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-6 rounded-sm bg-[#0D0D11] border border-white/[0.07]"
                  >
                    <p className="text-xs tracking-[0.16em] uppercase text-[#EBD183]">
                      {tech.role}
                    </p>
                    <h4 className="mt-2 font-display text-2xl font-medium text-[#F5F2EB]">
                      {tech.name}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#B3ADA0]">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
