import { ArrowRight, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';
import { COLLABORATION_TRACKS, STUDIO_INFO } from '../data/studio';

interface ProjectsSectionProps {
  onStartCollaboration: (track: string) => void;
}

export function ProjectsSection({ onStartCollaboration }: ProjectsSectionProps) {
  return (
    <section
      id="work"
      className="scroll-mt-16 py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                Selected Work &amp; Commissions
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] tracking-[-0.01em] text-[#F5F2EB] text-balance">
                A gallery awaiting its inaugural signature works.
              </h2>
            </div>
            <p className="text-xs tracking-[0.16em] uppercase text-[#B3ADA0]">
              Portfolio Status · Open for Founding Clients
            </p>
          </div>
        </Reveal>

        {/* Museum-grade Empty Portfolio & Collaboration Invitation */}
        <Reveal delay={0.08}>
          <div className="relative rounded-sm border border-[#D4AF37]/25 bg-[#0D0D11] p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Subtle corner architectural frames */}
            <span
              aria-hidden="true"
              className="absolute top-6 left-6 w-5 h-5 border-t border-l border-[#D4AF37]/40"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-[#D4AF37]/40"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs tracking-[0.2em] uppercase text-[#EBD183]">
                  Inaugural Commissions Open
                </p>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl font-medium leading-[1.15] text-[#F5F2EB] text-balance">
                  Your brand could become MLM STUDIO&apos;s first flagship showcase.
                </h3>

                <p className="mt-5 text-[15px] sm:text-base leading-[1.7] text-[#B3ADA0] max-w-2xl">
                  We believe in complete transparency—MLM STUDIO is a newly established
                  independent practice with no completed client archive published yet.
                  Rather than displaying fabricated concepts, we invite founding partners
                  to collaborate closely with {STUDIO_INFO.founder} to shape our first
                  signature digital releases with dedicated personal attention.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onStartCollaboration('Inaugural Studio Collaboration')}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#08080A] bg-[#D4AF37] hover:bg-[#EBD183] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD183] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D11]"
                  >
                    <span>Start a Collaboration</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <a
                    href={STUDIO_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F2EB] border border-white/15 hover:border-[#D4AF37]/60 hover:text-[#EBD183] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Collaboration Track Selector */}
              <div className="lg:col-span-5 pt-6 lg:pt-0 lg:pl-10 lg:border-l border-white/[0.08]">
                <p className="text-xs tracking-[0.18em] uppercase text-[#B3ADA0] mb-4">
                  Select a collaboration focus to begin
                </p>
                <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                  {COLLABORATION_TRACKS.map((track, i) => (
                    <button
                      key={track}
                      type="button"
                      onClick={() => onStartCollaboration(track)}
                      className="w-full py-3.5 px-2 flex items-center justify-between gap-4 text-left group hover:bg-white/[0.02] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs tabular-nums text-[#D4AF37]/80">
                          0{i + 1}
                        </span>
                        <span className="text-sm font-medium text-[#F5F2EB] group-hover:text-[#EBD183] transition-colors">
                          {track}
                        </span>
                      </span>
                      <ArrowRight
                        className="w-4 h-4 text-[#B3ADA0] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all shrink-0"
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
