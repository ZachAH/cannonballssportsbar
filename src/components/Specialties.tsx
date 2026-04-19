const items = [
  {
    name: 'Chicken Strips & Fries',
    description: 'Hand-breaded to order, golden and crispy every time. Served with our homemade fries.',
    tag: 'Tue – Thu',
    image: '/menu_1.jpg',
  },
  {
    name: 'Chicken Wings',
    description: 'Sauced your way — buffalo, BBQ, or dry rub. The kind that make you say HE!! YEAH.',
    tag: 'Tue – Thu',
    image: '/menu_2.jpg',
  },
  {
    name: 'Chicken Sandwich & Fries',
    description: 'Big, crispy chicken on toast with a side of our thick-cut homemade fries.',
    tag: 'Tue – Thu',
    image: '/menu_3.jpg',
  },
  {
    name: 'Fish & Shrimp Fry',
    description: 'Fresh fish and jumbo shrimp fried up right. A Friday tradition worth driving for.',
    tag: 'Fri / Sat',
    image: '/menu_1.jpg',
  },
];

export default function Specialties() {
  return (
    <section id="menu" className="py-24 bg-field-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="font-heading uppercase tracking-[0.3em] text-brand-green text-sm font-semibold mb-3">
            Fresh &amp; Made to Order
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
            What We're&nbsp;
            <span className="text-cream">Cooking</span>
          </h2>
          <p className="mt-4 text-white/60 font-body text-lg max-w-2xl mx-auto">
            No traditional kitchen — just open-bar cooking and real food that speaks for itself.
            Check the reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card-bg rounded-md overflow-hidden border border-white/8 hover:border-brand-green/40 transition-all duration-300 group shadow-lg"
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute top-3 left-3 z-10 bg-brand-green text-white text-xs font-heading uppercase tracking-wider px-2.5 py-1 rounded-sm font-semibold">
                  {item.tag}
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold uppercase text-white mb-2 leading-tight">{item.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BBQ Monday callout */}
        <div className="mt-12 bg-card-bg border border-brand-green/25 rounded-md p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl select-none">🥩</div>
          <div className="flex-1">
            <p className="font-heading uppercase tracking-wider text-brand-green text-sm font-semibold mb-1">Every Monday</p>
            <h3 className="font-heading text-2xl font-bold uppercase text-white">BBQ Beef Sandwiches</h3>
            <p className="text-white/55 text-sm mt-1">Slow-cooked BBQ beef piled high. Start the week right.</p>
          </div>
          <a
            href="#location"
            className="flex-shrink-0 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all font-heading uppercase px-7 py-3 rounded-sm font-bold tracking-wider text-sm"
          >
            Come On In
          </a>
        </div>

      </div>
    </section>
  );
}
