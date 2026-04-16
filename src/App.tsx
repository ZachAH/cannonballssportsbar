import GameDayStatus from './components/GameDayStatus';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import LocationContact from './components/LocationContact';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white font-body">
      <GameDayStatus />
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <LocationContact />
      </main>
      
      {/* Footer */}
      <footer className="bg-matte-black py-8 border-t border-white/5 text-center px-4">
        <div className="max-w-7xl mx-auto">
          <p className="font-heading uppercase tracking-widest text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Cannonballs Sports Bar. All Rights Reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-kelly-green transition-colors">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-kelly-green transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
