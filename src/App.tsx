import GameDayStatus from './components/GameDayStatus';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import WeeklyMenu from './components/WeeklyMenu';
import LocationContact from './components/LocationContact';

function App() {
  return (
    <div className="min-h-screen bg-deep-bg text-white font-body">
      <GameDayStatus />
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <WeeklyMenu />
        <LocationContact />
      </main>

      <footer className="bg-matte-black py-8 border-t border-white/5 text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/small_logo.jpg" alt="Cannonballs" className="w-9 h-9 rounded-full object-cover border border-brand-green/40" />
            <span className="font-script text-cream text-xl">Cannonballs</span>
            <span className="font-heading text-brand-green text-xs uppercase tracking-widest">Sports Bar</span>
          </div>
          <p className="font-heading uppercase tracking-widest text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Cannonballs Sports Bar · 727 Wisconsin Ave, North Fond du Lac, WI
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-cream transition-colors text-sm font-heading uppercase tracking-wider">Facebook</a>
            <a href="tel:+19209079027" className="text-white/40 hover:text-cream transition-colors text-sm font-heading uppercase tracking-wider">Call Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
