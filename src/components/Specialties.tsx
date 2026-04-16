import { Flame, Star } from 'lucide-react';

const specialties = [
  {
    name: "Hand-Breaded Chicken Strips",
    description: "Our signature crispy, golden chicken strips, made from scratch daily.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Classic Sandwiches",
    description: "Stacked high with premium meats, cheese, and fresh veggies.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Friday Fish Fry",
    description: "A Wisconsin tradition. Beer-battered cod served with homemade fries.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1599557434771-331ff3ce96bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jumbo Shrimp",
    description: "Perfectly seasoned and crispy fried jumbo shrimp.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1625943686862-27361d76395e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-matte-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-kelly-green mb-4">
            <Flame size={24} className="animate-pulse" />
            <span className="font-heading uppercase tracking-widest font-semibold">Game Day Grub</span>
            <Flame size={24} className="animate-pulse" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-glow">
            Our Specialties
          </h2>
          <p className="mt-4 text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Voted best in North Fond du Lac. Pair with an ice-cold beer and enjoy the game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className="bg-charcoal rounded-md overflow-hidden border border-white/10 hover:border-glow transition-all duration-300 group shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-kelly-green/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-semibold uppercase">{item.name}</h3>
                  <span className="text-kelly-green font-bold">{item.price}</span>
                </div>
                <div className="flex space-x-1 text-kelly-green mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="w-full text-center font-heading uppercase text-sm font-semibold tracking-wider text-white hover:text-kelly-green transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-heading uppercase text-gray-300 mb-6">Don't forget our famous homemade fries with every order!</p>
          <button className="bg-transparent border-2 border-kelly-green text-kelly-green hover:bg-kelly-green hover:text-white glow-effect transition-all duration-300 font-heading uppercase px-8 py-3 rounded-sm font-bold tracking-wider">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
