export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-flex marquee">
        {loop.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span className="font-display italic text-6xl md:text-8xl">{t}</span>
            <span className="text-ember text-4xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
