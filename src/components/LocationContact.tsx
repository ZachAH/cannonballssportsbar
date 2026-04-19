import { MapPin, Phone, Clock, Share2 } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="location" className="py-24 bg-field-green text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-heading uppercase tracking-[0.3em] text-brand-green text-sm font-semibold mb-3">
            North Fond du Lac, WI
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Come <span className="text-cream">Find Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-brand-green/15 p-3 rounded-full border border-brand-green/30 text-brand-green flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-heading uppercase font-semibold text-lg mb-1 text-cream">Location</h3>
                <p className="text-white/65">727 Wisconsin Ave</p>
                <p className="text-white/65">North Fond du Lac, WI 54937</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-brand-green/15 p-3 rounded-full border border-brand-green/30 text-brand-green flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-heading uppercase font-semibold text-lg mb-1 text-cream">Give Us a Ring</h3>
                <a href="tel:+19209079027" className="text-white hover:text-brand-green transition-colors text-lg font-medium">
                  (920) 907-9027
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-brand-green/15 p-3 rounded-full border border-brand-green/30 text-brand-green flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-heading uppercase font-semibold text-lg mb-2 text-cream">Hours</h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  {[
                    ['Mon – Thu', '11am – Midnight'],
                    ['Friday',    '11am – 2am'],
                    ['Saturday',  '10am – 2am'],
                    ['Sunday',    '10am – Midnight'],
                  ].map(([day, hrs]) => (
                    <>
                      <dt key={day + '-dt'} className="text-white font-medium">{day}</dt>
                      <dd key={day + '-dd'} className="text-white/60">{hrs}</dd>
                    </>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-brand-green/15 p-3 rounded-full border border-brand-green/30 text-brand-green flex-shrink-0">
                <Share2 size={22} />
              </div>
              <div>
                <h3 className="font-heading uppercase font-semibold text-lg mb-1 text-cream">Follow Us</h3>
                <a href="#" className="text-white/65 hover:text-brand-green transition-colors">
                  Cannonballs Sports Bar on Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="relative w-full rounded-md overflow-hidden border border-brand-green/20 shadow-glow-green aspect-[4/3]">
            <iframe
              title="Cannonballs Sports Bar location"
              src="https://www.google.com/maps?q=727+Wisconsin+Ave,+North+Fond+du+Lac,+WI+54937&output=embed"
              className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-brand-green/8 pointer-events-none mix-blend-multiply" />
          </div>

        </div>
      </div>
    </section>
  );
}
