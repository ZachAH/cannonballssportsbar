import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-matte-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Setup */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-heading font-bold text-2xl tracking-tighter text-white uppercase">
              Cannonballs <span className="text-kelly-green text-glow">Sports Bar</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#menu" className="font-heading uppercase text-gray-300 hover:text-kelly-green transition-colors duration-200 text-lg tracking-wide">Menu</a>
            <a href="#specialties" className="font-heading uppercase text-gray-300 hover:text-kelly-green transition-colors duration-200 text-lg tracking-wide">Specialties</a>
            <a href="#location" className="font-heading uppercase text-gray-300 hover:text-kelly-green transition-colors duration-200 text-lg tracking-wide">Location</a>
            <button className="bg-kelly-green text-white font-heading uppercase px-6 py-2 rounded-sm glow-effect hover:bg-green-600 transition-all font-semibold tracking-wider">
              Order Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-matte-black border-t border-white/10 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#menu" className="block px-3 py-2 text-base font-heading uppercase font-medium text-gray-300 hover:text-white hover:bg-white/5">Menu</a>
          <a href="#specialties" className="block px-3 py-2 text-base font-heading uppercase font-medium text-gray-300 hover:text-white hover:bg-white/5">Specialties</a>
          <a href="#location" className="block px-3 py-2 text-base font-heading uppercase font-medium text-gray-300 hover:text-white hover:bg-white/5">Location</a>
          <button className="w-full text-center mt-4 bg-kelly-green text-white font-heading uppercase px-6 py-3 rounded-sm shadow-neon-green font-semibold tracking-wider">
            Order Online
          </button>
        </div>
      )}
    </nav>
  );
}
