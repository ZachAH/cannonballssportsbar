import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function BaseballSVG() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="white" stroke="#e0d8cc" strokeWidth="1"/>
      {/* Left seam curve */}
      <path d="M20 6 C10 20, 10 44, 20 58" stroke="#d63030" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Right seam curve */}
      <path d="M44 6 C54 20, 54 44, 44 58" stroke="#d63030" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Left stitch marks */}
      <line x1="20" y1="14" x2="14" y2="16" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="20" x2="13" y2="22" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18" y1="26" x2="12" y2="27" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18" y1="32" x2="12" y2="32" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18" y1="38" x2="12" y2="37" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="44" x2="13" y2="42" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="50" x2="14" y2="48" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Right stitch marks */}
      <line x1="44" y1="14" x2="50" y2="16" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="45" y1="20" x2="51" y2="22" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="46" y1="26" x2="52" y2="27" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="46" y1="32" x2="52" y2="32" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="46" y1="38" x2="52" y2="37" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="45" y1="44" x2="51" y2="42" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="44" y1="50" x2="50" y2="48" stroke="#d63030" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseballRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const crackRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      // Initial states
      gsap.set(baseballRef.current, { x: '-75vw', y: '55vh', scale: 0.35, rotation: -15, opacity: 1 });
      gsap.set(trailRef.current, { x: '-75vw', y: '55vh', scaleX: 0, opacity: 0 });
      gsap.set(crackRef.current, { scale: 0, opacity: 0 });
      gsap.set(logoWrapperRef.current, { scale: 0.6, opacity: 0, y: 20 });
      gsap.set(textRef.current, { y: 35, opacity: 0 });

      // 1. Baseball arcs in on a home run trajectory
      tl.to(baseballRef.current, {
        keyframes: [
          { x: '-38vw', y: '-28vh', scale: 0.65, rotation: 200, duration: 0.48, ease: 'power2.out' },
          { x: '4vw',   y: '-6vh',  scale: 1.05, rotation: 490, duration: 0.44, ease: 'power2.in'  },
        ],
      })
      // 2. Flash on impact
      .to(crackRef.current, {
        scale: 18,
        opacity: 0.85,
        duration: 0.18,
        ease: 'power3.out',
      }, '-=0.08')
      .to(baseballRef.current, { opacity: 0, duration: 0.08 }, '-=0.18')
      .to(crackRef.current, { opacity: 0, duration: 0.3, ease: 'power1.in' })
      // 3. Logo pops in from the flash
      .to(logoWrapperRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'back.out(1.6)',
      }, '-=0.25')
      // 4. Supporting text rises up
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.45');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/logo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark layered overlay — preserves the green wall tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-deep-bg/40 pointer-events-none" />

      {/* Baseball */}
      <div
        ref={baseballRef}
        className="absolute w-14 h-14 md:w-16 md:h-16 z-20 pointer-events-none"
        style={{ left: '50%', top: '50%', marginLeft: '-28px', marginTop: '-28px' }}
      >
        <BaseballSVG />
      </div>

      {/* Crack flash — cream/white burst */}
      <div
        ref={crackRef}
        className="absolute w-10 h-10 rounded-full z-10 pointer-events-none"
        style={{
          left: '50%', top: '50%',
          marginLeft: '-20px', marginTop: '-20px',
          background: 'radial-gradient(circle, rgba(232,197,158,0.95) 0%, rgba(255,255,255,0.7) 40%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 flex flex-col items-center">
        {/* Logo reveal */}
        <div ref={logoWrapperRef} className="flex flex-col items-center mb-8">
          <img
            src="/small_logo.jpg"
            alt="Cannonballs Sports Bar"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-glow-green-lg border-4 border-brand-green/60 mb-6"
          />
          <h1 className="font-script text-6xl md:text-8xl text-cream text-glow-cream drop-shadow-2xl leading-none">
            Cannonballs
          </h1>
          <p className="font-heading text-xl md:text-2xl uppercase tracking-[0.35em] text-brand-green text-glow mt-2 font-semibold">
            Sports Bar
          </p>
        </div>

        {/* Tagline + CTAs */}
        <div ref={textRef} className="flex flex-col items-center">
          <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Cold drinks, hot food &amp; non-stop game day action in North Fond du Lac.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-brand-green text-white font-heading uppercase px-9 py-4 text-lg font-bold tracking-wider glow-effect hover:bg-green-600 hover:scale-105 transition-all rounded-sm"
            >
              See the Menu
            </a>
            <a
              href="#location"
              className="border-2 border-cream text-cream font-heading uppercase px-9 py-4 text-lg font-bold tracking-wider hover:bg-cream/10 transition-all rounded-sm"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-bg to-transparent pointer-events-none" />
    </section>
  );
}
