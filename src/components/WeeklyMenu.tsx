const schedule = [
  {
    day: 'Monday',
    emoji: '🥩',
    items: 'BBQ Beef Sandwiches',
    note: 'Slow-cooked BBQ beef piled high to kick off the week.',
  },
  {
    day: 'Tue – Thu',
    emoji: '🍗',
    items: 'Chicken Strips · Sandwiches · Wings',
    note: 'Who\'s ready for our chicken wings? HE!! YEAH.',
  },
  {
    day: 'Fri / Sat',
    emoji: '🐟',
    items: 'Fish & Shrimp Fry',
    note: 'Fresh fish and jumbo shrimp — a local tradition done right.',
  },
];

export default function WeeklyMenu() {
  return (
    <section id="specials" className="py-24 bg-deep-bg text-white border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="font-heading uppercase tracking-[0.3em] text-brand-green text-sm font-semibold mb-3">
            Weekly Specials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
            The Weekly&nbsp;
            <span className="text-cream">Lineup</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {schedule.map((s, i) => (
            <div
              key={i}
              className="bg-card-bg border border-white/8 rounded-md p-7 flex flex-col items-center text-center hover:border-brand-green/35 transition-all duration-300"
            >
              <span className="text-5xl mb-4 select-none">{s.emoji}</span>
              <p className="font-heading text-brand-green uppercase tracking-widest text-xs font-semibold mb-2">{s.day}</p>
              <h3 className="font-heading text-xl font-bold uppercase text-white leading-tight mb-3">{s.items}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Personality callout — straight from their voice */}
        <div className="bg-field-green border border-cream/20 rounded-md p-7 md:p-10 flex gap-5 items-start">
          <span className="text-3xl select-none flex-shrink-0 mt-0.5">💬</span>
          <div>
            <p className="font-heading uppercase tracking-wider text-cream text-sm font-semibold mb-3">A Note From Us</p>
            <p className="text-white/75 text-base leading-relaxed">
              If you come in and it smells like food — that's because <strong className="text-white">we're cooking real food in an open bar</strong> with no traditional kitchen.
              Chicken, fish, shrimp — fresh and made to order. Not for everybody, but our regulars love it.
              Don't take our word for it: <span className="text-cream font-medium">look up the reviews.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
