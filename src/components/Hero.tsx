import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cannonballRef = useRef<HTMLDivElement>(null);
  const explosionRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure initial states are set
      gsap.set(cannonballRef.current, { x: '-100vw', y: '-50vh', scale: 0.5, opacity: 1 });
      gsap.set(explosionRef.current, { scale: 0, opacity: 0 });
      gsap.set(logoWrapperRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(textRef.current, { y: 30, opacity: 0 });

      // 1. Cannonball streaks in
      tl.to(cannonballRef.current, {
        x: '0',
        y: '0',
        duration: 0.4,
        ease: 'power4.in',
      })
      // 2. Hits center, cannonball disappears
      .to(cannonballRef.current, { opacity: 0, duration: 0.1 })
      // 3. Green explosion pulses out
      .to(explosionRef.current, {
        scale: 20,
        opacity: 0.8,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.1')
      // Fade out the explosion ripple
      .to(explosionRef.current, { opacity: 0, duration: 0.3 })
      // 4. Logo scales up simultaneously with the explosion fading
      .to(logoWrapperRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.4')
      // 5. Fade in supporting text
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.5');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1572116469696-ed7f3ba9e10d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'luminosity'
      }}
    >
      {/* Dark overlay to style the desaturated image */}
      <div className="absolute inset-0 bg-charcoal/80 pointer-events-none"></div>

      {/* Animation Elements */}
      <div 
        ref={cannonballRef} 
        className="absolute w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_0_50px_15px_rgba(255,255,255,0.9)] z-20 pointer-events-none left-1/2 top-1/2 -ml-8 -mt-8 md:-ml-12 md:-mt-12"
      ></div>

      <div 
        ref={explosionRef}
        className="absolute w-32 h-32 bg-kelly-green rounded-full opacity-0 z-10 pointer-events-none mix-blend-screen left-1/2 top-1/2 -ml-16 -mt-16"
      ></div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 flex flex-col items-center">
        <div ref={logoWrapperRef} className="flex flex-col items-center mb-6">
          <h1 className="font-heading font-bold text-5xl md:text-8xl tracking-tighter text-white uppercase drop-shadow-2xl">
            Cannonballs
          </h1>
          <h2 className="font-heading font-medium text-3xl md:text-5xl text-kelly-green uppercase tracking-widest text-glow mt-[-10px]">
            Sports Bar
          </h2>
        </div>
        
        <div ref={textRef} className="flex flex-col items-center">
          <p className="font-body text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Cold drinks, hot food, and non-stop game day action in North Fond du Lac.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-kelly-green text-white font-heading uppercase px-8 py-4 rounded-sm text-xl font-bold tracking-wider glow-effect hover:bg-green-600 hover:scale-105 transition-all">
              View Menu
            </button>
            <button className="bg-transparent border-2 border-kelly-green text-white font-heading uppercase px-8 py-4 rounded-sm text-xl font-bold tracking-wider hover:bg-kelly-green/10 transition-all">
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
