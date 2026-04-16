import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="location" className="py-24 bg-charcoal text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Details */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-glow text-kelly-green">
              Join the Action
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
              Whether you're celebrating a win or shaking off a loss, Cannonballs is your home for sports in North Fond du Lac.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-matte-black p-3 rounded-full border-glow text-kelly-green mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-xl font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">727 Wisconsin Ave</p>
                  <p className="text-gray-400">North Fond du Lac, WI 54937</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-matte-black p-3 rounded-full border-glow text-kelly-green mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-xl font-semibold mb-1">Give Us a Ring</h3>
                  <a href="tel:+19209079027" className="text-white hover:text-kelly-green transition-colors text-lg">
                    +1 920-907-9027
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-matte-black p-3 rounded-full border-glow text-kelly-green mr-6">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-heading uppercase text-xl font-semibold mb-1">Hours</h3>
                  <p className="text-gray-400 mb-1"><span className="text-white w-24 inline-block">Mon - Thu:</span> 11:00 AM - 12:00 AM</p>
                  <p className="text-gray-400 mb-1"><span className="text-white w-24 inline-block">Friday:</span> 11:00 AM - 2:00 AM</p>
                  <p className="text-gray-400 mb-1"><span className="text-white w-24 inline-block">Saturday:</span> 10:00 AM - 2:00 AM</p>
                  <p className="text-gray-400"><span className="text-white w-24 inline-block">Sunday:</span> 10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Alternative / Graphic */}
          <div className="relative h-96 w-full rounded-md border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-kelly-green/10 group-hover:bg-transparent transition-all z-10 pointer-events-none mix-blend-overlay"></div>
            {/* Generic map placeholder styling */}
            <div 
              className="absolute inset-0 bg-matte-black flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
              }}
            >
              <div className="relative z-20 flex flex-col items-center">
                 <div className="bg-kelly-green text-charcoal p-4 rounded-full shadow-neon-green mb-4 animate-bounce">
                    <MapPin size={32} fill="currentColor" />
                 </div>
                 <div className="bg-charcoal px-6 py-2 rounded shadow-lg border border-kelly-green/30">
                    <p className="font-heading uppercase font-bold text-lg tracking-wider">Cannonballs</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
