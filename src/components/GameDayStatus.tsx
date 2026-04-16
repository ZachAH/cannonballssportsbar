export default function GameDayStatus() {
  return (
    <div className="w-full bg-kelly-green/10 border-b border-kelly-green text-center py-2 px-4 shadow-neon-green">
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-2.5 h-2.5 bg-kelly-green rounded-full shadow-neon-green-glow"></div>
        <p className="font-heading font-semibold text-white tracking-wider text-sm md:text-base">
          LIVE: BUCKS VS. CELTICS — $5 TALLBOYS UNTIL FINAL WHISTLE
        </p>
      </div>
    </div>
  );
}
