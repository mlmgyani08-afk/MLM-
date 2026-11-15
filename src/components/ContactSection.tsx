import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { COLLABORATION_TRACKS, STUDIO_INFO } from '../data/studio';

interface ContactSectionProps {
  selectedService: string;
  onSelectService: (service: string) => void;
}

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

export function ContactSection({
  selectedService,
  onSelectService,
}: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: selectedService || COLLABORATION_TRACKS[0],
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [prepared, setPrepared] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
      setPrepared(false);
    }
  }, [selectedService]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) {
      setError('Please enter your name so we know how to address you.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setError('Please share a brief overview of your project (at least 10 characters).');
      return;
    }

    setError(null);
    setPrepared(true);
  };

  const encodedSubject = encodeURIComponent(
    `Project Inquiry – ${form.service} (${form.name.trim()})`
  );
  const formattedBrief = `Hello Hardik,\n\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}\nService Interest: ${form.service}\n\nProject Details:\n${form.message.trim()}`;
  const mailtoHref = `mailto:${STUDIO_INFO.email}?subject=${encodedSubject}&body=${encodeURIComponent(
    formattedBrief
  )}`;
  const whatsappPreparedHref = `https://wa.me/917011285228?text=${encodeURIComponent(
    formattedBrief
  )}`;

  return (
    <section
      id="contact"
      className="scroll-mt-16 py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                Contact &amp; Inquiries
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] tracking-[-0.01em] text-[#F5F2EB] text-balance">
                Let&apos;s craft something timeless together.
              </h2>
            </div>
            <p className="text-sm font-medium tracking-wide text-[#EBD183]">
              {STUDIO_INFO.pricingNote}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Channels & Studio Details */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-sm bg-[#101014] border border-white/[0.08]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#D4AF37]">
                Direct Studio Desk
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 py-2 border-b border-white/[0.06]">
                  <span className="text-[#B3ADA0]">Founder</span>
                  <span className="font-medium text-[#F5F2EB]">
                    {STUDIO_INFO.founder}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 py-2 border-b border-white/[0.06]">
                  <span className="text-[#B3ADA0]">Location</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F2EB]">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                    {STUDIO_INFO.location}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 py-2">
                  <span className="text-[#B3ADA0]">Pricing</span>
                  <span className="font-medium text-[#EBD183]">
                    {STUDIO_INFO.pricingNote}
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable Contact Links */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 sm:p-6 rounded-sm bg-[#101014] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors duration-200 flex items-center justify-between gap-4">
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-4 min-w-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
                >
                  <span className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0]">
                      Email
                    </span>
                    <span className="block mt-0.5 text-sm sm:text-base font-medium text-[#F5F2EB] group-hover:text-[#EBD183] transition-colors truncate">
                      {STUDIO_INFO.email}
                    </span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#B3ADA0] hover:text-[#F5F2EB] border border-white/10 hover:border-[#D4AF37]/40 rounded-sm transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href={STUDIO_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-sm bg-[#101014] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors duration-200 flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                    <MessageSquare
                      className="w-4 h-4 text-[#D4AF37]"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0]">
                      WhatsApp
                    </span>
                    <span className="block mt-0.5 text-sm sm:text-base font-medium tabular-nums text-[#F5F2EB] group-hover:text-[#EBD183] transition-colors">
                      {STUDIO_INFO.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#B3ADA0] group-hover:text-[#D4AF37] shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </a>

              {/* Instagram */}
              <a
                href={STUDIO_INFO.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-sm bg-[#101014] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors duration-200 flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0]">
                      Instagram
                    </span>
                    <span className="block mt-0.5 text-sm sm:text-base font-medium text-[#F5F2EB] group-hover:text-[#EBD183] transition-colors">
                      {STUDIO_INFO.instagramHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#B3ADA0] group-hover:text-[#D4AF37] shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          {/* Right Column: Validated Project Inquiry Composer */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-sm bg-[#101014] border border-white/[0.08]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#D4AF37]">
                Project Inquiry
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-[#F5F2EB]">
                Tell us about your website vision.
              </h3>
              <p className="mt-2 text-sm text-[#B3ADA0]">
                Prepare your project brief below and send it directly to Hardik Pandit
                via WhatsApp or Email.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                        setPrepared(false);
                      }}
                      placeholder="Aarav Sharma"
                      className="w-full px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#6D685E] bg-[#08080A] border border-white/12 focus:border-[#D4AF37] rounded-sm focus-visible:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        setPrepared(false);
                      }}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#6D685E] bg-[#08080A] border border-white/12 focus:border-[#D4AF37] rounded-sm focus-visible:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-service"
                    className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0] mb-2"
                  >
                    Service Focus
                  </label>
                  <select
                    id="inquiry-service"
                    value={form.service}
                    onChange={(e) => {
                      const next = e.target.value;
                      setForm((prev) => ({ ...prev, service: next }));
                      onSelectService(next);
                      setPrepared(false);
                    }}
                    className="w-full px-4 py-3 text-sm text-[#F5F2EB] bg-[#08080A] border border-white/12 focus:border-[#D4AF37] rounded-sm focus-visible:outline-none transition-colors"
                  >
                    {COLLABORATION_TRACKS.map((track) => (
                      <option key={track} value={track} className="bg-[#08080A]">
                        {track}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs tracking-[0.14em] uppercase text-[#B3ADA0] mb-2"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                      setPrepared(false);
                    }}
                    placeholder="Share your business, goals, and timeline..."
                    className="w-full px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#6D685E] bg-[#08080A] border border-white/12 focus:border-[#D4AF37] rounded-sm focus-visible:outline-none transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-sm text-[#F2B8B5] border border-[#F2B8B5]/30 bg-[#F2B8B5]/10 px-4 py-3 rounded-sm"
                  >
                    {error}
                  </p>
                )}

                {!prepared ? (
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#8F897D]">
                      Pricing tailored to project scope · {STUDIO_INFO.pricingNote}
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#08080A] bg-[#D4AF37] hover:bg-[#EBD183] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EBD183]"
                    >
                      Prepare Inquiry
                    </button>
                  </div>
                ) : (
                  <div
                    role="status"
                    className="mt-4 p-5 rounded-sm border border-[#D4AF37]/40 bg-[#08080A] space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.16em] uppercase text-[#EBD183]">
                          Inquiry Ready to Send
                        </p>
                        <p className="mt-1 text-sm text-[#B3ADA0]">
                          Choose your preferred channel below to send your formatted
                          brief directly to {STUDIO_INFO.founder}.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPrepared(false)}
                        className="text-xs text-[#B3ADA0] hover:text-[#F5F2EB] underline underline-offset-4 cursor-pointer shrink-0"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={whatsappPreparedHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-[#08080A] bg-[#D4AF37] hover:bg-[#EBD183] rounded-sm transition-colors whitespace-nowrap"
                      >
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                        <span>Send via WhatsApp</span>
                      </a>

                      <a
                        href={mailtoHref}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-[#F5F2EB] border border-[#D4AF37]/45 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-sm transition-colors whitespace-nowrap"
                      >
                        <Mail className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                        <span>Send via Email</span>
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
