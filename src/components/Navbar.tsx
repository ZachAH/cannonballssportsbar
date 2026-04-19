import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-deep-bg/95 backdrop-blur-md border-b border-brand-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-2">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/small_logo.jpg"
              alt="Cannonballs"
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-green/50"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-script text-cream text-xl leading-none">Cannonballs</span>
              <span className="font-heading text-brand-green text-xs uppercase tracking-[0.2em] font-semibold">Sports Bar</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#menu" className="font-heading uppercase text-white/70 hover:text-cream transition-colors duration-200 tracking-wide">Menu</a>
            <a href="#specials" className="font-heading uppercase text-white/70 hover:text-cream transition-colors duration-200 tracking-wide">Specials</a>
            <a href="#location" className="font-heading uppercase text-white/70 hover:text-cream transition-colors duration-200 tracking-wide">Location</a>
            <a
              href="tel:+19209079027"
              className="bg-brand-green text-white font-heading uppercase px-6 py-2.5 rounded-sm glow-effect hover:bg-green-600 transition-all font-semibold tracking-wider text-sm"
            >
              Call Us
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white p-2">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-field-green border-t border-brand-green/20 px-2 pt-2 pb-4 space-y-1">
          <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 font-heading uppercase text-white/80 hover:text-cream hover:bg-white/5">Menu</a>
          <a href="#specials" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 font-heading uppercase text-white/80 hover:text-cream hover:bg-white/5">Specials</a>
          <a href="#location" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 font-heading uppercase text-white/80 hover:text-cream hover:bg-white/5">Location</a>
          <a
            href="tel:+19209079027"
            className="block mt-3 mx-3 text-center bg-brand-green text-white font-heading uppercase px-6 py-3 rounded-sm font-semibold tracking-wider"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  );
}
