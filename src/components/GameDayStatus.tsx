export default function GameDayStatus() {
  return (
    <div className="w-full bg-brand-green text-white text-center py-2.5 px-4">
      <div className="flex items-center justify-center space-x-3">
        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        <p className="font-heading font-semibold tracking-wider text-sm md:text-base uppercase">
          Open Now — Come Watch the Game &amp; Grab a Cold One
        </p>
      </div>
    </div>
  );
}
