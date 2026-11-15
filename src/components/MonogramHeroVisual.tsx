import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import studioMonolithWebp from '../assets/images/studio_monolith_abstract_1794682179820.webp';
import studioMonolithImg from '../assets/images/studio_monolith_abstract_1794682179820.jpg';

export function MonogramHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[520px] rounded-sm overflow-hidden border border-[#D4AF37]/20 bg-[#0E0E12] flex items-center justify-center group">
      {/* Background luxury architectural obsidian monolith */}
      {!imgError ? (
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={studioMonolithWebp} type="image/webp" />
          <img
            src={studioMonolithImg}
            width={1200}
            height={896}
            decoding="async"
            fetchPriority="high"
            alt="Minimalist obsidian architectural monolith with brushed champagne gold light edge"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center opacity-55 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </picture>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.16),rgba(16,16,20,0.95)_70%)]"
        />
      )}

      {/* Measured dark scrim + warm champagne radial illumination */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/55 to-[#08080A]/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(212,175,55,0.14)_0%,transparent_58%)]"
      />

      {/* Corner architectural alignment ticks */}
      <span
        aria-hidden="true"
        className="absolute top-5 left-5 w-4 h-4 border-t border-l border-[#D4AF37]/45"
      />
      <span
        aria-hidden="true"
        className="absolute top-5 right-5 w-4 h-4 border-t border-r border-[#D4AF37]/45"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-[#D4AF37]/45"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-[#D4AF37]/45"
      />

      {/* Animated MLM Monogram Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
          {/* Outer rotating orbital ring */}
          <svg
            aria-hidden="true"
            viewBox="0 0 260 260"
            className="absolute inset-0 w-full h-full animate-orbit-slow"
          >
            <circle
              cx="130"
              cy="130"
              r="122"
              fill="none"
              stroke="rgba(212, 175, 55, 0.24)"
              strokeWidth="0.8"
              strokeDasharray="3 9"
            />
            <circle
              cx="130"
              cy="8"
              r="2.2"
              fill="#EBD183"
            />
          </svg>

          {/* Inner counter-rotating fine hairline ring */}
          <svg
            aria-hidden="true"
            viewBox="0 0 260 260"
            className="absolute inset-0 w-full h-full animate-orbit-reverse"
          >
            <circle
              cx="130"
              cy="130"
              r="98"
              fill="none"
              stroke="rgba(245, 242, 235, 0.14)"
              strokeWidth="0.75"
              strokeDasharray="48 16 12 16"
            />
          </svg>

          {/* Glass obsidian medallion housing the custom MLM SVG monogram */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#0A0A0E]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.14)] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_65px_rgba(212,175,55,0.24)]"
          >
            <svg
              viewBox="0 0 140 140"
              className="w-24 h-24 sm:w-28 sm:h-28"
              role="img"
              aria-label="MLM Studio architectural monogram"
            >
              <defs>
                <linearGradient id="mlmGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5E6B3" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9C7A24" />
                </linearGradient>
              </defs>

              {/* Subtle inner geometric diamond frame */}
              <motion.polygon
                points="70,12 128,70 70,128 12,70"
                fill="none"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="0.9"
                initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Left M */}
              <motion.path
                d="M 28 88 V 52 L 41 72 L 54 52 V 88"
                fill="none"
                stroke="url(#mlmGold)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Center architectural L pillar */}
              <motion.path
                d="M 65 44 V 94 H 79"
                fill="none"
                stroke="#F5F2EB"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Right M */}
              <motion.path
                d="M 86 88 V 52 L 99 72 L 112 52 V 88"
                fill="none"
                stroke="url(#mlmGold)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Clean unboxed studio caption below monogram */}
        <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#EBD183]/90">
          <span>MLM Monogram</span>
          <span aria-hidden="true" className="text-[#D4AF37]/50">
            ·
          </span>
          <span className="text-[#B3ADA0]">Est. India</span>
        </div>
      </div>
    </div>
  );
}
