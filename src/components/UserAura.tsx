type UserAuraProps = {
  level: number;
  children: React.ReactNode;
};

export function UserAura({ level, children }: UserAuraProps) {
  const rings = Math.min(level, 5);
  const ringColors = [
    "border-accent/25",
    "border-accent-blue/25",
    "border-accent-pink/25",
    "border-accent-green/25",
    "border-petrol/25",
  ];

  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
      {Array.from({ length: rings }).map((_, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute inset-0 rounded-full border ${ringColors[index % ringColors.length]}`}
          style={{
            transform: `scale(${1 + (index + 1) * 0.12})`,
            animation: `aura-breathe ${4 + index * 0.4}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}

      {level >= 2 && (
        <>
          <span className="absolute top-6 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/70" />
          <span className="absolute right-8 top-1/3 h-2 w-2 rounded-full bg-accent-blue/70" />
          <span className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-accent-pink/70" />
        </>
      )}
      {level >= 4 && (
        <>
          <span className="absolute top-14 right-12 h-1.5 w-1.5 rounded-full bg-accent-green/70" />
          <span className="absolute bottom-16 right-16 h-1.5 w-1.5 rounded-full bg-accent-blue/60" />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
